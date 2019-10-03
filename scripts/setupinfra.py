from Jumpscale import j
import random

redisconfig = """\
bind {bindip}
protected-mode yes
port 6379
tcp-backlog 511
timeout 0
tcp-keepalive 300
daemonize no
supervised no
pidfile /var/run/redis_6379.pid
loglevel notice
logfile ""
always-show-logo yes
save 900 1
save 300 10
save 60 10000
stop-writes-on-bgsave-error yes
rdbcompression yes
rdbchecksum yes
dbfilename dump.rdb
dir {dbpath}
replica-serve-stale-data yes
replica-read-only yes
repl-diskless-sync no
repl-diskless-sync-delay 5
repl-disable-tcp-nodelay no
replica-priority 100
lazyfree-lazy-eviction no
lazyfree-lazy-expire no
lazyfree-lazy-server-del no
replica-lazy-flush no
appendonly no
appendfilename "appendonly.aof"
appendfsync everysec
no-appendfsync-on-rewrite no
auto-aof-rewrite-percentage 100
auto-aof-rewrite-min-size 64mb
aof-load-truncated yes
aof-use-rdb-preamble yes
lua-time-limit 5000
slowlog-log-slower-than 10000
slowlog-max-len 128
latency-monitor-threshold 0
notify-keyspace-events ""
hash-max-ziplist-entries 512
hash-max-ziplist-value 64
list-max-ziplist-size -2
list-compress-depth 0
set-max-intset-entries 512
zset-max-ziplist-entries 128
zset-max-ziplist-value 64
hll-sparse-max-bytes 3000
stream-node-max-bytes 4096
stream-node-max-entries 100
activerehashing yes
client-output-buffer-limit normal 0 0 0
client-output-buffer-limit replica 256mb 64mb 60
client-output-buffer-limit pubsub 32mb 8mb 60
"""

unittemplate = """\
[Unit]
Description={name}
After=network.target

[Service]
ExecStart={path}
Type=simple

[Install]
WantedBy=multi-user.target
"""

corednsconfig = """\
. {
    redis  {
        address 127.0.0.1:6379
    }
    forward 8.8.8.8 9.9.9.9
}
"""

routerconfig = """\
[server]
addr = "0.0.0.0"
port = 443
[server.dbbackend]
type 	 = "redis"
addr     = "127.0.0.1"
port     = 6379
refresh  = 10
"""


tcprouterpath = "/sandbox/bin/tcprouter"
redisserverpath = "/sandbox/bin/redis-server"
corednspath = "/sandbox/bin/coredns"
if not j.sal.fs.exists(redisserverpath) or not j.sal.fs.exists(tcprouterpath):
    print("Installing tcprouter")
    j.builders.network.tcprouter.install()
if not j.sal.fs.exists(corednspath):
    print("Installing coredns")
    j.builders.network.coredns.install()

# we want 3 routers
do = j.clients.digitalocean.get()
do.project_name = "3bot Infrastructure"
size = "s-1vcpu-1gb"
regions = do.digitalocean_region_names
random.shuffle(regions)
regions = regions[:3]
if len(regions) < 3:
    raise j.exceptions.Runtime("Not enough regions")
clients = []

print("Install wg on manager")
masterip = "192.168.99.254"
wg = j.tools.wireguard.get("manager", autosave=False)
wg.interface_name = "wgman"
wg.port = 7778
wg.network_public = j.sal.nettools.getReachableIpAddress("8.8.8.8", 53)
wg.network_private = f"{masterip}/24"
wg.install()
wg.save()

print("Start local 3bot")
client = j.servers.threebot.local_start_default()
client.actors.package_manager.package_add('namemanager', path='/sandbox/code/github/threefoldtech/jumpscaleX_threebot/ThreeBotPackages/threebot/namemanager')
client.actors.package_manager.package_add('gridnetwork', path='/sandbox/code/github/threefoldtech/jumpscaleX_threebot/ThreeBotPackages/threefold/gridnetwork')
client.actors.package_manager.package_add('phonebook', path='/sandbox/code/github/threefoldtech/jumpscaleX_threebot/ThreeBotPackages/threefold/phonebook')
client.reload()


networks = client.actors.gridnetwork.network_find()
for network in networks.res:
    if network.name == "3botnetwork":
        break
else:
    client.actors.gridnetwork.network_add("3botnetwork", "10.2.0.0/16")

existingendpoints = []
for endpoint in client.actors.gridnetwork.network_endpoint_find('3botnetwork').res:
    existingendpoints.append(endpoint.network_public.split("/")[0])

print("Register dns entries")
managerip = j.sal.nettools.getDefaultIPConfig()[1]
j.tools.tf_gateway.domain_register_a('@', '3bot.grid.tf', managerip)
j.tools.tf_gateway.domain_register_cname('phonebook', '3bot.grid.tf', '3bot.grid.tf.')
j.tools.tf_gateway.domain_register_cname('gridmanager', '3bot.grid.tf', '3bot.grid.tf.')
j.tools.tf_gateway.domain_register_cname('namemanager', '3bot.grid.tf', '3bot.grid.tf.')

def configure_wg(ssh_name, privateip):
    wgr = j.tools.wireguard.get(ssh_name, autosave=False)
    wgr.interface_name = "wgman"
    wgr.sshclient_name = ssh_name
    wgr.network_private = f"{privateip}/24"
    print(f"  Install wg")
    wgr.install()
    wgr.port = 7778
    wgr.save()
    wgr.peer_add(wg)
    wgr.save()
    print(f"  Configure wg")
    wgr.configure()
    # add peer to "manager"
    wg.peer_add(wgr)

def configure_systemd_unit(executor, name, path):
    systemdconfig = unittemplate.format(
        name=name, path=path
    )
    executor.file_write(f"/etc/systemd/system/{name}.service", systemdconfig)
    executor.execute("systemctl daemon-reload")
    executor.execute(f"systemctl enable {name}")
    executor.execute(f"systemctl restart {name}")

def configure_coredns(executor):
    print("  Configuring coredns")
    configpath = "/sandbox/cfg/coredns.conf"
    executor.file_write(configpath, corednsconfig)
    executor.execute("systemctl stop systemd-resolved && systemctl disable systemd-resolved")
    configure_systemd_unit(executor, "coredns",  path=f"{corednspath} -conf {configpath}")

def configure_redis(executor, privateip):
    print("  Configuring redis")
    dbpath = "/sandbox/var/redis/"
    configpath = "/sandbox/cfg/redis.conf"
    if privateip != masterip:
        bindip = f"127.0.0.1 {privateip}"
    else:
        bindip = privateip
    config = redisconfig.format(bindip=bindip, dbpath=dbpath)
    if privateip != masterip:
        config += f"\nslaveof {masterip} 6379\n"
    executor.file_write(configpath, config)
    configure_systemd_unit(executor, "redis-jsx",  path=f"{redisserverpath} {configpath}")


def configure_tcprouter(executor):
    print("  Configuring tcprouter")
    configpath = "/sandbox/cfg/router.toml"
    executor.file_write(configpath, routerconfig)
    configure_systemd_unit(executor, "tcprouter",  path=f"{tcprouterpath} {configpath}")


configure_redis(j.tools.executorLocal, masterip)


for x, region in enumerate(regions):
    name = f"router{x+1}"
    sshname = f"do_{name}"
    if not do.droplet_exists(name):
        print(f"Droplet create {name}")
        droplet, _ = do.droplet_create(name, "Jo", region=region, size_slug=size)
    else:
        print(f"Droplet get {name}")
        droplet = do.droplet_get(name)
    executor = j.tools.executor.ssh_get(sshname)
    clients.append(executor)
    for binary in (tcprouterpath, redisserverpath, corednspath):
        if not executor.exists(binary):
            print(f"  Copy {binary}")
            executor.upload(binary, binary)

    privateip = f"192.168.99.{x + 1}"
    configure_wg(sshname, privateip)
    configure_redis(executor, privateip)
    configure_tcprouter(executor)
    configure_coredns(executor)
    if executor.sshclient.addr not in existingendpoints:
        client.actors.gridnetwork.network_endpoint_add("3botnetwork", sshname)
    j.tools.tf_gateway.domain_register_a('gateway', '3bot.grid.tf', executor.sshclient.adddr)

wg.save()
wg.configure()
