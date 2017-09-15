import React, { Component } from 'react'

import { Link, NavLink } from 'react-router-dom'

import './header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="section header">
          <div className="container">
            <Link to="/">
              <h1 className="title is-4 header-title">
                <span className="header-logo">Y</span>
                Hacker News Reader
              </h1>
            </Link>
          </div>
        </div>

        <nav className="section header-nav">
          <div className="container">
            <ul className="header-nav-list">
              <li className="header-nav-item">
                <NavLink exact to="/" className="header-nav-url" activeClassName="header-nav-url-active">top</NavLink>
              </li>
              <li className="header-nav-item">
                <NavLink to="/new" className="header-nav-url" activeClassName="header-nav-url-active">newest</NavLink>
              </li>
              <li className="header-nav-item">
                <NavLink to="/best" className="header-nav-url" activeClassName="header-nav-url-active">best</NavLink>
              </li>
              <li className="header-nav-item">
                <NavLink to="/ask" className="header-nav-url" activeClassName="header-nav-url-active">ask</NavLink>
              </li>
              <li className="header-nav-item">
                <NavLink to="/show" className="header-nav-url" activeClassName="header-nav-url-active">show</NavLink>
              </li>
              <li className="header-nav-item">
                <NavLink to="/jobs" className="header-nav-url" activeClassName="header-nav-url-active">jobs</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
