import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Punchlist from './pages/punchlist/Punchlist'
import HomePage from './pages/HomePage'
import Nav from './components/Nav'

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/Punchlist" component={Punchlist}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
