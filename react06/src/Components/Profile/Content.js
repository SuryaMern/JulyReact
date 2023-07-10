import React from 'react'
import "./Content.css"

function Content(props) {
    const user = props.user

  return (    
   <div className='container'>
     <div className='images'>
        <img className="picture" src={user.image} alt="User" />
      </div>  
        <div className='content'>
          <p style={{fontWeight:"bold"}}>{user.category}</p>
           <p className='description'>{user.title}</p>
           <p>Rs.{user.price}</p>
      </div>
    </div>
  )
}
export default Content