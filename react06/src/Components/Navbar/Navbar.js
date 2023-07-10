import React from 'react';
import './Navbar.css';
import {NavLink} from "react-router-dom"
function Navbar() {

  const navLinkStyle=({isActive}) =>{
    return{
      fontWeight: isActive?"Bold":"normal",
      textDecoration:isActive?"none":"underline"
    }
  }
  return (
    // <div className='container'>
    <nav className="navbar">
      <h1 className="title">Navbar</h1>
      <ul className="list">
        <li className="item">
          <NavLink style={navLinkStyle} to="/home" className="link" >Home</NavLink>
        </li>
        <li className="item">
          <NavLink style={navLinkStyle} to="/user" className="link">User</NavLink>
        </li>
      </ul>
    </nav>
    // </div>
  );
}
export default Navbar;
