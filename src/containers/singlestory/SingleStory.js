import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions/story'

import { Header, Footer, Story } from '../../components'

class SingleStory extends Component {
  render() {
    return (
      <div>
        <Header />

        <Story {...this.props} />

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SingleStory)
