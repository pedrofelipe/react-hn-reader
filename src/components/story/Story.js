import React, { Component } from 'react'

import { isEmpty } from 'ramda';

import { getDomain, relativeTime } from '../../decorators/index'

import { Placeholder } from '../index'
import { Tag } from '../index'

import './story.css'

class Story extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFetching: true
    }
  }

  componentWillMount() {
    const { fetchStory, match } = this.props

    fetchStory(match.params.storyId)
  }

  componentDidUpdate(prevProps, prevState) {
    const { fetchStoryComments, story } = this.props
    const { isFetching } = prevState

    if((!prevProps.story.isLoading && !story.isLoading) && isFetching) {
      this.setState({isFetching: false})
    }

    if (isEmpty(prevProps.story.open) && !isEmpty(story.open)) {
      story.open.kids && story.open.kids.length > 0 &&
      story.open.kids.forEach((commentId) => {
        fetchStoryComments(commentId)
      })
    }
  }

  createStoryMarkup(content) {
    return { __html: content };
  }

  renderLoading() {
    return (
      <div className="placeholder-list">
        <Placeholder />
      </div>
    )
  }

  renderStory() {
    const { story: { open }, comments: { list } } = this.props
    const s = open
    const comments = list

    return (
      <div className="container">
        <section className="section story">
          <div className="content">
            <a href={s.url} target="_blank">
              {s.url && s.url.length > 0 &&
                <Tag
                  tagValue={getDomain(s.url)}
                  tagSingle="true"
                />
              }

              <h1 className="is-size-4 has-text-weight-semibold story-title">{s.title}</h1>
            </a>

            <div className="story-tags">
              {s.score &&
                <Tag
                  tagName="points"
                  tagValue={s.score}
                />
              }

              {s.by &&
                <Tag
                  tagName="by"
                  tagValue={s.by}
                />
              }

              {s.time &&
                <Tag
                  tagName="when"
                  tagValue={relativeTime(s.time)}
                />
              }
            </div>

            <p dangerouslySetInnerHTML={this.createStoryMarkup(s.text)}></p>
          </div>
        </section>

        <section className="section story">
          <h2 className="is-size-6 has-text-weight-semibold">
            {s.descendants} {s.descendants <= 1 ? 'Comment' : 'Comments'}
          </h2>

          <hr />

          {comments && comments.map((c, key) => (
            c.by && c.time &&
              <div className="media story-comment">
                <div className="media-content">
                  <p className="story-comment-name">
                    <strong>{c.by}</strong>
                    <span className="tag is-rounded">{relativeTime(c.time)}</span>
                  </p>

                  <p dangerouslySetInnerHTML={this.createStoryMarkup(c.text)} className="story-comment-text"></p>
                </div>
              </div>
          ))}
        </section>
      </div>
    )
  }

  render() {
    const { isFetching } = this.state

    return (
      <section className="container">
        { isFetching
          ? this.renderLoading()
          : this.renderStory()
        }
      </section>
    )
  }
}

export default Story
