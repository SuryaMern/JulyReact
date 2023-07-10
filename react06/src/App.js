/* import React, {  useEffect, useState  } from 'react'
import Axios from "axios"
import ShowUser from './Components/ShowUser/ShowUser'
import "./Components/ShowUser/ShowUser.css"


function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    Axios.get("https://randomuser.me/api/?results=20")
      .then((res) => {
        setResults(res.data.results); 
      })
      .catch((err)=>{
        setResults(err)
      })
    }, []);

  return (
    <div className='main'>
      {results.map((result, index) => (
        <div key={index}>
          <ShowUser users={result} />
        </div>
      ))}
    </div>
  );
}
export default App */


//-------------------------------------------------------Card Component ---------------------------------


/* import React,{useState,useEffect} from 'react'
import Axios from "axios"
// import ShowUser from "./Components/Card/ShowUser"
import "./Components/Card/ShowUser.css"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Components/Pages/HomePage'
import UserPage from './Components/Pages/UserPage'
import Footer from "./Components/Footer/Footer"
function App() {

  const [results, setResults] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    Axios.get('https://randomuser.me/api/?results=20')
      .then((res) => {
        setResults(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    
      <Router>
      <Navbar/>  
      <Routes>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/user" element={<UserPage  users={results} onUserClick={handleUserClick}/>}/>
      </Routes>
      <Footer/>
      </Router>
    
  )
}
export default App
 */


//-------------------------------------------------Component-------------------------------------------------

/* import React from 'react'
import Profile from './Components/Profile/Profile'
import './Components/Profile/Profile.css'
// import Content from './Components/Profile/Content'
function App() {
  return (
    <div className='product'>
      <Content/>
       <Profile/>
      <Profile/>
      <Profile/>
      <Profile/>
      <Profile/>
      <Profile/> 
    </div>
  )
}

export default App */

//-------------------------------------------Designer Card -----------------------------------------------

import React, { useEffect, useState } from 'react'
import Axios from "axios"
import Content from "./Components/Profile/Content"
import "./Components/Profile/Content.css"
function App() {
    const [users,setusers] = useState([])
    
    useEffect(()=>{
        Axios.get("https://fakestoreapi.com/products?limit=25")
        .then((res)=>{
                setusers(res.data)
        })
        .catch((err)=>{
                setusers(err)
        })
    })
   
  return (
    <div className='main'>
    {users.map((user, index) => (
      <div key={index}>
        <Content user={user} />
      </div>
    ))}
  </div>    
  )
}
export default App