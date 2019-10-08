from Jumpscale import j


class kb(j.baseclasses.threebot_actor):
    def _init(self, **kwargs):
        self.kb_model = j.data.bcdb.system.model_get(url="jumpscale.kb.website")

    def list_published_sites(self, user_session=None):
        pass

    def website_publish(self, user_session=None):
        pass

    def website_unpublish(self, user_session=None):
        pass

    def _publish_static_site(self):
        pass

    def _publish_hugo_site(self):
        pass

    def _publish_blog(self):
        pass

    def search_3bots(self, user_session=None):
        pass
