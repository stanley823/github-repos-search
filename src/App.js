import React, { useState } from 'react'
import Header from './layout/Header'
import Lists from './layout/Lists'
import Filters from './layout/Filters'
import useSearch from './common/hooks/useSearch'
import useLoadMore from './common/hooks/useLoadMore'

function App () {
  const [page, setPage] = useState(1)
  const [searchText, setSearchText] = useState('')
  const [searching, setSearching] = useState(false)
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)
  const [limit, setLimit] = useState({})
  useSearch({ searchText, items, setItems, setSearching, setTotal, setLimit, setPage })
  useLoadMore({ searchText, page, setPage, items, setItems, total, setTotal,searching, setSearching, setLimit })
  return (
    <div className="root">
      <Header />
      <main className="container">
        <Filters searchText={ searchText } setSearchText={ setSearchText } limit={ limit }/>
        <Lists searching={ searching } items={ items } total={ total } />
      </main>
    </div>
  )
}

export default App
