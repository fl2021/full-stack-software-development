import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './clock';
import Button from './button';
import Clock1 from './clock1';


ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    {/* <Clock /> */}
    {/* <Button/> */}
    <Clock1/>
  
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
