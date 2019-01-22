import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App.js';
import Store from "./store/index.js";
import { Provider } from "react-redux"

ReactDOM.render( 
<Provider store={Store}> 
    <App/>
</Provider>, 
document.getElementById('root'));
