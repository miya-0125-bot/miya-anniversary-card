# 角色紀念日卡冊 v0.33 crop status

本版以 v0.30 crop fix 為基底，安全新增裁切狀態提示。

修正：
- 裁切完成後，檔案欄位仍會顯示「未選擇任何檔案」是瀏覽器限制。
- 本版不改檔案欄位本身，而是在旁邊顯示「已套用裁切」。
- 不使用 v0.31 的 render hook / MutationObserver，避免頁面卡死。
- 裁切後先儲存狀態，不立即 render，避免編輯畫面重置。

保留：
- v0.20 基底。
- Service Worker / PWA 快取。
- 主圖裁切 4:5。
- 小頭像裁切 1:1。
- 匯入／匯出備份。

更新 GitHub 時覆蓋：
index.html
manifest.webmanifest
sw.js
icon.svg
README.md
