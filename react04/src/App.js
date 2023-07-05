import React from 'react'
// import Post from "./Component/ClassComponent/Post"
import Navbar from './Navbar'
// import Message from './Component/ClassComponent/Message'
import Wish from "./Component//ClassComponent/Wish"
import User from "./Component/FunComponent/User"
import Welcome from "./Component/FunComponent/Welcome"
function App() {
  return (
    <div>
        <Navbar/>
        <br/>
      {/* <Post/>
    <hr/>
    <Message/>
    <hr/> */}
    
    <Wish/>
    <hr/>
    <User/>
    <hr/>
    <Welcome/>
    </div>
  )
}

export default App
