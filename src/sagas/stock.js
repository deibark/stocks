import { takeEvery, call, put } from 'redux-saga/effects'

import { getStockData } from '../api'

import {
  REQUEST_STOCK_DATA,
  receiveStockData
} from 'actions'

function* callRequestStockData(action) {

  var results = yield call(getStockData, action.payload)

  yield put(receiveStockData(results))
}


export function* requestStockDataSaga() {
  yield takeEvery(REQUEST_STOCK_DATA, callRequestStockData)
}
