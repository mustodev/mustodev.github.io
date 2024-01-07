print("\n" * 100) #clears console
import os
import ctypes
import requests
import random
import string
import time
from pystyle import Center,Colors,Colorate

os.system("title iWishkem - BlueSky Airlines ┇ Made by https://youtube.com/c/iwishkem")

print(Colorate.Vertical(Colors.purple_to_blue, Center.XCenter("""
   /$$ /$$      /$$ /$$           /$$       /$$                              
  |__/| $$  /$ | $$|__/          | $$      | $$                              
   /$$| $$ /$$$| $$ /$$  /$$$$$$$| $$$$$$$ | $$   /$$  /$$$$$$  /$$$$$$/$$$$ 
  | $$| $$/$$ $$ $$| $$ /$$_____/| $$__  $$| $$  /$$/ /$$__  $$| $$_  $$_  $$
  | $$| $$$$_  $$$$| $$|  $$$$$$ | $$  \ $$| $$$$$$/ | $$$$$$$$| $$ \ $$ \ $$
  | $$| $$$/ \  $$$| $$ \____  $$| $$  | $$| $$_  $$ | $$_____/| $$ | $$ | $$
  | $$| $$/   \  $$| $$ /$$$$$$$/| $$  | $$| $$ \  $$|  $$$$$$$| $$ | $$ | $$
  |__/|__/     \__/|__/|_______/ |__/  |__/|__/  \__/ \_______/|__/ |__/ |__/
                                                                           
                                                                           
                                                                           

   
                      ⌜―――――――――――――――――――――――――――――――――――――――――――――――――――――――⌝
                      ┇      [BlueSky] https://bsky.app/profile/iwishkem.tech ┇         
                      ┇      [Github]  https://github.com/iwishkem            ┇
                      ┇      [Youtube] https://youtube.com/c/iwishkem         ┇
                      ┇                Never Trust Anyone.                    ┇
                      ⌞―――――――――――――――――――――――――――――――――――――――――――――――――――――――⌟
                      """)))
time.sleep(0.2)


num = int(input('how much bluesky invite codes?'))

with open("bluesky.txt", "w", encoding='utf-8') as file:
    print(
        "ur codes r created in bluesky.txt!"
    )

    start = time.time()

    for i in range(num):
        code = "".join(
            random.choices(string.digits +
                           string.ascii_lowercase,
                           k=5))
                         
    
        code1 = "".join(
            random.choices(string.digits +
                           string.ascii_lowercase,
                           k=5))

        file.write(f"bsky-social-{code1}-{code}\n")
        

with open("bluesky.txt") as file:
    for line in file.readlines():
        bluesky = line.strip("\n")

        url = "https://iwishkem.tech/" + bluesky + "?crashfixer=ture"

        r = requests.get(url)

        if r.status_code == 200:
            print(f"code | {bluesky}")
            break
        else:
            print(f"code | {bluesky}")



input("\n good luck! ")
