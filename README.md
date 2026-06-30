# 角色紀念日卡冊 v0.38 cover hairline fix

這版只專注修正「主圖放上去後出現黑線」的問題。

判斷原因：
- 這不是空白底卡本身的邊框，而是主圖放進圓角容器後，在 Safari / iPhone 上常見的 1px hairline / halo 問題。
- 另外原本主圖有 `opacity: .92`，也容易讓底下邊緣色透出。

本版處理：
- 主圖 opacity 改為 1。
- 主圖明確套用 `border-radius: inherit`。
- 加上 `clip-path` / `-webkit-mask-image` / `translateZ(0)`，避免 iOS Safari 圓角裁切時出現黑色細線。
- 主圖存在時，hero 外框與陰影一律關閉。

GitHub 覆蓋：
- index.html
- manifest.webmanifest
- sw.js
- icon.svg
- README.md
