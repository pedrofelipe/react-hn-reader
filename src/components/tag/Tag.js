import React, { Component } from 'react'

import { isEmpty } from 'ramda';

import './tag.css'

class Tag extends Component {
  tagSingle() {
    const { tagValue, tagClass } = this.props

    return (
      <span className={`tag is-warning tags-group-item-url ${tagClass}`}>
        {tagValue}
      </span>
    )
  }

  tagGroup() {
    const { tagName, tagValue, tagClass } = this.props

    const tagGroupClass = tagClass && !isEmpty(tagClass) ? tagClass : ''

    return (
      <span className={`tags has-addons tags-group ${tagGroupClass}`}>
        <span className="tag is-dark tags-group-item">{tagName}</span>
        <span className="tag is-light tags-group-item">{tagValue}</span>
      </span>
    )
  }

  render() {
    const { tagSingle } = this.props

    return (
      tagSingle
        ? this.tagSingle()
        : this.tagGroup()
    )
  }
}

export default Tag
