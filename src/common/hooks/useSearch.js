import { useEffect } from 'react'
import { searchRepos } from '../mixins'
import useDebounce from './useDebounce'

/**
 * @param { string } searchText - 查詢文字
 * @param { array } items - 列表
 * @param { function } setItems - 列表控制函數
 * @param { function } setSearching - 查詢中狀態控制函數
 * @param { function } setTotal - 總結果控制函數
 * @param { object } setLimit - 查詢限制控制函數
 * @param { function } setPage - 頁碼控制函數
 */

export default function useSearch(params) {
  const { searchText, items, setItems, setSearching, setTotal, setLimit, setPage } = params
  const debouncedSearchText = useDebounce(searchText, 500)
  useEffect(() => {
    if (debouncedSearchText) {
      setItems([])
      setSearching(true)
      searchRepos({ debouncedSearchText, page: 1, setPage, items, setSearching, setItems, setTotal, setLimit })
    } else {
      setItems([])
      setTotal(0)
      setLimit({})
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchText])
  return
}