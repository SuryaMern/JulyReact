import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           email:"",
           password:""
        }
      }


      updateHandler = (event)=>{
            this.setState({
                [event.target.name]:event.target.value
            })
      }
      /* emailHandler = (event) =>{
        this.setState({email:event.target.value})
   }
   passwordHandler = (event) =>{
        this.setState({password:event.target.value})
   } */

   submitHandler = (event) =>{
        event.preventDefault()
   }

  render() {
    return (
      <div>
        <h2 className='bg-info text-black'>Login Page</h2>
        <div className="container mt-5">
        {/* <pre>{JSON.stringify(this.state)}</pre> */}
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <input onChange={this.updateHandler} type='text' name="email" className='form-control' placeholder='Enter Your Email'/>
                                </div>
                                <div className="form-group">
                                    <input onChange={this.updateHandler} type='password' name="password" className='form-control' placeholder='Enter Your Password'/>
                                </div>
                                <div className="form-group">
                                    <input type='submit' className='btn btn-success' placeholder='Enter Your Email'/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
export default Login
