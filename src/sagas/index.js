import { requestStockDataSaga } from './stock'

export default function* rootSaga () {
  yield [
    requestStockDataSaga()
  ]
}
