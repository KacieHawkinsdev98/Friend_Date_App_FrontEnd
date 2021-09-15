import React from 'react';
import React, {useState} from 'react';


class RegistrationForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        emailAddress: ""

    }


 handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
 };

 handleSubmit = (event) => {
    event.preventDefault();
    alert(`First  Name: ${this.state.firstName} Last Name: ${this.state.lastName}`)
 };

 render(){
    return(
        <form onSubmit={(event) => this.handleSubmit(event)}>
        <label>First Name</label>
        <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName}/>
        <label>Last Name</label>
        <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName}/>
        <button type="submit">Register</button>
        </form>

    );

    }
}

export default RegistrationForm;
