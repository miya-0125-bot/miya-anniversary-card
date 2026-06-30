# 角色紀念日卡冊 v0.34 crop delete ui

本版針對裁切後的編輯 UI 做整理。

修正：
- 隱藏 file input 的「未選擇任何檔案」文字。
- 角色小頭像、主控小頭像都新增「刪除圖片」按鈕。
- 刪除圖片後，對應的「已套用裁切」提示會一起消失。
- 刪除按鈕加入 disabled 樣式，狀態更明確。
- 打開編輯角色卡時，依目前是否已有圖片，自動同步按鈕與提示。

保留：
- v0.20 / v0.30 裁切核心。
- 主圖裁切 4:5。
- 頭像裁切 1:1。
- 匯入 / 匯出備份。
- Service Worker / PWA 快取。

GitHub 覆蓋檔案：
- index.html
- manifest.webmanifest
- sw.js
- icon.svg
- README.md
