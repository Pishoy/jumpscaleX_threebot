from Jumpscale import j


class Package(j.baseclasses.threebot_package):
    def _init(self, *args, **kwargs):
        self.bcdb = self._package.threebot_server.bcdb_get("appstore")

    def prepare(self):
        """
        Dependencies
        """
        # write 4 apps to database
        bcdb = j.data.bcdb.get("appstore")
        appModel = bcdb.model_get(url="appstore.app")

        appsList = [
            {
                "appname": "Mail",
                "installed": False,
                "description": "3bot-to-3bot mail service. Convenience of e-mail meets privacy, no man in the middle.",
                "image": "upcoming",
            },
            {
                "appname": "Contacts",
                "installed": False,
                "description": "Your personal contacts list, integration with other apps possible.",
                "image": "upcoming",
            },
            {
                "appname": "Calendar",
                "installed": False,
                "description": "Standard private calendar.",
                "image": "upcoming",
            },
            {
                "appname": "Wallet",
                "installed": False,
                "description": "TFT, BTC, GFT, ... Keep them safe, keep them here.",
                "image": "upcoming",
            },
        ]

        for application in appsList:
            # rework needed
            app = appModel.new()

            app.appname = application["appname"]
            app.installed = application["installed"]
            app.description = application["description"]
            app.image = application["image"]
            app.save()

    def start(self):
        self.bcdb.models_add(path=self.package_root + "/models")
        self.gedis_server.actors_add(path=self.package_root + "/actors")

        server = self.openresty
        server.install(reset=False)
        server.configure()
        website = server.websites.get("appstore")
        website.ssl = False
        website.port = 8081
        locations = website.locations.get("appstore")

        # import pdb; pdb.set_trace()

        # Serve static files
        website_location = locations.locations_static.new()
        website_location.name = "pastebin"
        website_location.path_url = "/"
        website_location.use_jumpscale_weblibs = True
        fullpath = j.sal.fs.joinPaths(self.package_root, "html/")
        website_location.path_location = fullpath

        ## START BOTTLE ACTORS ENDPOINT

        rack = j.servers.rack.get()
        # get gedis http server
        app = j.servers.gedishttp.get_app()

        # add gedis http server to the rack
        rack.bottle_server_add(name="gedishttp", port=9201, app=app)

        # create location `/actors` to on your website `8084` to forward
        # requests to `9201` where the bottle server is running
        proxy_location = locations.locations_proxy.new()
        proxy_location.name = "gedishttp"
        proxy_location.path_url = "/actors"
        proxy_location.ipaddr_dest = "0.0.0.0"
        proxy_location.port_dest = 9201
        proxy_location.scheme = "http"
        ## END BOTTLE ACTORS ENDPOINT

        locations.configure()
        website.configure()

    def stop(self):
        pass

    def uninstall(self):
        """
        Remove Dependencies
        """
        # clear database