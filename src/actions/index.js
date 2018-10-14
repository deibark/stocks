import { createAction } from 'redux-actions'

export const REQUEST_STOCK_DATA = 'REQUEST_STOCK_DATA'
export const RECEIVE_STOCK_DATA = 'RECEIVE_STOCK_DATA'

export const requestStockData = createAction(REQUEST_STOCK_DATA)
export const receiveStockData = createAction(RECEIVE_STOCK_DATA)
