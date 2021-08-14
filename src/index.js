import React from 'react';
import ReactDOM from 'react-dom';



import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import LaTarea from './mierdaaaa/LaTarea';

// import WebFlixApp from "./webflix/WebFlixApp"
// import CounterApp from './counterapp/CounterApp';
// import Asincronismo from './asincronismo/Asincronismo';


// import App from './App';

//jsx
// const title = <h1>Hola React!</h1>;

//no jsx
// const titulo = React.createElement("h1" ,{}, "Hola React sin JSX")
//que, donde



ReactDOM.render(
//  <App name = "Adolfo Rodriguez" edad = {35} />,
//  <WebFlixApp/> , 
/* <CounterApp valor = {10} /> , */
/* <Asincronismo /> , */
 < LaTarea tarea = "Hola mi amigo" /> ,
  document.getElementById('root')
);


