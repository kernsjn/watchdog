import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Page from './pages/Page'
import HomePage from './pages/HomePage'
import Nav from './components/Nav'

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/1" component={Page}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
