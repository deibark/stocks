import React, { Component } from 'react'
import { connect } from 'react-redux'

import StockComponent from './StockComponent'
import ErrorComponent from './ErrorComponent'

import { requestStockData } from 'actions'

class StockContainer extends Component {

  componentDidMount() {
    const ric = this.props.match.params.ric
    this.props.requestStockData(ric)
  }

  render () {

    return (
      <div>
        <ErrorComponent error={ this.props.stockDataError } />
        <StockComponent data={ this.props.stockData } />
      </div>
    )
  }
}

const mapStatetoProps = (state) => ({
  stockData: state.stock.stockData,
  stockDataError: state.stock.stockDataError
})

export default connect(
  mapStatetoProps,
  { requestStockData }
)(StockContainer)
