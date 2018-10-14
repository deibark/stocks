import axios from 'axios'

const instrumentsUrl = `${process.env.REACT_APP_API_URL}/instruments`

export async function getStockData(ric) {

  const requestBody = {
    ric: ric
  }

  return await axios.put(instrumentsUrl, requestBody)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error
    })
}
