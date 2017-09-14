import React, { Component } from 'react'

import './story.css'

class Story extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { fetchStory, match } = this.props

    fetchStory(match.params.storyId)
  }

  render() {
    const { router } = this.props

    return (
      <div>
       <p>You've found a story!</p>
      </div>
    )
  }
}

export default Story
