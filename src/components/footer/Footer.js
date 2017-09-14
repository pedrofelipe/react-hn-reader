import React, { Component } from 'react'

import './footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className="footer footer">
        <div className="container">
          <div className="content has-text-centered">
            <p><strong>Hacker News Reader</strong> by <a href="https://pedrofelipe.com.br">Pedro Felipe</a></p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
