import cherrypy
import os
import sys
import config
import json
from PIL import Image
from string import Template
import math
from optparse import OptionParser

coub_card_template = Template(
    open(os.path.join(os.path.dirname(os.path.realpath(__file__)), "templates/coub_card_template.html"),
         encoding="utf-8").read())
index_template = Template(
    open(os.path.join(os.path.dirname(os.path.realpath(__file__)), "templates/index_template.html"),
         encoding="utf-8").read())
embed_template = Template(
    open(os.path.join(os.path.dirname(os.path.realpath(__file__)), "templates/embed_template.html"),
         encoding="utf-8").read())

usage = "usage: %prog [options] arg"
parser = OptionParser(usage)
parser.add_option("-d", "--downloads",  dest="downloads",  help="Folder with coubs", default=None)
(options, args) = parser.parse_args()
if options.downloads is not None:
    config.download_folder = os.path.join(os.path.dirname(os.path.realpath(__file__)), options.downloads)

print("Reading coubs from folder %s" % config.download_folder)

class CoubViewer(object):
    @cherrypy.expose
    def index(self, page=1, limit=10):
        ls = os.listdir(config.download_folder)
        if os.path.exists(".gitkeep"):
            ls.remove(".gitkeep")
        page_coubs = ls[(int(page) - 1) * int(limit):(int(page) - 1) * int(limit) + int(limit)]
        pagination = {
            "status_back": "disabled" if int(page) < 2 else "",
            "status_forward": "disabled" if int(page) + 1 > math.ceil(len(ls) / int(limit)) else "",
            "back_page": int(page) - 1 if int(page) > 1 else 1,
            "current_page": page,
            "forward_page": int(page) + 1 if int(page) + 1 < math.ceil(len(ls) / int(limit)) else math.ceil(
                len(ls) / int(limit)),

        }

        coub_cards = ""
        for coub in page_coubs:
            ls = os.listdir(os.path.join(config.download_folder, coub))
            first_frame = [s for s in ls if ".jpg" in s]
            coub_json = json.loads(
                open(os.path.join(config.download_folder, "{0}/coub.json".format(coub)), encoding="utf-8").read())
            coub_cards += coub_card_template.substitute(
                coub_first_frame="/coub-storage/{0}/{1}".format(coub, first_frame[0]), coub_name=coub_json["title"],
                coub_permalink=coub[1:-1])
        return index_template.substitute(coub_cards=coub_cards, status_back=pagination["status_back"],
                                         back_page=pagination["back_page"],
                                         current_page=pagination["current_page"],
                                         forward_page=pagination["forward_page"],
                                         status_forward=pagination["status_forward"])

    @cherrypy.expose
    def embed(self, coub=None):
        coub_json = json.loads(
            open(os.path.join(config.download_folder, "[{0}]/coub.json".format(coub)), encoding="utf-8").read())
        coub_folder = os.path.join(config.download_folder, "[{0}]".format(coub))
        ls = os.listdir(coub_folder)
        ls.remove("coub.json")
        video = [s for s in ls if ".mp4" in s]
        audio = [s for s in ls if ".mp3" in s]
        first_frame = [s for s in ls if ".jpg" in s]
        if len(video) > 0:
            size = os.path.getsize(os.path.join(config.download_folder, "[{0}]".format(coub), video[0]))
            keys = coub_json['file_versions']["html5"]["video"].keys()
            for i in keys:
                coub_json['file_versions']["html5"]["video"][i]["url"] = "/coub-storage/[{0}]/{1}".format(coub,
                                                                                                          video[0])
                coub_json['file_versions']["html5"]["video"][i]["size"] = size
        if len(audio) > 0:
            size = os.path.getsize(os.path.join(config.download_folder, "[{0}]".format(coub), audio[0]))
            keys = coub_json['file_versions']["html5"]["audio"].keys()
            for i in keys:
                if i == "sample_duration": continue
                coub_json['file_versions']["html5"]["audio"][i]["url"] = "/coub-storage/[{0}]/{1}".format(coub,
                                                                                                          audio[0])
                coub_json['file_versions']["html5"]["audio"][i]["size"] = size

        if len(first_frame) > 0:
            im = Image.open(os.path.join(config.download_folder, "[{0}]".format(coub), first_frame[0]))
            width, height = im.size
            coub_json["computed"] = {
                "aspectRatio": width / height,
                "dims": [
                    "auto, auto"
                ],
                "firstFrameUrl": "/coub-storage/[{0}]/{1}".format(coub, first_frame[0])
            }
            coub_json["first_frame_versions"]["template"] = "/coub-storage/[{0}]/{1}".format(coub, first_frame[0])

        page = embed_template.substitute(coub_name=coub_json["title"],
                                         coub_image="/coub-storage/[{0}]/{1}".format(coub, first_frame[0]),
                                         coub_meta=json.dumps(coub_json))
        return page


conf = {"/assets": {
    'tools.staticdir.on': True,
    'tools.staticdir.dir': os.path.join(os.path.dirname(os.path.realpath(__file__)), "assets")
},
    "/coub-storage": {
        'tools.staticdir.on': True,
        'tools.staticdir.dir': config.download_folder
    },
    'global': {
        'engine.autoreload.on': False,
        "server.socket_port": config.listen_port,
        "server.socket_host": config.listen_host,
    }

}

if __name__ == "__main__":
    cherrypy.quickstart(CoubViewer(), "/", config=conf)
