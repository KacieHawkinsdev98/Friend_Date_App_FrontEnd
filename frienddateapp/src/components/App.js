import './App.css';
// import RegistrationForm from './RegistrationForm';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './Login/Login';
import React, { Component }  from 'react';
import Profile from './Profile/Profile';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./LandingPage";
import RegistrationForm from './RegistrationForm';
import { Redirect } from 'react-router';
import jwt_decode from "jwt-decode";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            user: { }
        }
    }

componentDidMount() {
    const jwt = localStorage.getItem('token');
    try{
        const user = jwt_decode(jwt);
        this.setState({
            user
        });
    } catch {
    }
}
    render() { 
        const user = this.state.user;
        return (
            
            <Switch>
                <Route path= '/profile' render={props => {
                    if (!user){
                        return <Redirect to="/login" />;
                    }else {
                        return <Profile {...props} user={user} />
                    }
                }}
               />
               <Route path='/register' component={RegistrationForm} />
               <Route path='/login'  component={Login} />
               <Route path='/landingpage' exact component={LandingPage} />
            </Switch>
          );
    }
}
 
export default App;

    //this is for token confirmation
    //<button onClick={() => console.log(localStorage.getItem("token"))}>Click for Token!</button>