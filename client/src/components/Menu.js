import React, { Component } from "react";
import MenuItem from './MenuItem';

export default class Menu extends Component {
    state = {
        dishesData: [],
        saladsCat: [],
        FirstDishesCat: [],
        HotDishesCat: [],
        DessertsCat: [],
        AlcoholDrinksCat: []
    };
    componentDidMount() {
        fetch("/api/Dishes")
            .then(data => data.json())
            .then(res => this.setState({ dishesData: res.dishesData }))
            .then(res => this.categoryFilter(this.state.dishesData))
    }

    
    categoryFilter = (data) => {
        let saladsCat = [];
        saladsCat = data.filter(item => {
            if (item.category === "Salads") {
                return item
            }
            return false
        });
        let FirstDishesCat = [];
        FirstDishesCat = data.filter(item => {
            if (item.category === "First dishes") {
                return item
            }
            return false
        });
        let HotDishesCat = [];
        HotDishesCat = data.filter(item => {
            if (item.category === "Hot dishes") {
                return item
            }
            return false
        });
        let DessertsCat = [];
        DessertsCat = data.filter(item => {
            if (item.category === "Desserts") {
                return item
            }
            return false
        });
        let AlcoholDrinksCat = [];
        AlcoholDrinksCat = data.filter(item => {
            if (item.category === "Alcohol drinks") {
                return item
            }
            return false
        });
        this.setState({
            saladsCat: saladsCat,
            FirstDishesCat: FirstDishesCat,
            HotDishesCat: HotDishesCat,
            DessertsCat: DessertsCat,
            AlcoholDrinksCat: AlcoholDrinksCat,
        })
    };

    render(){
        const {saladsCat, FirstDishesCat, HotDishesCat, DessertsCat, AlcoholDrinksCat} = this.state
        return (
            <div>
                {saladsCat ? saladsCat.map(dat => {
                        return <MenuItem
                            key={dat.ingredients}
                            name={dat.name}
                            weight={dat.weight}
                            price={dat.price}
                            ingredients={dat.ingredients}
                        />})
                    : "ok"

                }
            </div>
        )
    }
}