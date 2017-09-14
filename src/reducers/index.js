import { combineReducers } from 'redux'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import storyReducer from './story'
import storyCommentsReducer from './storycomments'

export default combineReducers({
  story: storyReducer,
  comments: storyCommentsReducer,
  router: routerReducer
})
