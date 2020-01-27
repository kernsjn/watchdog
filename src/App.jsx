import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Punchlist from './pages/punchlist/Punchlist'
import HomePage from './pages/HomePage'
import Nav from './components/Nav'
import ActiveList from './pages/ActiveList'
import UpdateItem from './pages/UpdateItem'

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/punchlist" component={Punchlist}></Route>
          <Route exact path="/item/:id" component={UpdateItem}></Route>
          <Route exact path="/active" component={ActiveList}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
