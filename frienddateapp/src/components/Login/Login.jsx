import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName: ""
         }
    }
    render() { 
        return ( 
            <form onSubmit={(event) => this.handleSubmit(event)}>
        <label>Login</label>
        <input type="text" name="userName" onChange={this.handleChange} value={this.state.userName}/>
               </form>
         );
    }
}
 
export default Login;