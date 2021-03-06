import React, { Component } from 'react';
import logo from './logo.svg';
import jmLogo from './img/jm.jpg';
import './App.css';
import Products from './components/Products.jsx';
import StarRating from 'react-star-rating';
import './font-awesome/css/font-awesome.min.css';
import './../node_modules/react-star-rating/dist/css/react-star-rating.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
         <title>Borel</title>
          <img src={jmLogo} />
          <h2>Welcome to JobsMatrix</h2>
        </div>
        <p className="App-intro">
          <Products />,
        </p>
      </div>
    );
  }
}

export default App;
