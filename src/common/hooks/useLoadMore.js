import { useEffect } from 'react'
import { searchRepos } from '../mixins'

/**
 * @param { string } searchText - 查詢文字
 * @param { number } page - 頁碼
 * @param { function } setPage - 頁碼控制函數
 * @param { array } items - 列表
 * @param { function } setItems - 列表控制函數
 * @param { number } total - 查詢總結果數
 * @param { function } setTotal - 總結果控制函數
 * @param { bool } searching - 查詢中狀態
 * @param { function } setSearching - 查詢中狀態控制函數
 * @param { object } setLimit - 查詢限制控制函數
 */

export default function useLoadMore (params) {
  const { searchText, page, setPage, items, setItems, total, setTotal, searching, setSearching, setLimit } = params
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false)
    return () => window.removeEventListener('scroll', handleScroll, false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, page, total, searching])
  function handleScroll () {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    if (window.innerHeight + scrollTop !== document.documentElement.offsetHeight) return
    if (items.length < total && !searching) {
      setSearching(true)
      searchRepos({ debouncedSearchText: searchText, page, setPage, items, setSearching, setItems, setTotal, setLimit, loadMore: true })
    }
  }
  return
}