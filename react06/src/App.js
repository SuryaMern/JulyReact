/* import React, { Component } from 'react'
import Axios from "axios"
import ShowUser from './Components/ShowUser/ShowUser'
import "./Components/ShowUser/ShowUser.css"
import Navbar from './Components/ShowUser/Navbar/Navbar'
class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Results:[],
         error:null
      }
    }

    componentDidMount(){
        Axios.get("https://randomuser.me/api/?results=20")
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
        <div className='main'>
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
 */


//-------------------------------------------------------Card Component ---------------------------------
import React from 'react'
import Navbar from './Components/ShowUser/Navbar/Navbar'


function App() {
  return (
    <div>
      <Navbar/>
      
    </div>
  )
}

export default App
