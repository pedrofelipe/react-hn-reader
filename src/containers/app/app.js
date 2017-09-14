import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions/story'

import { Stories } from '../../components'

import 'bulma/css/bulma.css'
import './app.css'

class App extends Component {
  render() {
    return (
      <div>
        <header className="section app-header">
          <div className="container">
            <h1 className="title is-4 app-header-title">
              <span className="app-header-logo">Y</span>
              Hacker News Reader
            </h1>
          </div>
        </header>

        <Stories {...this.props} />

        <footer className="footer app-footer">
          <div className="container">
            <div className="content has-text-centered">
              <p><strong>Hacker News Reader</strong> by <a href="https://pedrofelipe.com.br">Pedro Felipe</a></p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
