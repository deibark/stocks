import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from 'components/App'
import rootSaga from 'sagas'
import rootReducer from 'reducers'

// create middlewares
const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(
    sagaMiddleware
)

// create store 
const store = createStore(
    rootReducer,
    composeWithDevTools(middleware)
)

// run saga middleware
sagaMiddleware.run(rootSaga)

render (
    <Provider store={ store }>
      <App />
    </Provider>, document.getElementById('root')
  )
  