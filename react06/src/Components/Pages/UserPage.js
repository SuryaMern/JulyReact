import React from 'react'
import "./UserPage.css"
import ShowUser from '../Card/ShowUser';
function UserPage({ users, onUserClick }) {
  return (
    <div className='main'>
      {users.map((user, index) => (
        <div key={index} onClick={() => onUserClick(user)}>
          {<ShowUser users={user}/>}
        </div>
      ))}
    </div>
  );
}
export default UserPage