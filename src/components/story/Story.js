import React, { Component } from 'react'
import { isEmpty } from 'ramda';

import './story.css'

class Story extends Component {
  componentWillMount() {
    const { fetchStory, match } = this.props

    fetchStory(match.params.storyId)
  }

  componentDidUpdate(prevProps) {
    const { fetchStoryComments, story } = this.props

    if (isEmpty(prevProps.story.open) && !isEmpty(story.open)) {
      story.open.kids.forEach((commentId) => {
        fetchStoryComments(commentId)
      })
    }
  }

  render() {
    console.log(this.props)

    return (
      <div className="story">
        <section className="section">

        </section>
      </div>
    )
  }
}

export default Story
