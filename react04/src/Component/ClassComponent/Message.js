import React, { Component } from 'react'
import Axios from "axios"
class Message extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Message:[]
      }
    }
    componentDidMount(){
        Axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
                this.setState({
                    Message:response.data
                })
        })
        .catch()
    }
  render() {
    return (
      <div>
        {/* <pre>{JSON.stringify(<thi></thi>s.state.Message)}</pre> */}
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <table className='table table-hover'>
                        <thead className='bg-dark'>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Body</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Message.map((msg)=>{
                                    return<tr>
                                        <td>{msg.id}</td>
                                        <td>{msg.name}</td>
                                        <td>{msg.email}</td>
                                        <td>{msg.body}</td>
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
}

export default Message
