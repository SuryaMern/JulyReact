import React, { useEffect, useState } from 'react'
import Axios from "axios"
function Welcome() {
    const [welcome,setwelcome] = useState([])
    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
                setwelcome(response.data)
        })
        .catch((err)=>{
                setwelcome(err)
        })
    })
return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-md-8">
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            welcome.map((come)=>{
                                    return<tr>
                                        <td>{come.id}</td>
                                        <td>{come.name}</td>
                                        <td>{come.email}</td>
                                        <td>{come.body}</td>
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
export default Welcome