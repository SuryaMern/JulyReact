import React, { Component } from 'react'
import Axios from "axios"
import ShowUser from './Components/ShowUser/ShowUser'
import "./Components/ShowUser/ShowUser.css"
class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Results:[],
         error:null
      }
    }

    componentDidMount(){
        Axios.get("https://randomuser.me/api/1.4/")
        .then((res)=>{
                this.setState({
                    Results: res.data.results
                })
        })
        .catch((err) => {
            this.setState({ error: err }); 
          });
    }

  render() {
    return (
        <div>
        {this.state.Results.map((result, index) => (
          <div>
            <ShowUser key={index} Message={result}/>
          </div>
        ))}
      </div>
    )
  }
}
export default App
