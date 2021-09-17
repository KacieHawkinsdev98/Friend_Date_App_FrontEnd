import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: {},
            userName: "",
            password: ""
         }
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
            userName: this.state.userName,
          
        }
     }; 

    async Login(user) {
        const response= await axios.post('http://127.0.0.1:8000/api/auth/login',user)
         this.setState({
               Logininfo: response.data
             
           });
           alert('you have sucessfully logged in');
       }

    render() { 
        return ( 
            <form onSubmit={(event) => this.handleSubmit(event)}>
        <label>Login</label>
        <input type="text" name="userName" onChange={this.handleChange} value={this.state.userName}/>
        <button type="submit">Login</button>
               </form>
         );
    }
}
 
export default Login;