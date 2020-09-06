import React from "react"
import { Switch, Route } from "react-router-dom"

import Header from "./components/Header"
import Group from "./pages/Group"
import Me from "./pages/Me"
import Doctor from "./pages/Doctor"
import Login from "./pages/Login"

import "./App.css"

// import Cart from "./pages/Cart"
// import Photos from "./pages/Photos"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/me">
          <Header />
          <Me />
        </Route>
        <Route exact path="/group">
          <Header />
          <Group />
        </Route>
        <Route exact path="/doctor">
          <Header />
          <Doctor />
        </Route>
      </Switch>
    </div>
  )
}

export default App