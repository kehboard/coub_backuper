import requests
import json
from lxml import etree
import os
import time
import sys
import config

debug = False

user_agent = config.user_agent
download_folder = config.download_folder
proxies = config.proxies


def printdebug(msg):
    if debug:
        print(msg)


def get_json_by_url_parsed(url):
    request = requests.get(url, proxies=proxies, headers={"User-Agent": user_agent})
    if request.status_code == 200:
        dom = etree.HTML(request.content.decode("utf-8"))
        return json.loads(dom.xpath("//script[@id='coubPageCoubJson']/text()")[0])


def download_coub_from_json(json_coub, download_folder=download_folder):
    printdebug("[INFO] Starting downloading coub with permalink https://coub.com/view/{0} and name {1}".format(
        json_coub["permalink"], json_coub["title"]))
    folder_save_to = os.path.join(download_folder, "[{0}]".format(json_coub["permalink"]))
    if not os.path.isdir(folder_save_to):
        os.makedirs(folder_save_to)

    ls = os.listdir(folder_save_to)
    video = [s for s in ls if ".mp4" in s]
    audio = [s for s in ls if ".mp3" in s]
    first_frame = [s for s in ls if ".jpg" in s]

    printdebug("[INFO] Save coub.json with metadata of this coub")
    open(os.path.join(folder_save_to, "coub.json"), "wb").write(
        json.dumps(json_coub, ensure_ascii=False).encode("utf-8"))
    file_urls = json_coub["file_versions"]["html5"]
    printdebug("[INFO] Starting download this coub")
    if ("video" in file_urls) and len(video) == 0:
        printdebug("[INFO] Starting download video")
        if "higher" in file_urls["video"]:
            download_file(file_urls["video"]["higher"]["url"],
                          os.path.join(folder_save_to, file_urls["video"]["higher"]["url"].split('/')[-1]))
            printdebug("[INFO] Video downloaded successful")
        elif "high" in file_urls["video"]:
            download_file(file_urls["video"]["high"]["url"],
                          os.path.join(folder_save_to, file_urls["video"]["high"]["url"].split('/')[-1]))
            printdebug("[INFO] Video downloaded successful")
        elif "med" in file_urls["video"]:
            download_file(file_urls["video"]["med"]["url"],
                          os.path.join(folder_save_to, file_urls["video"]["med"]["url"].split('/')[-1]))
            printdebug("[INFO] Video downloaded successful")
        else:
            print("[WARN] No video found! I just save json with properties of this coub")

    if ("first_frame_versions" in json_coub) and len(first_frame) == 0:
        printdebug("[INFO] Starting download first frame of this coub")
        template = json_coub["first_frame_versions"]["template"]
        if "big" in json_coub["first_frame_versions"]["versions"]:
            download_file(template.replace("%{version}", "big"),
                          os.path.join(folder_save_to, template.replace("%{version}", "big").split('/')[-1]))
            printdebug("[INFO] First frame downloaded successful")
        elif "med" in json_coub["first_frame_versions"]["versions"]:
            download_file(template.replace("%{version}", "med"),
                          os.path.join(folder_save_to, template.replace("%{version}", "med").split('/')[-1]))
            printdebug("[INFO] First frame downloaded successful")
        elif "small" in json_coub["first_frame_versions"]["versions"]:
            download_file(template.replace("%{version}", "small"),
                          os.path.join(folder_save_to, template.replace("%{version}", "small").split('/')[-1]))
            printdebug("[INFO] First frame downloaded successful")

    if ("audio" in file_urls) and len(audio) == 0:
        printdebug("[INFO] Starting download audio")
        if "high" in file_urls["audio"]:
            download_file(file_urls["audio"]["high"]["url"],
                          os.path.join(folder_save_to, file_urls["audio"]["high"]["url"].split('/')[-1]))
            printdebug("[INFO] Audio downloaded successful")

        elif "med" in file_urls["audio"]:
            download_file(file_urls["audio"]["med"]["url"],
                          os.path.join(folder_save_to, file_urls["audio"]["med"]["url"].split('/')[-1]))
            printdebug("[INFO] Audio downloaded successful")
        else:
            print("[WARN] coub has audio but i cant download it")
    else:
        print("[WARN] coub without audio")


def download_file(url, path):
    local_filename = path
    # NOTE the stream=True parameter below
    with requests.get(url, proxies=proxies, headers={"User-Agent": user_agent}, stream=True) as r:
        r.raise_for_status()
        with open(local_filename, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192):
                # If you have chunk encoded response uncomment if
                # and set chunk_size parameter to None.
                # if chunk:
                f.write(chunk)
    return local_filename


def download_coub_from_coub_property_list(path_to_coub_json):
    coublist = json.loads(open(path_to_coub_json, encoding="utf-8").read())
    length = len(coublist)
    counter = 1
    for coub in coublist:
        print(
            "[{0}/{1}] Starting downloading coub with permalink https://coub.com/view/{2} and name {3} "
                .format(counter,
                        length,
                        coub[
                            "permalink"],
                        coub[
                            "title"]))
        download_coub_from_json(coub)
        counter+=1
        time.sleep(1)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: coub_backuper.py <path_to_json_with_coubs>")
        exit()
    property_list_file_path = sys.argv[1]
    download_coub_from_coub_property_list(property_list_file_path)
