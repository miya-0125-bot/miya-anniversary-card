# 角色紀念日卡冊 v0.19

本版針對 iPhone Safari / PWA 淺色主題仍被壓成深色做防禦修正：

- 在 index.html head 加入：
  <meta name="color-scheme" content="light only">
- 將 meta theme-color 預設改成 #ffffff。
- manifest.webmanifest 的 background_color 與 theme_color 改成 #ffffff。
- body 與 .emptyCover 加入不依賴 color-mix 的 fallback 背景。
- 新增 @supports not color-mix 的 fallback，給舊版 iOS / Safari 使用。
- 保留 v0.18 的 applyTheme() 強制寫入 html/body inline style。

更新 GitHub 時覆蓋：
index.html
manifest.webmanifest
sw.js
icon.svg
README.md

手機測試建議：
1. 上傳後確認左上角是 v0.19。
2. Safari 開網址加 ?v=019 強制刷新。
3. 若 PWA 仍吃舊版，刪掉桌面圖示後重新加入主畫面。
4. 必要時清除 Safari 該網站資料。
