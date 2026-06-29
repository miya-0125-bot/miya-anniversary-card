# 角色紀念日卡冊 v0.25 image-theme

本版是針對 iPhone Safari 將 CSS 淺色背景壓成深色的 workaround。

根據 v0.24 測試：
- CSS 色塊會變深
- PNG 圖片維持正常粉色

所以 v0.25 改成：
- 背景、主卡、面板、日期卡、按鈕等底色改用小型 PNG image background。
- 保留文字與功能邏輯。
- 預設主題為櫻花粉白。
- 暫停 Service Worker 快取，避免測試時卡舊版。

更新 GitHub 時覆蓋：
index.html
test.html
manifest.webmanifest
sw.js
icon.svg
README.md

手機測試：
/test.html?v=025

如果 v0.25 可正常顯示淺色，之後可以把這版整理成正式穩定版。
