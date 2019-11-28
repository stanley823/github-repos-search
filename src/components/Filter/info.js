import React, { memo } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment/locale/zh-tw'
moment.locale('zh-tw')

const Info = memo(function Info (props) {
  return (
    <div className="filters__info">
      <h3>查詢限制</h3>
      <p>總次數<span>{ props['x-ratelimit-limit'] }</span></p>
      <p>尚有次數<span>{ props['x-ratelimit-remaining'] }</span></p>
      <p>次數重設於<span>{ moment((props['x-ratelimit-reset']) * 1000).fromNow() }</span></p>
    </div>
  )
})

Info.propTypes = {
  'x-ratelimit-limit': PropTypes.string.isRequired,
  'x-ratelimit-remaining': PropTypes.string.isRequired,
  'x-ratelimit-reset': PropTypes.string.isRequired
}

export default Info