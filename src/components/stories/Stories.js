import React, { Component, PropTypes } from 'react';
import { client } from '../../index';
import { slice } from 'ramda'
import parseDomain from 'parse-domain'

import 'bulma/css/bulma.css';
import './stories.css';

class Stories extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFetching: true
    }
  }

  componentWillMount() {
    client.get('topstories.json')
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

  getDomain(url) {
    const d = parseDomain(url)

    return `${d.domain}.${d.tld}`
  }

  renderLoading() {
    return (
      <p>Loading...</p>
    )
  }

  renderArticles() {
    const { story } = this.props
    const stories = story.list

    return (
      <ul className="stories-list">
        {stories.map((s, key) => (
          <li className="stories-item" key={key}>
            <a href={s.url} className="stories-url">
              {s.title}

              {s.url &&
                <span className="tag is-warning stories-tag-url">
                  {this.getDomain(s.url)}
                </span>
              }
            </a>

            <div>
              {s.score &&
                <span className="tags has-addons stories-tag-group">
                  <span className="tag is-dark stories-tag">score</span>
                  <span className="tag is-light stories-tag">{s.score}</span>
                </span>
              }

              {s.by &&
                <span className="tags has-addons stories-tag-group">
                  <span className="tag is-dark stories-tag">author</span>
                  <span className="tag is-light stories-tag">{s.by}</span>
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
    );
  }

  render() {
    const { story } = this.props
    const { isFetching } = this.state

    return (
      <section className="container">
        { isFetching
          ? this.renderLoading()
          : this.renderArticles()
        }
      </section>
    );
  }
}

export default Stories;
