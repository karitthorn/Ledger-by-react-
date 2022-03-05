import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloComponent from './components/HelloComponent';




//สร้าง function
// function HelloComponent(){
//   return <h1>สวัสดีจ้า</h1>
// }

//สร้าง class compoment
// class HelloComponent extends React.Component{
//   render(){
//     return <h1>สวัสดี Component เเรกของเราครับผม</h1>
//   }
// }

ReactDOM.render(<App/>,document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
