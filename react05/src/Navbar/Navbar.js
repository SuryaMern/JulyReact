import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <a className="navbar-brand" href="#">React Component</a>
        <div className="ml-auto" >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/features">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Pricing">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Navbar
