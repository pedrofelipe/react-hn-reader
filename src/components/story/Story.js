import React, { Component } from 'react'
import { isEmpty } from 'ramda';

import { client } from '../../index'
import { slice } from 'ramda'

import './story.css'

class Story extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { fetchStory, match } = this.props

    fetchStory(match.params.storyId)
  }

  componentDidUpdate(prevProps) {
    const { fetchStoryComments, match, story } = this.props

    if (isEmpty(prevProps.story.open) && !isEmpty(story.open)) {
      story.open.kids.forEach((commentId) => {
        fetchStoryComments(commentId)
      })
    }
  }

  render() {
    const { router } = this.props

    // console.log(this.props)

    return (
      <div className="story">
        <section className="section">

        </section>
      </div>
    )
  }
}

export default Story
