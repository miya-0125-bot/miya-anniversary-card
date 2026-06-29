# 角色紀念日卡冊 v0.22 light-lock 測試版

這是一個診斷用版本，不是最終版。

目的：
確認 iPhone Safari / PWA 到底能不能顯示淺色。

本版做法：
- 不再依賴 color-mix。
- 不再依賴主題 class 的正常切換。
- applyTheme() 會無條件鎖定櫻花粉白。
- HTML / body / 主要面板都用 !important 強制淺色。
- 暫停 Service Worker，並嘗試 unregister 舊 Service Worker。
- 附 test.html 以繞過 index.html 快取。

上傳 GitHub 時覆蓋：
index.html
test.html
manifest.webmanifest
sw.js
icon.svg
README.md

測試網址：
你的 GitHub Pages 網址/test.html?v=022

判讀：
- 如果 v0.22 test.html 變淺色：代表前面是主題切換或舊資料問題，我們再把正常主題系統修回來。
- 如果 v0.22 test.html 仍是深色：代表手機讀到的不是這份檔案，或 Safari / GitHub Pages / PWA 快取還在攔截，需要清除網站資料或換一個全新檔名 / repo 測。
