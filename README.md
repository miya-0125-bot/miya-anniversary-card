# Color Test v0.23

這包不是正式 app，是用來判斷手機 Safari 是否能顯示淺色。

請上傳這 4 個檔案到 GitHub repo root：
- index.html
- sakura-absolute-test-023.html
- pink-card-test-023.html
- README.md

測試網址：
- /sakura-absolute-test-023.html?v=023
- /pink-card-test-023.html?v=023

判斷：
1. sakura-absolute-test-023.html 如果還是深色：
   問題幾乎不在 app，而在手機顯示設定、Safari 行為、GitHub Pages 快取或網址來源。
2. sakura-absolute-test-023.html 是淺色，但 pink-card-test-023.html 是深色：
   問題在 app 內某段 CSS/JS 或 localStorage 角色資料。
3. 兩個都是淺色：
   代表之前就是 index/test 路徑或 service worker 快取問題。
