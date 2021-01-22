import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*Estilos de bootstrap*/
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'popper.js';
/*Estilos propios de css*/
import './styles/estilos.css';
import './styles/textEditor.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {I18nextProvider} from 'react-i18next';
import i18next from './i18n';

ReactDOM.render(
  /*<React.StrictMode>
    <App />
  </React.StrictMode>*/
  <I18nextProvider i18n={i18next}>
     <App/>
  </I18nextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
