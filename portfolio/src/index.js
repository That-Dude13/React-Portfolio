import React from 'react';
import ReactDOM from 'react-dom';
import './Index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App';
import Home from './pages/Home';




ReactDOM.render(
  <React.StrictMode>
    <App />
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);
