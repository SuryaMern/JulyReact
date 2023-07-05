import React, { Component } from 'react'
import Axios from "axios"
class Post extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:[]
      }
    }
    componentDidMount(){
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
                this.setState({users:response.data})
        })
        .catch((err)=>{
                console.error(err)
        })

        }
    
    
  render(){
    return (
      <div>
        <div className="container">
            <div className="row">
               
                {/* <pre>{JSON.stringify(this.state.users)}</pre> */}
                {
                    this.state.users.length > 0 ? <React.Fragment>
                         <div className="col-md-8">
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>City</th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.users.map((user)=>{
                                                return<tr>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.address.city}</td>
                                                </tr>
                                    })}
                                </tbody>
                            </table>
                         </div>
                    </React.Fragment>:null
                }
                </div>
            </div>
        
        
      </div>
    )
    }

}
export default Post
