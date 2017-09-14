import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'

import storyReducer from './story'
import storyCommentsReducer from './storycomments'

export default combineReducers({
  story: storyReducer,
  comments: storyCommentsReducer,
  router: routerReducer
})
