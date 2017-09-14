import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as storyActions from '../../actions/story'
import * as storyCommentsActions from '../../actions/storycomments'

import { Header, Footer, Story } from '../../components'

export class SingleStory extends Component {
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
const mapDispatchToProps = (dispatch) => bindActionCreators({...storyActions, ...storyCommentsActions}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SingleStory)
