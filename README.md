# 角色紀念日卡冊 v0.40 crop apply fix

本版修正 v0.39：
- v0.39 新增 safe inset 後，裁切套用時會嘗試重新指定 const 變數，導致「套用裁切」按不下去。
- v0.40 已修正為可重新指定的 let，讓角色、主控、主圖裁切都能正常套用。
- 保留 v0.39 的極小安全內縮，用來測試主圖黑線是否消失。

GitHub 覆蓋：
- index.html
- manifest.webmanifest
- sw.js
- icon.svg
- README.md
