import React from 'react'
import "./ShowUser.css"
function ShowUser(props) {
    
  return (
   
    <div className='container'>    
     <div className='images'>
        <img className="picture" src={props.Message.picture.large} alt="User" />
      </div>
        <div>
            <h1>Firstname:{props.Message.name.first}</h1>
            <h1>Lastname:{props.Message.name.last}</h1>
            <h2>Email:{props.Message.email}</h2>
            <h2>DOB:{new Date(props.Message.dob.date).toLocaleDateString()}</h2>
        <h2>Gender:{props.Message.gender}</h2>
        <h2>State:{props.Message.location.state}</h2>
        <h2>Mobile:{props.Message.phone}</h2>
        <h2>Timezone Offset: {props.Message.location.timezone.offset}</h2>
        
    </div>
    </div>
  )
}
export default ShowUser

