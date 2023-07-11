import React from 'react'
import Content from "../Profile/Content"
// import "./Components/Profile/Content.css"
function UserPage({ user, onUserClick }) {
  return (
    <div className='main'>
      {user.map((user, index) => (
        <div key={index} onClick={() => onUserClick(user)}>
          {<Content user={user}/>}
        </div>
      ))}
    </div>
  );
}
export default UserPage