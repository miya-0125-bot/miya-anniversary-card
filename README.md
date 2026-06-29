# 角色紀念日卡冊 v0.21

這是手機 Safari / PWA 深色快取問題的測試版。

本版改動：
- index.html 的 meta theme-color 固定為 #fff4f7。
- manifest.webmanifest 的 background_color / theme_color 固定為 #fff4f7。
- 暫停註冊 Service Worker，並在頁面載入時嘗試 unregister 舊 Service Worker。
- sw.js 改成不快取，並清除舊 cache。
- 另外附上 test.html，方便用 /test.html 繞過舊 index.html 快取測試。

測試順序：
1. 上傳並覆蓋 GitHub 檔案：
   index.html
   test.html
   manifest.webmanifest
   sw.js
   icon.svg
   README.md

2. 用手機 Safari 開：
   你的網址/test.html?v=021

3. 如果 test.html 是淺色，代表之前是快取問題。

4. 如果 test.html 仍然深色，進「編輯」確認目前角色主題是否仍存成深夜暗幕。
   舊資料不會被新版預設覆蓋，需要手動改主題或清除網站資料。

注意：
這版是測試版，暫時關閉 PWA 離線快取。等主題問題確認解決後，再決定要不要恢復 Service Worker。
