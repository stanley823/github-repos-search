import React, { memo, Fragment } from 'react'
import Item from '../components/List/item'
import Loading from '../components/List/loading'
import Empty from '../components/List/empty'
import PropTypes from 'prop-types'

const Lists = memo(function Lists (props) {
  const { searching, items, total } = props
  return (
    <section className="lists">
      { items.length <= 0 && !searching && <Empty /> }
      {
        items.length > 0 &&
          <Fragment>
            <h3 className="lists__title">{ total } repository results</h3>
            <ul className="lists__container">
              { items.map((item, index) => <Item key={ index } { ...item }/>) }
            </ul>
          </Fragment>
      }
      <Loading active={ searching }/>
    </section>
  )
})

Lists.propTypes = {
  searching: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired
}

export default Lists
