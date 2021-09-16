import React, { Component } from 'react';
import axios from 'axios';


class RegistrationForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        emailAddress: ""

    }


 handleChange = (event) => {
    console.log (event.target.value)
    this.setState({
        [event.target.name]: event.target.value,
        

    })
 };

 handleSubmit = (event) => {
    event.preventDefault();
    const user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        emailAddress: this.state.emailAddress
    }
 };
 async registerUser(user) {
     const response= await axios.post('http://127.0.0.1:8000/FriendApp/user/',user)
      this.setState({
            registrationinfo: response.data
        });
        
    }


 render(){
    return(
        <form onSubmit={(event) => this.handleSubmit(event)}>
        <label>First Name</label>
        <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName}/>
        <label>Last Name</label>
        <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName}/>
        <label>Email</label>
        <input type="text" name="emailAddress" onChange={this.handleChange} value={this.state.emailAddress}/>
        <button type="submit">Register</button>
        </form>

    )};

    
}

export default RegistrationForm;
