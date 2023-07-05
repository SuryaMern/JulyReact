import React, { Component } from 'react'

class Registration extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username : " ",
         email:" ",
         password:" ",
         mobile:" "

      }
    }
    
    registrationHandler = (event) => {
            this.setState({
                [event.target.name]:event.target.value
            })
    }

    submitHandler = (event) => {
        event.preventDefault()
    }
  render() {
    return (
        
      <div>
        <h2 className='bg-info text-black'>Registration Form</h2>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-body"></div>
                            
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <input type="text" placeholder="Username" name="username" required className='form-control' onChange={this.registrationHandler}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder='Email' name="email" required className='form-control' onChange={this.registrationHandler}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" placeholder='Password' required name="password" className='form-control'onChange={this.registrationHandler}/>
                                </div>
                                <div className="form-group">
                                    <input type="tel" placeholder='Mobile' required name="password" className='form-control'onChange={this.registrationHandler}/>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="submit" className='btn btn-primary'/>
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
export default Registration
