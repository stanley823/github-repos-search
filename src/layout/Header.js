import React, { memo } from 'react'

const Header = memo(function Header () {
  return (
    <header>
      <div className="container header">
        <h1>Github Repos Search</h1>
        <a href="https://github.com/stanley823/github-repos-search" target="_blank" rel="noopener noreferrer">
          <i className="fe fe-github" />
        </a>
      </div>
    </header>
  )
})

export default Header
