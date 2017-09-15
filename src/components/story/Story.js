import React, { Component } from 'react'

import { isEmpty } from 'ramda';

import { getDomain, relativeTime } from '../../decorators/index'

import { Tag } from '../index'

import './story.css'

class Story extends Component {
  componentWillMount() {
    const { fetchStory, match } = this.props

    fetchStory(match.params.storyId)
  }

  componentDidUpdate(prevProps) {
    const { fetchStoryComments, story } = this.props

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

  render() {
    const { story: { open } } = this.props
    const s = open

    console.log(s)

    return (
      <div className="container">
        <section className="section story">
          <div className="content">
            <a href={s.url} target="_blank">
              {s.url && s.url.length > 0 &&
                <Tag
                  tagValue={s.url}
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
                  tagValue={s.time}
                />
              }

              {s.descendants &&
                <Tag
                  tagName="comments"
                  tagValue={s.descendants}
                />
              }
            </div>

            <p dangerouslySetInnerHTML={this.createStoryMarkup(s.text)}></p>
          </div>
        </section>

        <section className="section story">
          <h2 className="is-size-6 has-text-weight-semibold">Comments</h2>
        </section>
      </div>
    )
  }
}

export default Story
