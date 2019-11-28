import React, { memo } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment/locale/zh-tw'
moment.locale('zh-tw')

const Item = memo(function Item (props) {
  const { full_name, description, stargazers_count, pushed_at, language, html_url } = props
  return (
    <li>
      <a href={ html_url } target="_blank" rel="noopener noreferrer">{ full_name }</a>
      <p>{ description }</p>
      {
        language &&
          <div className="lists__topic">
            <span>{ language }</span>
          </div>
      }
      <div className="lists__others">
        <p className="lists__others__star">
          <i className="fe fe-star"></i>
          <span>{ stargazers_count }</span>
        </p>
        <p className="lists__others__updated">
          <i>Updated</i>
          <span>{ moment(pushed_at).fromNow() }</span>
        </p>
      </div>
    </li>
  )
})

Item.propTypes = {
  full_name: PropTypes.string.isRequired,
  description: PropTypes.string,
  stargazers_count: PropTypes.number.isRequired,
  pushed_at: PropTypes.string,
  language: PropTypes.string,
  html_url: PropTypes.string.isRequired
}

export default Item
