import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <a className="navbar-brand" href="#">Navbar</a>
        <div className="collapse navbar-collapse" >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/features">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Pricing">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Users">Users</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
