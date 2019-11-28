import React, { memo } from 'react'

const Empty = memo(function Empty () {
  return (
    <div className="empty">
      <i className="fe fe-alert-triangle"/>
      <span>Data Empty</span>
      <p>Enter Keyword to Search Github repository</p>
    </div>
  )
})

export default Empty
