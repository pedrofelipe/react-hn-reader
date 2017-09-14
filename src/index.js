import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { logger } from 'redux-logger';

import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import reducers from './reducers'

import './index.css'

import { StoriesBoard, SingleStory } from './containers'

import { Story } from './components'

export const client = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0',
  responseType: 'json'
})

const history = createHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = [applyMiddleware(logger), applyMiddleware(axiosMiddleware(client))]

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(logger), applyMiddleware(axiosMiddleware(client)))
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" render={({ match }) => <StoriesBoard match={match} />} />
        <Route path="/top" render={({ match }) => <StoriesBoard match={match} />} />
        <Route path="/new" render={({ match }) => <StoriesBoard match={match} />} />
        <Route path="/best" render={({ match }) => <StoriesBoard match={match} />} />
        <Route path="/ask" render={({ match }) => <StoriesBoard match={match} />} />
        <Route path="/show" render={({ match }) => <StoriesBoard match={match} />} />
        <Route path="/jobs" render={({ match }) => <StoriesBoard match={match} />} />
        <Route path="/item/:storyId" render={({ match }) => <SingleStory match={match} />} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
