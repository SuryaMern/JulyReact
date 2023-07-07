import React from 'react'
import "./ShowUser.css"

function ShowUser(props) {
    const user = props.Message


  return (
    
   <div className='container'>
     <div className='images'>
        <img className="picture" src={user.picture.large} alt="User" />
      </div>  
        <div className='content'>
        <p className='text'>Name:{user.name.first} and {user.name.last}</p>
        <p>Email:{user.email}</p>
        <p>DOB:{new Date(user.dob.date).toLocaleDateString()}</p>
        <p>Gender:{user.gender}</p>
        <p>State:{user.location.state}</p>
        <p>Mobile:{user.phone}</p>
        <p>Timezone Offset: {user.location.timezone.offset}</p>
    </div>
    </div>
  )
}
export default ShowUser