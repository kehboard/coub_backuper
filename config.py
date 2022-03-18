# конфиг файл для загрузчика/просмотрщика коубов
import os
# юзер агент для скачивания кубов
user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0"

# настройки прокси (если у вас есть прокси и ваш провайдер заблокировал coub.com)
# поддерживаемуе форматы прокси: socks5, socks5h (socks5 через который проходит dns), http, https
# формат записи: <type_proxy>://user:pass@host:port
# пример использования ниже
# proxies = {"http": "socks5h://127.0.0.1:1080", "https": "socks5h://127.0.0.1:1080"}
proxies = None

# куда скачивать коубы | какую папку использовать в просмотрщике коубов
# можно указать абсолютный путь например:
# download_folder = "/home/couber/downloads" # или "C:/Users/couber/downloads"
# или как ниже: использовать папку downloads в папке с проектом
download_folder = os.path.join(os.path.dirname(os.path.realpath(__file__)), "downloads")

# http порт который будет слушать просмотрщик коубов. По умолчанию просмотрщик слушает на
# всех интерфейсах используя порт 2682
listen_port = 8888
listen_host = "0.0.0.0"