import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import StockContainer from './StockContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect from='/' exact to='/stock/gazpq.l' />
          <Route path='/stock/:ric' component={StockContainer} />
        </Switch>
      </Router>
    )
  }
}

export default App;
