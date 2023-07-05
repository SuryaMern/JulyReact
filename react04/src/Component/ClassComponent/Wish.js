import React, { Component } from 'react'
import Axios from "axios"
class Wish extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Wish:[]
      }
    }
    componentDidMount(){
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
                this.setState({Wish:res.data})
        })
        .catch((err)=>{
                console.error(err)
        })
    }
  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <table>
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
                                this.state.Wish.map((w)=>{
                                            return<tr>
                                                <td>{w.name}</td>
                                                <td>{w.email}</td>
                                                <td>{w.address.street}</td>
                                                <td>{w.address.city}</td>
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

export default Wish
