import requests
import json
from lxml import etree
import os
import time
import sys

# немного конфигов
user_agent = "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1"

# куда скачивать коубы
download_folder = os.path.join(os.path.dirname(os.path.realpath(__file__)), "downloads")

# настройки прокси
# если не надо то закоментируейте эту строчку
# proxies = {"http": "socks5h://127.0.0.1:1080", "https": "socks5h://127.0.0.1:1080"}


# и раскоментируйте эту
proxies = None


def get_json_by_url_parsed(url):
    request = requests.get(url, proxies=proxies, headers={"User-Agent": user_agent})
    if request.status_code == 200:
        dom = etree.HTML(request.content.decode("utf-8"))
        return json.loads(dom.xpath("//script[@id='coubPageCoubJson']/text()")[0])


def download_coub_from_json(json_coub, download_folder=download_folder):
    print("[INFO] Starting downloading coub with permalink https://coub.com/view/{0} and name {1}".format(
        json_coub["permalink"], json_coub["title"]))
    folder_save_to = os.path.join(download_folder, "[{0}]".format(json_coub["permalink"]))
    if not os.path.isdir(folder_save_to):
        os.makedirs(folder_save_to)
    print("[INFO] Save coub.json with metadata of this coub")
    open(os.path.join(folder_save_to, "coub.json"), "wb").write(
        json.dumps(json_coub, ensure_ascii=False).encode("utf-8"))
    file_urls = json_coub["file_versions"]["html5"]
    print("[INFO] Starting download this coub")
    if "video" in file_urls:
        print("[INFO] Starting download video")
        if "higher" in file_urls["video"]:
            download_file(file_urls["video"]["higher"]["url"],
                          os.path.join(folder_save_to, file_urls["video"]["higher"]["url"].split('/')[-1]))
            print("[INFO] Video downloaded successful")
        elif "high" in file_urls["video"]:
            download_file(file_urls["video"]["high"]["url"],
                          os.path.join(folder_save_to, file_urls["video"]["high"]["url"].split('/')[-1]))
            print("[INFO] Video downloaded successful")
        elif "med" in file_urls["video"]:
            download_file(file_urls["video"]["med"]["url"],
                          os.path.join(folder_save_to, file_urls["video"]["med"]["url"].split('/')[-1]))
            print("[INFO] Video downloaded successful")
        else:
            print("[WARN] No video found! I just save json with properties of this coub")

    if "audio" in file_urls:
        print("[INFO] Starting download audio")
        if "high" in file_urls["audio"]:
            download_file(file_urls["audio"]["high"]["url"],
                          os.path.join(folder_save_to, file_urls["audio"]["high"]["url"].split('/')[-1]))
            print("[INFO] Audio downloaded successful")

        elif "med" in file_urls["audio"]:
            download_file(file_urls["audio"]["med"]["url"],
                          os.path.join(folder_save_to, file_urls["audio"]["med"]["url"].split('/')[-1]))
            print("[INFO] Audio downloaded successful")
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
    print(len(coublist))
    for coub in coublist:
        download_coub_from_json(coub)
        time.sleep(1)


download_coub_from_coub_property_list("all_likes.json")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: coub_backuper.py <path_to_json_with_coubs>")
        exit()
    property_list_file_path = sys.argv[1]
    download_coub_from_coub_property_list(property_list_file_path)
# download_coub_from_json(get_json_by_url_parsed("https://coub.com/view/2i18vi"))
# open("example_coub.json", "wb").write(json.dumps(get_json_by_url_parsed("https://coub.com/view/2i18vi"), ensure_ascii=False, indent=4).encode("utf-8"))
# open("example_another_coub.json", "wb").write(json.dumps(get_json_by_url_parsed("https://coub.com/view/301e5w"), ensure_ascii=False, indent=4).encode("utf-8"))
# open("example_another_coub_without_sound.json", "wb").write(json.dumps(get_json_by_url_parsed("https://coub.com/view/30vh80"), ensure_ascii=False, indent=4).encode("utf-8"))
