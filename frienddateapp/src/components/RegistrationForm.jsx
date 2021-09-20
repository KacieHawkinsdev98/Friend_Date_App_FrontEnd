import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./RegistrationForm.css"
import { BrowserRouter as Router, Link } from "react-router-dom";
import Login from "./Login/Login";


class RegistrationForm extends Component {
    state = {
    
        firstName: "",
        lastName: "",
        emailAddress: "",
        userName: "",
        password: ""

    }

     
 handleChange = (event) => {
    console.log (event.target.value)
    this.setState({
        [event.target.name]: event.target.value,
        

    })
 };

 handleSubmit = (event) => {
    event.preventDefault();
    var user ={
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.emailAddress,
        username: this.state.userName,
        password: this.state.password

    }
    this.registerUser(user)
 };
    async registerUser(user) {
        console.log(user)
      try{
      let response = await axios.post('http://127.0.0.1:8000/api/auth/register/',user);
      console.log(response.data)
    }
      catch (ex) {
         console.log('There was an error!');

        }          
    
    }

            
    render(){
    return(
     
        <section>
       <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" styles={`"border-radius: 15px;"`}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>

         
              <form onSubmit={this.handleSubmit}>
                <div className="form-outline mb-4">
                  <input type="text" id="firstNameText" className="form-control form-control-lg"  onChange={this.handleChange} value={this.state.firstName} />

                  <label className="form-label" for="form3Example1cg" >First Name</label>

                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg"onChange={this.handleChange} value={this.state.lastName} />
                  <label className="form-label" for="form3Example1cg">Last Name</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3cg" className="form-control form-control-lg"onChange={this.handleChange} value={this.state.emailAddress} />
                  <label className="form-label" for="form3Example3cg">Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg"onChange={this.handleChange} value={this.state.password} />
                  <label className="form-label" for="form3Example4cg">Username</label>
                </div>

                <div className="form-outline mb-4">
                  <input 
                  type="password" 
                  id="form3Example4cg" 
                  className="form-control form-control-lg"
                  onChange={this.handleChange} value={this.state.password} />
                  <label className="form-label">Password</label>
                </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3cg"
                  />
                  <label className="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>
              
                <p className="text-center text-muted mt-5 mb-0">Have already an account? 
                <Link to="/login">Login</Link></p>
        
              </form>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
        </section>
       

    )};

    
}

export default RegistrationForm;




 /* // <form onSubmit={this.handleSubmit}>
        // <label>First Name</label>
        // <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName}/>
        // <label>Last Name</label>
        // <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName}/>
        // <label>Email</label>
        // <input type="text" name="emailAddress" onChange={this.handleChange} value={this.state.emailAddress}/>
        // <label>User Name</label>
        // <input type="text" name="userName" onChange={this.handleChange} value={this.state.userName}/>
        // <label>Password</label>
        // <input type="text" name="password" onChange={this.handleChange} value={this.state.password}/>
        // <button type="submit">Register</button>
        // </form> */