import axios from 'axios'

axios.defaults.baseURL = 'https://api.github.com'

// 異常處理
axios.interceptors.response.use(
  response => {
    return response
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 404:
          console.log("找不到該頁面")
          break
        case 500:
          console.log("伺服器出錯")
          break
        case 503:
          console.log("服務失效")
          break
        default:
          console.log(`連接錯誤${err.response.status}`)
      }
    } else {
      console.log("連接到服務器失敗")
    }
    return Promise.resolve(err.response)
  }
)

export default axios