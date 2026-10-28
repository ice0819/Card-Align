# CARD CENTER 官方介紹網站

原生 HTML、CSS、JavaScript，無須安裝套件或編譯。所有卡圖與 Logo 都隨網站提供，不依賴外部圖片服務。

## 本機預覽

在本資料夾執行：

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

開啟 <http://127.0.0.1:4173>。也可以直接開啟 `index.html`；若要測試與 GitHub Pages 相同的網址行為，建議使用本機伺服器。

## Cloudflare Pages 發布紀錄

2026-10-28 已建立 `card-align` Pages 專案，正式網址為 <https://card-align.pages.dev/>，正式分支為 `main`。目前採 Direct Upload，GitHub 原站保留；後續修改須另外發布到 Cloudflare，不會隨 GitHub 推送自動更新。

Cloudflare 發布檔位於 `build/cloudflare-site/`，可直接上傳的壓縮檔為 `build/card-align-cloudflare-pages.zip`。該版本已將聯絡頁及分享資訊中的網址替換成 Cloudflare 正式網址，APK 仍連至既有 GitHub Release。已匿名驗證全部 25 個公開檔案與 APK 下載。

本機部署紀錄為 `build/cloudflare-deployment.json`；部署準備工具為 `build/prepare-cloudflare-site.py`，官方 CLI 包裝工具為 `build/run-cloudflare.py`。這些暫存檔及登入狀態不放入網站發布檔。

## GitHub Pages 設定

目標儲存庫：<https://github.com/ice0819/Card-Align>

1. 將本資料夾的**內容**放在儲存庫根目錄，包含 `index.html`、`tutorial.html`、`pricing.html`、`contact.html`、`styles.css`、`script.js`、`assets/`、`.nojekyll`、`DEPLOY.md`。保留既有 README。
2. 在儲存庫的 **Settings → Pages → Build and deployment**，選擇 **Deploy from a branch**。
3. 分支選 **main**，目錄選 **/ (root)**，按 **Save**。
4. 等待 GitHub Pages 完成部署，網站網址為 <https://ice0819.github.io/Card-Align/>。

頁面採相對路徑，支援 GitHub Pages 的 `/Card-Align/` 子路徑。無需伺服器、API Key 或自動化工作流程。

## 修改內容

- 中文文案、結構、下載連結：`index.html`。
- 使用教學：`tutorial.html`，將操作步驟與皮卡丘互動展示整合成白色區塊；滑桿會同步更新正面左右比例及居中預估級別。
- 收費資訊：`pricing.html`，保留免費使用與自願贊助內容；上方導覽使用「收費方式」，頁面內與頁尾保留「服務與贊助」。
- 獨立的聯絡頁面：`contact.html`，客服信箱與網站網址使用相同字級。
- 導覽、輪播與教學互動：`script.js`；居中預估級別的門檻對照 App 的 `ReportActivity.kt`。網站僅提供繁體中文與白天模式，舊網址的 `lang` 參數與瀏覽器保存的語言、主題偏好會自動清除。
- 瀏覽器安全設定：四頁 HTML 含內容安全政策；`_headers` 提供 Cloudflare Pages 的 CSP、防嵌入、禁止 MIME 猜測、權限限制與 HSTS 回應標頭。GitHub Pages 不套用 `_headers`，但 HTML 中的 CSP 仍會生效。若未來加入跨網站 API 或其他外部資源，須審查後調整白名單。
- 顏色、字級、手機版排版：`styles.css`。主要紅色為 App 的 `#D32F3C`。
- 卡圖：`assets/cards/`，來自專案的 `7/` 圖片，已壓縮成 WebP。
- 功能介紹圖：`assets/features/01-start.webp` 至 `06-appearance.webp`，來自使用者 VS Code 工作區的六張介紹圖。01、04、05、06 已使用內建 image_gen 更新圖片中的品牌為 CARD CENTER，並維持 1080 × 1350 的 WebP 輸出；提示詞與輸出路徑記錄在 `build/card-center-image-updates.json`。六張圖片仍採一頁式逐段呈現，沒有標號或圖片放大功能。
- Logo：`assets/logo.png`，來自 App 的現有 Logo。
- 社群分享預覽：`assets/social-preview-card-center.jpg`。如果換網址，記得更新 HTML 的 `og:url` 與 `og:image`。

首頁的兩個下載按鈕直接連到 GitHub Releases 的 `card-center-v1.0.apk` 附件，不需登入或先開啟 Google Drive，停用 JavaScript 也可以下載。

### GitHub Releases APK 發布

`.github/workflows/publish-apk.yml` 會在該檔案推送至 main 時，或在 Actions 手動啟動時，取得既有公開 APK，核對 SHA-256 及 APK 結構，再發布為 GitHub Release 附件。不會覆寫已存在、內容不同的附件；驗證失敗時不發布新檔。只有發布步驟使用 GitHub 產生的短期權杖，不需要另外提供密碼或個人 Token。

目前 APK 版本為 v1.0，GitHub Release 標籤為 `v1.0-card-center`，附件為 `card-center-v1.0.apk`，166,249,482 bytes；SHA-256：`2e1a80eb4a1f137d5f531a0fc4045868558868bc6c7f0a0d74a1441499dea0c5`。來源為使用者更新的公開 Google Drive 檔案，已驗證 App 名稱、簽章與檔案雜湊。

更新 APK 時請同步更新 workflow 的來源、版本、檔名與雜湊，以及 `index.html` 的下載連結。

## 網站內容範圍

網站為產品介紹頁。比例滑桿、預估結果、圖鑑及小卡為互動或版型示意，不在瀏覽器執行卡牌分析；實際功能由 Android App 提供。網頁沒有帳號、追蹤程式或蒐集照片的功能。網頁僅提供中文白天版；功能圖片中展示的雙語與深淺模式為 Android App 本身的功能。

## 服務、贊助與客服資訊

- App 下載及使用費用：免費，標示為 **NT$0**。
- 自願贊助：金額自訂，以 **新台幣（TWD）** 計價，連至既有綠界付款頁。網站不蒐集付款資料。
- 公開客服信箱：**card33358445@gmail.com**，顯示於頁尾並提供 Email 聯絡連結。更換綠界賣家驗證資料時，請同步確認網站聯絡資料。
- 官網內容可直接瀏覽，不須登入。送審網址請使用官網，而非 APK 的 Google Drive 下載連結。
- 收費資訊的獨立網址為 <https://ice0819.github.io/Card-Align/pricing.html>。舊主頁的 `#service-info` 與 `#how-it-works` 連結會分別導向收費與教學頁面。

卡牌圖像與相關商標屬原權利人；展示使用使用者提供的圖片。設計參考 Mobbin 的留白、大字與圖片展示方式，未使用其程式碼、Logo 或網站圖片。
