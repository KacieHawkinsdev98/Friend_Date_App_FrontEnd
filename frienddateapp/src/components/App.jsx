import './App.css';
import RegistrationForm from './RegistrationForm';
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
            <div><RegistrationForm/></div>


         );
    }
}
 
export default App;


