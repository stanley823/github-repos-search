import React, { memo } from 'react'
import PropTypes from 'prop-types'

const Search = memo(function Search (props) {
  const { searchText, setSearchText } = props
  return (
    <div className="filters__search">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={ searchText }
        onChange={ e => setSearchText(e.target.value) }
      />
    </div>
  )
})

Search.propTypes = {
  searchText: PropTypes.string,
  setSearchText: PropTypes.func.isRequired
}

export default Search