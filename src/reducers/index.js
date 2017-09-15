import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'

import storiesReducer from './stories'
import storyReducer from './story'
import storyCommentsReducer from './storycomments'

export default combineReducers({
  stories: storiesReducer,
  story: storyReducer,
  comments: storyCommentsReducer,
  router: routerReducer
})
