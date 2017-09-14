import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { client } from '../../index'
import { slice, repeat } from 'ramda'

import parseDomain from 'parse-domain'
import moment from 'moment'

import { Placeholder } from '../index'

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

  getDomain(url) {
    const d = parseDomain(url)

    return `${d.domain}.${d.tld}`
  }

  getRelativeTime(timestamp) {
    return moment.unix(timestamp).fromNow()
  }

  renderLoading() {
    return (
      <div className="placeholder-list">
        { repeat(<Placeholder />, 10) }
      </div>
    )
  }

  renderArticles() {
    const { story } = this.props
    const stories = story.list

    return (
      <ul className="stories-list">
        {stories.map((s, key) => (
          <li className="stories-item" key={key}>
            <Link to={`/item/${s.id}`} className="stories-url">
              {s.title}

              {s.url &&
                <span className="tag is-warning stories-tag-url">
                  {this.getDomain(s.url)}
                </span>
              }
            </Link>

            <div>
              {s.score &&
                <span className="tags has-addons stories-tag-group">
                  <span className="tag is-dark stories-tag">points</span>
                  <span className="tag is-light stories-tag">{s.score}</span>
                </span>
              }

              {s.by &&
                <span className="tags has-addons stories-tag-group stories-tag-group-author">
                  <span className="tag is-dark stories-tag">author</span>
                  <span className="tag is-light stories-tag">{s.by}</span>
                </span>
              }

              {s.time &&
                <span className="tags has-addons stories-tag-group">
                  <span className="tag is-dark stories-tag">when</span>
                  <span className="tag is-light stories-tag">{this.getRelativeTime(s.time)}</span>
                </span>
              }

              {s.descendants &&
                <span className="tags has-addons stories-tag-group">
                  <span className="tag is-dark stories-tag">comments</span>
                  <span className="tag is-light stories-tag">
                    {s.descendants}
                  </span>
                </span>
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
          : this.renderArticles()
        }
      </section>
    )
  }
}

export default Stories
