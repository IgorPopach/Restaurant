import React, { Component } from "react";

export default class Menu extends Component {
    state = {
        dishesData: [],
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
    
    render(){
        const data = this.state.dishesData
        console.log('data',data)
        return (
            <div>
                <h2>Salads:</h2>
                <ul>
                    {data.length <= 0
                        ? "NO DB DISHES ENTRIES YET"
                    : data.map(dat => {
                            if(dat.category === "Salads")
                                return <div key={dat._id}>
                                            <li style={{ padding: "10px", display: "inline-block" }}>
                                                <p>{dat.name}</p>
                                                <span style={{ color: "gray" }}> (ingredients: </span> {dat.ingredients})
                                                <span style={{ color: "gray" }}> weight: </span> {dat.weight}
                                                <span style={{ color: "gray" }}> price: </span> {dat.price}
                                            </li> 
                                        </div>
                        })
                    }
                </ul>
                <h2>First dishes:</h2>
                <ul>
                    {data.length <= 0
                        ? "NO DB DISHES ENTRIES YET"
                        : data.map(dat => {
                            console.log('dat.category', dat.category )
                            if(dat.category === "First dishes")
                                return <div key={dat._id}>
                                            <li style={{ padding: "10px", display: "inline-block" }}>
                                                <p>{dat.name}</p>
                                                <span style={{ color: "gray" }}> (ingredients: </span> {dat.ingredients})
                                                <span style={{ color: "gray" }}> weight: </span> {dat.weight}
                                                <span style={{ color: "gray" }}> price: </span> {dat.price}
                                            </li> 
                                        </div>
                        })
                    }
                </ul>
                <h2>Hot dishes:</h2>
                <ul>
                    {data.length <= 0
                        ? "NO DB DISHES ENTRIES YET"
                        : data.map(dat => {
                            console.log('dat.category', dat.category )
                            if(dat.category === "Hot dishes")
                                return <div key={dat._id}>
                                            <li style={{ padding: "10px", display: "inline-block" }}>
                                                <p>{dat.name}</p>
                                                <span style={{ color: "gray" }}> (ingredients: </span> {dat.ingredients})
                                                <span style={{ color: "gray" }}> weight: </span> {dat.weight}
                                                <span style={{ color: "gray" }}> price: </span> {dat.price}
                                            </li> 
                                        </div>
                        })
                    }
                </ul>
                <h2>Desserts:</h2>
                <ul>
                    {data.length <= 0
                        ? "NO DB DISHES ENTRIES YET"
                        : data.map(dat => {
                            console.log('dat.category', dat.category )
                            if(dat.category === "Hot dishes")
                                return <div key={dat._id}>
                                            <li style={{ padding: "10px", display: "inline-block" }}>
                                                <p>{dat.name}</p>
                                                <span style={{ color: "gray" }}> (ingredients: </span> {dat.ingredients})
                                                <span style={{ color: "gray" }}> weight: </span> {dat.weight}
                                                <span style={{ color: "gray" }}> price: </span> {dat.price}
                                            </li> 
                                        </div>
                        })
                    }
                </ul>
                <h2>Alcohol drinks:</h2>
                <ul>
                    {data.length <= 0
                        ? "NO DB DISHES ENTRIES YET"
                        : data.map(dat => {
                            console.log('dat.category', dat.category )
                            if(dat.category === "Hot dishes")
                                return <div key={dat._id}>
                                            <li style={{ padding: "10px", display: "inline-block" }}>
                                                <p>{dat.name}</p>
                                                <span style={{ color: "gray" }}> (ingredients: </span> {dat.ingredients})
                                                <span style={{ color: "gray" }}> weight: </span> {dat.weight}
                                                <span style={{ color: "gray" }}> price: </span> {dat.price}
                                            </li> 
                                        </div>
                        })
                    }
                </ul>
            </div>
        )
    }
}