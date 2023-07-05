import React, { useEffect, useState } from 'react'
import Axios from "axios"
function User() {
    const [users,setusers] = useState([])
    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
                setusers(res.data)
        })
        .catch((err)=>{
                setusers(err)
        })
    })
   
  return (
    <div>
      {/* <pre>{JSON.stringify(users)}</pre> */}
      <div className="container">
        <div className="row">
            <div className="col-md-8">
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Street</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user)=>{
                                    return <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.street}</td>
                                    <td>{user.address.city}</td>
                                </tr>
                            })
                            }
                            
                        
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default User
