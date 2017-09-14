import React, { Component } from 'react'

import './header.css'

class Header extends Component {
  render() {
    return (
      <header className="section header">
        <div className="container">
          <h1 className="title is-4 header-title">
            <span className="header-logo">Y</span>
            Hacker News Reader
          </h1>
        </div>
      </header>
    )
  }
}

export default Header
