import React from 'react';

export default class LoginForm extends React.Component {
  render() {
    return (  
      <div className='flex-container'>
        <div className='login'>
          <h3>Log In</h3>
          &nbsp;
          <input type='text' placeholder='username' />       
          <input type='text' placeholder='password' />                    
          <input type='submit' />
        </div>
      </div>
    );
  }
}