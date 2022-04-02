import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginForm from './components/login-form';
import Navigation from './components/navigation';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <LoginForm />
  </React.StrictMode>,
  document.getElementById('root')
);

