import React from 'react'

const StockComponent = ({ data }) => {

  if(!data) {
    return null
  }

  return(
    <ul>
      <li>Name: { data.long_name }</li>
      <li>Ticker: { data.ticker }</li>
      <li>Price: { data.summary.price } { data.currency_code }</li>
    </ul>
  )
}

export default StockComponent
