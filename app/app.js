import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class App extends Component{
  render () {
    return (
      <Router history = {hashHistory}>
       <Route path='/' component={Home}/>
       <Route path ='/adress' compnent = {Address}/>
      </Router>
    )
  }
}

const Home = ()=> <h1> Hello from Home!</h1>
const Address=()=> <h1> We are located at 1117 Hanlan Ln</h1>

export default App
