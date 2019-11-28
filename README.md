This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 開發環境
```
node v10.16.0
npm 6.10.2
```
## 資料夾結構
* `public` - 靜態文件
* `src` - 主要程式
    - `assets` - 樣式文件
    - `common` - 放置主要的程式邏輯
        - `hooks` - 自定義 `React Hooks`
            - `useDebounce` - 輸入文字延遲處理
            - `useLoadMore` - 載入更多資料
            - `useSearch` - 輸入文字並進行http request
        - `fetch.js` - `axios` 重新封裝
        - `mixins.js` - 放置共用函數，本項目僅有「進行http request，並處理成功/失敗取得資源的邏輯函數」 - `searchRepos`
    - `components` - 無狀態組件資料夾
        - `Filter` - 輸入框區塊
            - `info.js` - 查詢限制顯示
            - `search.js` - 輸入框
        - `List` - 列表組件
            - `empty.js` - 無資料佔位顯示文字
            - `item.js` - 列表項組件
            - `loading.js` - 載入中顯示組件
    - `layout` - 無狀態佈局資料夾
        - `Filters` - 輸入框區塊
        - `Headers` - 頁面頂部
        - `Lists` - 列表項目
* `tests/e2e` - 測試資料夾
    - `command` - 共用指令
    - `page` - `page object` 主測試各用例函數
    - `specs` - 主測試邏輯

## Project setup
### install
```
npm install
```
### run dev
```
npm start
```
### tests
```
npm start
npm run test
```

## 測試用例說明
> 皆採用 headless 方法進行測試
### 用例1 - `Page Init`
> 確認開啟瀏覽器，並驗證`#div` tag已載入後，進行`document title`, `Header`, `filter`, `search`(驗證為空值), `empty`, `loading`...文件的顯示/隱藏狀態

### 用例2 - `Searching Something`
> 於輸入框輸入文字 - React後，驗證http request送出中(loading)與完成(list)...等的組件狀態正確，並計算取得的list資料筆數為30筆 - Github Search API 單筆 Request 預設值返回列數

### 用例3 - `Infinite Scroll Loading`
> 於輸入框輸入文字 - React後, 依序向下滾動至頁面底部，共計兩次。並驗證滾動後獲取總資料分別為60筆與90筆

### 用例4 - `Rate Limit`
> 取得輸入框區塊中查詢限制的「尚餘次數」數值後，依據剩餘次數向下滾動至頁面底部多次，並於超出尚餘次數時，驗證Alert提示框文字為「查詢次數超出限制，請稍後再試」