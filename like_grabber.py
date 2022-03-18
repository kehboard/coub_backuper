import requests
import json
from lxml import etree
import os
import time
import sys
import config

user_agent = config.user_agent
download_folder = config.download_folder
proxies = config.proxies

def grab_likes(token):
    pass

def main():
     pass

if __name__ == "__main__":
    print("to be continued...")
    exit(0)
    if len(sys.argv) < 2:
        print("usage: python3 like_grabber.py <member_token>")
