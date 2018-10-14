import { handleAction, combineActions } from 'redux-actions'

import {
  RECEIVE_STOCK_DATA,
  receiveStockData
} from 'actions'

const defaultState = {
  stockData: null
}

export const stock = handleAction(combineActions(
  receiveStockData
), {
  next(state, action) {
    switch(action.type) {
      case RECEIVE_STOCK_DATA:
        let newState = { ...state }
        newState.stockData = action.payload.data[0]
        return newState

      default:
        return state
    }
  },
  throw(state, action) {

    switch(action.type) {
      case RECEIVE_STOCK_DATA:
        let newState = { ...state }
        newState.stockDataError = action.payload.response
        return newState
      default:
        return state
    }
  }
}, defaultState )
