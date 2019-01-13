import React, { Component } from "react";

export default class Menu extends Component {
    state = {
        dishesData: [],
        saladsCat: [],
        FirstDishesCat: [],
        HotDishesCat: [],
        DessertsCat: [],
        AlcoholDrinksCat: [],
        intervalIsSet: false,
        isToggleOn: false,
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
            .then(res => this.setState({ dishesData: res.dishesData }))
            .then(res => this.categoryFilter(this.state.dishesData))
    };
    
    categoryFilter = (data) => {
        let saladsCat = []
        saladsCat = data.filter(item => {
            if (item.category === "Salads") {
                return item
            }
            return false
        })
        let FirstDishesCat = []
        FirstDishesCat = data.filter(item => {
            if (item.category === "First dishes") {
                return item
            }
            return false
        })
        let HotDishesCat = []
        HotDishesCat = data.filter(item => {
            if (item.category === "Hot dishes") {
                return item
            }
            return false
        })
        let DessertsCat = []
        DessertsCat = data.filter(item => {
            if (item.category === "Desserts") {
                return item
            }
            return false
        })
        let AlcoholDrinksCat = []
        AlcoholDrinksCat = data.filter(item => {
            if (item.category === "Alcohol drinks") {
                return item
            }
            return false
        })
        this.setState({
            saladsCat: saladsCat,
            FirstDishesCat: FirstDishesCat,
            HotDishesCat: HotDishesCat,
            DessertsCat: DessertsCat,
            AlcoholDrinksCat: AlcoholDrinksCat,
        })
    }

    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }


    
    render(){
        const {saladsCat, FirstDishesCat, HotDishesCat, DessertsCat, AlcoholDrinksCat} = this.state
        return (
            <div className="container" style={{ backgroundColor: "#cbd1db"}}>
                <div className="row">
                    <div className="col-6">
                        <h2>Salads:</h2>
                    </div>
                    <div className="col-3"style={{ lineHeight: "40px"}}>
                        weight, g
                    </div>
                    <div className="col-3"style={{ lineHeight: "40px"}}>
                        price, $
                    </div>
                </div>
                {saladsCat.length <= 0
                    ? "NO DB DISHES ENTRIES YET"
                    : saladsCat.map(dat => {
                            return <div key={dat._id}>
                                        <div className="row">
                                            <div className="col-6">
                                                {dat.name}
                                                <button onClick={this.handleClick}>
                                                    {this.state.isToggleOn ? `Don't order` : 'Order'}
                                                </button>
                                            </div>
                                            <div className="col-3">{dat.weight}</div>
                                            <div className="col-3">{dat.price}</div>
                                        </div>
                                        <p>(ingredients:  {dat.ingredients})</p>
                                    </div>
                    })
                }
                <div className="row">
                    <div className="col-6">
                    <h2>First dishes:</h2>
                    </div>
                    <div className="col-3"style={{ lineHeight: "40px"}}>
                        weight, g
                    </div>
                    <div className="col-3"style={{ lineHeight: "40px"}}>
                        price, $
                    </div>
                </div>
                {FirstDishesCat.length <= 0
                    ? "NO DB DISHES ENTRIES YET"
                    : FirstDishesCat.map(dat => {
                            return <div key={dat._id}>
                                        <div className="row">
                                            <div className="col-6">
                                                {dat.name}
                                                <button onClick={this.handleClick}>
                                                    {this.state.isToggleOn ? `Don't order` : 'Order'}
                                                </button>
                                            </div>
                                            <div className="col-3">{dat.weight}</div>
                                            <div className="col-3">{dat.price}</div>
                                        </div>
                                        <p>(ingredients:  {dat.ingredients})</p>
                                    </div>
                    })
                }
                <div className="row">
                    <div className="col-6">
                    <h2>Hot dishes:</h2>
                    </div>
                    <div className="col-3"style={{ lineHeight: "40px"}}>
                        weight, g
                    </div>
                    <div className="col-3"style={{ lineHeight: "40px"}}>
                        price, $
                    </div>
                </div>
                {HotDishesCat.length <= 0
                    ? "NO DB DISHES ENTRIES YET"
                    : HotDishesCat.map(dat => {
                            return <div key={dat._id}>
                                        <div className="row">
                                            <div className="col-6">
                                                {dat.name}
                                                <button onClick={this.handleClick}>
                                                    {this.state.isToggleOn ? `Don't order` : 'Order'}
                                                </button>
                                            </div>
                                            <div className="col-3">{dat.weight}</div>
                                            <div className="col-3">{dat.price}</div>
                                        </div>
                                        <p>(ingredients:  {dat.ingredients})</p>
                                    </div>
                    })
                }
                <div className="row">
                    <div className="col-6">
                    <h2>Desserts:</h2>
                    </div>
                    <div className="col-3"style={{ lineHeight: "40px"}}>
                        weight, g
                    </div>
                    <div className="col-3"style={{ lineHeight: "40px"}}>
                        price, $
                    </div>
                </div>
                {DessertsCat.length <= 0
                    ? "NO DB DISHES ENTRIES YET"
                    : DessertsCat.map(dat => {
                            return <div key={dat._id}>
                                        <div className="row">
                                            <div className="col-6">
                                                {dat.name}
                                                <button onClick={this.handleClick}>
                                                    {this.state.isToggleOn ? `Don't order` : 'Order'}
                                                </button>
                                            </div>
                                            <div className="col-3">{dat.weight}</div>
                                            <div className="col-3">{dat.price}</div>
                                        </div>
                                        <p>(ingredients:  {dat.ingredients})</p>
                                    </div>
                    })
                }
                <div className="row">
                    <div className="col-6">
                    <h2>Alcohol drinks:</h2>
                    </div>
                    <div className="col-3"style={{ lineHeight: "40px"}}>
                        weight, g
                    </div>
                    <div className="col-3"style={{ lineHeight: "40px"}}>
                        price, $
                    </div>
                </div>
                {AlcoholDrinksCat.length <= 0
                    ? "NO DB DISHES ENTRIES YET"
                    : AlcoholDrinksCat.map(dat => {
                            return <div key={dat._id}>
                                        <div className="row">
                                            <div className="col-6">
                                                {dat.name}
                                                <button onClick={this.handleClick}>
                                                    {this.state.isToggleOn ? `Don't order` : 'Order'}
                                                </button>
                                            </div>
                                            <div className="col-3">{dat.weight}</div>
                                            <div className="col-3">{dat.price}</div>
                                        </div>
                                        <p>(ingredients:  {dat.ingredients})</p>
                                    </div>
                    })
                }
            </div>
        )
    }
}