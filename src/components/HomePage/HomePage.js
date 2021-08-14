import React, { Component } from 'react';
import HomeForm from './HomeForm'
import './HomePage.css';
class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <HomeForm/>
      </div>
    );
  }
}

export default HomePage;
