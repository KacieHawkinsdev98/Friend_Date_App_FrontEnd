import './App.css';
import RegistrationForm from './RegistrationForm';
import Login from './Login/Login';
import React, { Component }  from 'react';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            registrationinfo: {},

         }
    }



    render() { 
        return ( 
            <div><RegistrationForm />
                <Login/>
                <button onClick={() => console.log(localStorage.getItem("token"))}>Click for Token!</button>
                </div>
            


         );
    }
}
 
export default App;


