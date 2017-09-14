import { combineReducers } from 'redux'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import storyReducer from './story'

export default combineReducers({
  story: storyReducer,
  router: routerReducer
})
