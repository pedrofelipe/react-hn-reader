import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { client } from '../../index'
import { slice, repeat } from 'ramda'

import { getDomain, relativeTime } from '../../decorators/index'

import { Placeholder } from '../index'
import { Tag } from '../index'

import './stories.css'

const mapToApiEndpoint = {
  top: 'topstories.json',
  new: 'newstories.json',
  best: 'beststories.json',
  ask: 'askstories.json',
  jobs: 'jobstories.json'
}

class Stories extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFetching: true,
      endpoint: 'topstories'
    }
  }

  componentWillMount() {
    let route = 'topstories.json'

    if(mapToApiEndpoint[this.getUrlPath()]) {
      route = mapToApiEndpoint[this.getUrlPath()]
    }

    client.get(route)
      .then((response) => {
        const { data } = response
        const { fetchStory } = this.props

        slice(0, 30, data).forEach((storyId) => {
          fetchStory(storyId)
        })
      })
  }

  componentDidUpdate(prevProps, prevState) {
    const { story } = this.props
    const { isFetching } = prevState

    if((!prevProps.story.isLoading && !story.isLoading) && isFetching) {
      this.setState({isFetching: false})
    }
  }

  getUrlPath() {
    const { match: { path } } = this.props

    const paths = path.split('/').filter((p) => p)

    return paths[0]
  }

  renderLoading() {
    return (
      <div className="placeholder-list">
        { repeat(<Placeholder />, 10) }
      </div>
    )
  }

  renderStories() {
    const { story } = this.props
    const stories = story.list

    return (
      <ul className="stories-list">
        {stories.map((s, key) => (
          <li className="stories-item" key={key}>
            <Link to={`/item/${s.id}`} className="stories-item-url">
              {s.title}

              {s.url &&
                <Tag
                  tagValue={getDomain(s.url)}
                  tagSingle="true"
                />
              }
            </Link>

            <div className="stories-item-tags">
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
                  tagClass="tags-group-author"
                />
              }

              {s.time &&
                <Tag
                  tagName="when"
                  tagValue={relativeTime(s.time)}
                />
              }

              {s.descendants &&
                <Tag
                  tagName="comments"
                  tagValue={s.descendants}
                />
              }
            </div>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const { isFetching } = this.state

    return (
      <section className="container">
        { isFetching
          ? this.renderLoading()
          : this.renderStories()
        }
      </section>
    )
  }
}

export default Stories
