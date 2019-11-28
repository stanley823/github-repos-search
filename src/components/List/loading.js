import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'

const duration = 250

const defaultStyle = {
  transition: `opacity ${ duration }ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1, zIndex: 100 },
  entered:  { opacity: 1, zIndex: 100 },
  exiting:  { opacity: 0, zIndex: -2000 },
  exited:  { opacity: 0, zIndex: -2000 }
}

const Loading = memo(function Loading (props) {
  const { active } = props
  return (
    <Transition in={ active } timeout={ duration }>
      {
        state => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
            className="loading"
            timeout={ duration }
          >
            <i className="fe fe-loader"/>
            <span>Loading...</span>
          </div>
        )
      }
    </Transition>
  )
})

Loading.propTypes = {
  active: PropTypes.bool
}

export default Loading