import React from 'react';

export default class Navigation extends React.Component {
  render() {
    return (
      <ul>
        <li><a className="active" href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>      
    );
  }
}