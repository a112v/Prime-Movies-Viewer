import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import App from './Apps'
import Sdata  from './Sdata';
const fl='Aarya Verma'
const currdate = new Date().toLocaleDateString();
const currtime= new Date().toLocaleTimeString(); 
ReactDom.render(<App/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.register();
