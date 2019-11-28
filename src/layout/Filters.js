import React, { memo } from 'react'
import Search from '../components/Filter/search'
import Info from '../components/Filter/info'
import PropTypes from 'prop-types'

const Filters = memo(function Filters (props) {
  const { searchText, setSearchText, limit } = props
  return (
    <aside className="filters">
      <Search searchText={ searchText } setSearchText={ setSearchText } />
      { Object.keys(limit).length > 0 && <Info { ...limit }/> }
    </aside>
  )
})

Filters.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  limit: PropTypes.object.isRequired
}

export default Filters
