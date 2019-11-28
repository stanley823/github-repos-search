import { useState, useEffect } from 'react'

/**
 * @param { string } value - 查詢文字
 * @param { number } time - 延遲時間
 * @param { string } debouncedValue - 延遲獲取查詢文字值
 * @param { function } setDebouncedValue - 設置延遲獲取函數
 */

export default function useDebounce (value, time) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const trigger = setTimeout(() => { setDebouncedValue(value) }, time)
    return () => clearTimeout(trigger)
  }, [value, time])
  return debouncedValue
}