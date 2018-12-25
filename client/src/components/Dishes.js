import React, { Component } from "react";
import axios from "axios";

export default class Dishes extends Component {
    state = {
        dishesData: [],
        id: 0,
        intervalIsSet: false,
    };
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
        fetch("/api/Dishes")
            .then(data => data.json())
            .then(res => this.setState({ dishesData: res.dishesData }));
        };
    
    putInfoToDB = data => {
        console.log('dishes data',data)
        let currentIds = this.state.dishesData.map(data => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }
        axios.post("/api/Dishes/add", {
            id: idToBeAdded,
            category: data.category,
            name: data.name,
            ingredients: data.ingredients,
            description: data.description,
            weight: data.weight,
            price: data.price,
            image: data.image,
        });
    };
    render(){
        const data = this.state.dishesData
        console.log('data',data)
        return (
            <div>
                <ul>
                    {data.length <= 0
                        ? "NO DB DISHES ENTRIES YET"
                        : data.map(dat => (
                            <div>
                                <li style={{ padding: "10px", display: "inline-block" }} key={data._id}>
                                    <span>Dishes:</span> <br />
                                    <span style={{ color: "gray" }}> id: </span> {dat.id} <br />
                                    <span style={{ color: "gray" }}> category: </span> {dat.category} <br />
                                    <span style={{ color: "gray" }}> name: </span> {dat.name} <br />
                                    <span style={{ color: "gray" }}> ingredients: </span> {dat.ingredients} <br />
                                    <span style={{ color: "gray" }}> description: </span> {dat.description} <br />
                                    <span style={{ color: "gray" }}> weight: </span> {dat.weight} <br />
                                    <span style={{ color: "gray" }}> price: </span> {dat.price}
                                </li> 
                                <img style={{ display: "inline-block" }} src={dat.image} alt={dat.name} />
                            </div>
                        ))}
                </ul>
                <div style={{ padding: "10px" }}>
                    <input
                        type="text"
                        onChange={e => this.setState({ category: e.target.value })}
                        placeholder="add category"
                        style={{ width: "200px" }}
                    />
                    <input
                        type="text"
                        onChange={e => this.setState({ name: e.target.value })}
                        placeholder="add name"
                        style={{ width: "200px" }}
                    />
                    <input
                        type="text"
                        onChange={e => this.setState({ ingredients: e.target.value })}
                        placeholder="add ingredients"
                        style={{ width: "200px" }}
                    /> <br />
                    <input
                        type="text"
                        onChange={e => this.setState({ description: e.target.value })}
                        placeholder="add description"
                        style={{ width: "200px" }}
                    />
                    <input
                        type="text"
                        onChange={e => this.setState({ weight: e.target.value })}
                        placeholder="add weight"
                        style={{ width: "200px" }}
                    />
                    <input
                        type="text"
                        onChange={e => this.setState({ price: e.target.value })}
                        placeholder="add price"
                        style={{ width: "200px" }}
                    /> <br />
                    <input
                        type="text"
                        onChange={e => this.setState({ image: e.target.value })}
                        placeholder="add image"
                        style={{ width: "200px" }}
                    />
                    <button onClick={() => this.putInfoToDB(this.state)}>
                        ADD DISHES
                    </button>
                </div>
            </div>
        )
    }
}