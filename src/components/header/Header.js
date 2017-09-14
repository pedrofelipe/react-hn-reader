import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import './header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="section header">
          <div className="container">
            <h1 className="title is-4 header-title">
              <span className="header-logo">Y</span>
              Hacker News Reader
            </h1>
          </div>
        </div>

        <nav className="section header-nav">
          <div className="container">
            <ul className="header-nav-list">
              <li className="header-nav-item">
                <Link to="/" className="header-nav-url" activeClassName="header-nav-url-active">top</Link>
              </li>
              <li className="header-nav-item">
                <Link to="new" className="header-nav-url" activeClassName="header-nav-url-active">newest</Link>
              </li>
              <li className="header-nav-item">
                <Link to="best" className="header-nav-url" activeClassName="header-nav-url-active">best</Link>
              </li>
              <li className="header-nav-item">
                <Link to="ask" className="header-nav-url" activeClassName="header-nav-url-active">ask</Link>
              </li>
              <li className="header-nav-item">
                <Link to="show" className="header-nav-url" activeClassName="header-nav-url-active">show</Link>
              </li>
              <li className="header-nav-item">
                <Link to="jobs" className="header-nav-url" activeClassName="header-nav-url-active">jobs</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
