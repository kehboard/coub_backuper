import browser_cookie3
import requests
# немного конфигов
user_agent = "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1"

# куда скачивать коубы
#download_folder = os.path.join(os.path.dirname(os.path.realpath(__file__)), "downloads")

# настройки прокси
# если не надо то закоментируейте эту строчку
proxies = {"http": "socks5h://127.0.0.1:1080", "https": "socks5h://127.0.0.1:1080"}


# и раскоментируйте эту
# proxies = None

cj = browser_cookie3.firefox(domain_name="coub.com")
r=requests.get("https://coub.com/api/v2/timeline/likes?all=true&order_by=date&page=1", proxies=proxies, headers={"User-Agent": user_agent})
print(r.text)
