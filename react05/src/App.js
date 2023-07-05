import React, { Component } from 'react'
import Navbar from "./Navbar/Navbar"
import Login from "./Components/Login"
import Registration from './Components/Registration'
class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Login/>
        <hr/>
        <Registration/>
      </div>
    )
  }
}
export default App