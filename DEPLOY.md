# CARD ALIGN 官方介紹網站

原生 HTML、CSS、JavaScript，無須安裝套件或編譯。所有卡圖與 Logo 都隨網站提供，不依賴外部圖片服務。

## 本機預覽

在本資料夾執行：

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

開啟 <http://127.0.0.1:4173>。也可以直接開啟 `index.html`；若要測試與 GitHub Pages 相同的網址行為，建議使用本機伺服器。

## GitHub Pages

目標儲存庫：<https://github.com/ice0819/Card-Align>

1. 將本資料夾的**內容**放在儲存庫根目錄，包含 `index.html`、`contact.html`、`styles.css`、`script.js`、`assets/`、`.nojekyll`、`DEPLOY.md`。保留既有 README。
2. 在儲存庫的 **Settings → Pages → Build and deployment**，選擇 **Deploy from a branch**。
3. 分支選 **main**，目錄選 **/ (root)**，按 **Save**。
4. 等待 GitHub Pages 完成部署，網站網址為 <https://ice0819.github.io/Card-Align/>。

頁面採相對路徑，支援 GitHub Pages 的 `/Card-Align/` 子路徑。無需伺服器、API Key 或自動化工作流程。

## 修改內容

- 中文文案、結構、下載連結：`index.html`。
- 獨立的聯絡頁面：`contact.html`，使用相同導覽、語言切換與顯示模式；跨頁導覽會保留目前語言。
- 英文文案、語言切換、輪播與互動：`script.js` 的 `english` 字典。
- 顏色、字級、手機版排版：`styles.css`。主要紅色為 App 的 `#D32F3C`。
- 卡圖：`assets/cards/`，來自專案的 `7/` 圖片，已壓縮成 WebP。
- 功能介紹圖：`assets/features/01-start.webp` 至 `06-appearance.webp`，來自使用者目前 VS Code 工作區 `Card Border App Store Graphic/1.png` 至 `6.png`。保留 1080 × 1350 完整構圖，只轉換為 WebP 以減少網頁載入量。六張圖片以一頁式逐段往下呈現，桌面圖文左右交錯，手機上下排列，沒有標號或圖片放大功能。
- Logo：`assets/logo.png`，來自 App 的現有 Logo；深色模式使用 CSS 反相呈現白色。
- 社群分享預覽：`assets/social-preview.jpg`。如果換網址，記得更新 HTML 的 `og:url` 與 `og:image`。

首頁的兩個下載按鈕會直接取得 APK，不需要先開啟 Google Drive 預覽頁。靜態 HTML 提供已驗證的公開直下載連結；`v1.0` 的 GitHub Release 附件就緒後，網站會自動優先使用 `card-align-v1.0.apk` 的 GitHub 下載網址。查詢失敗時仍保留可用的直下載連結。

### GitHub Releases APK 發布

`.github/workflows/publish-apk.yml` 會在該檔案推送至 main 時，或在 Actions 手動啟動時，取得既有公開 APK，核對 SHA-256 及 APK 結構，再發布為 GitHub Release 附件。不會覆寫已存在、內容不同的附件；驗證失敗時不發布新檔。只有發布步驟使用 GitHub 產生的短期權杖，不需要另外提供密碼或個人 Token。

目前版本：v1.0，166,249,494 bytes；SHA-256：`6802527ec593f42e6d1381191ac2098013ccefd29f317543d7dde0527ee13402`。

更新 APK 時請同步更新 workflow 的來源、版本、檔名與雜湊，以及 `script.js` 的預期版本、檔名、檔案大小與下載網址。

## 網站內容範圍

網站為產品介紹頁。比例滑桿、預估結果、圖鑑及小卡為互動或版型示意，不在瀏覽器執行卡牌分析；實際功能由 Android App 提供。網頁沒有帳號、追蹤程式或蒐集照片的功能。語言和顯示模式僅儲存於訪客瀏覽器。

## 服務、贊助與客服資訊

- App 下載及使用費用：免費，標示為 **NT$0**。
- 自願贊助：金額自訂，以 **新台幣（TWD）** 計價，連至既有綠界付款頁。網站不蒐集付款資料。
- 公開客服信箱：**card33358445@gmail.com**，顯示於頁尾並提供 Email 聯絡連結。更換綠界賣家驗證資料時，請同步確認網站聯絡資料。
- 官網內容可直接瀏覽，不須登入。送審網址請使用官網，而非 APK 的 Google Drive 下載連結。
- 可使用 <https://ice0819.github.io/Card-Align/?lang=zh-Hant#service-info> 直接開啟中文服務資訊；`?lang=en` 則開啟英文。訪客仍可自行切換語言。

卡牌圖像與相關商標屬原權利人；展示使用使用者提供的圖片。設計參考 Mobbin 的留白、大字與圖片展示方式，未使用其程式碼、Logo 或網站圖片。
