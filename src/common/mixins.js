import axios from './fetch'

/**
 * @param { string } debouncedSearchText - 延遲獲取查詢文字值
 * @param { number } page - 頁碼
 * @param { function } setPage - 頁碼控制函數
 * @param { bool } searching - 查詢中狀態
 * @param { function } setSearching - 查詢中狀態控制函數
 * @param { array } items - 列表
 * @param { function } setItems - 列表控制函數
 * @param { function } setTotal - 總結果控制函數
 * @param { object } setLimit - 查詢限制控制函數
 * @param { bool } loadMore - 載入更多列表項狀態
 */

export function searchRepos (params) {
  const { debouncedSearchText, page, setPage, setSearching, items, setItems, setTotal, setLimit, loadMore } = params
  const _page = page + 1
  loadMore ? setPage(_page) : setPage(1)
  const queryString = `search/repositories?q=${debouncedSearchText}&page=${loadMore ? _page : page}`
  axios.get(queryString)
    .then(res => {
      if (res.status === 200) {
        setSearching(false)
        setLimit(res.headers)
        loadMore ? setItems([...items, ...res.data.items]) : setItems(res.data.items || [])
        setTotal(res.data.total_count)
      }
    }).catch(e => {
      loadMore ? setPage(_page - 1) : setPage(1)
      setSearching(false)
      alert('查詢次數超出限制，請稍後再試')
    })
}
