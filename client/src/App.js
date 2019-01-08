import React, { Component } from "react";

import Table from './components/Table';
import AddDishes from './components/AddDishes';
import Menu from './components/Menu';

import 'bootstrap/dist/css/bootstrap.css';
require('bootstrap');

class App extends Component {
  render() {
    return (
      <div className="container">
        <Table />
        <AddDishes />
        <Menu />
      </div>
    );
  }
}

export default App;