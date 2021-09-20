import React from 'react';
import reactDom from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

reactDom.render(
    <Router>
        <App/>
    </Router>,
 document.getElementById('root'));

