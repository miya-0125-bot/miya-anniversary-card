# 角色紀念日卡冊 v0.18

本版修正：
- 針對 iPhone Safari / PWA 淺色主題仍顯示深色的問題，改用 JavaScript 直接把主題色寫入 html 與 body 的 inline style。
- 也會同步更新 meta theme-color。
- 主要卡片、日期卡、角色按鈕背景改成更依賴主題變數，避免淺色主題看起來仍像深色。

更新 GitHub 時覆蓋：
index.html
manifest.webmanifest
sw.js
icon.svg
README.md

若手機仍顯示舊色：
1. 先確認頁面左上角版本是 v0.18。
2. 若還是 v0.17 或更早，代表 PWA 快取還沒更新。
3. 刪掉桌面 PWA 圖示，Safari 開網址重新整理幾次，再重新加入主畫面。
