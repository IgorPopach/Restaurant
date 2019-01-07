import React, { Component } from "react";
import axios from "axios";

import Table from './components/Table';
import AddDishes from './components/AddDishes';
import Menu from './components/Menu';

class App extends Component {
  state = {
    data: [],
    dishesData: [],
    id: 0,
    message: null,
    status: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null
  };

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has 
  // changed and implement those changes into our UI

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 88000);
      this.setState({ intervalIsSet: interval });
    }
  }

  // never let a process live forever 
  // always kill a process everytime we are done using it

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  // our first get method that uses our backend api to 
  // fetch data from our data base
  getDataFromDb = () => {
    fetch("/api/Table")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };


  // our delete method that uses our backend api 
  // to remove existing database information
  deleteFromDB = idTodelete => {
    let objIdToDelete = null;
    this.state.data.forEach(dat => {
      if (dat.id == idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete("/api/Table/delete", {
      data: {
        _id: objIdToDelete
      }
    });
  };


  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id == idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });
    axios.post("/api/Table/update", {
      id: objIdToUpdate,
      update: { status: updateToApply }
    });
  };

  // our put method that uses our backend api
  // to create new query into our data base
  putStatusToDB = data => {
    console.log('data',data)
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }
    axios.post("/api/Table/add", {
      id: idToBeAdded,
      tableName: data.tableName,
      status: data.status
    });
  };


  render() {
    return (
      <div>
        <Table putStatusToDB={this.putStatusToDB} deleteFromDB={this.deleteFromDB} updateDB={this.updateDB} data = {this.state.data} />
        <AddDishes />
        <Menu />
      </div>
    );
  }
}

export default App;