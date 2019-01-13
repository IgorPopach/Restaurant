import React, {Component} from "react";
import MenuItem from './MenuItem';

export default class Menu extends Component {
    state = {
        dishesData: [],
        filteredData: []
    };

    componentDidMount() {
        fetch("/api/Dishes")
            .then(data => data.json())
            .then(res => this.setState({dishesData: res.dishesData}))
            .then(res => this.setState({filteredData: this.handleFillArraysCategories(this.state.dishesData, this.handleGetCategories(this.state.dishesData))}))
    }

    handleGetCategories = (data) => {
        let categoriesNames = [];
        data.map(item => {
            if (!categoriesNames.includes(item.category)) categoriesNames.push(item.category)
        });
        return categoriesNames;
    };

    handleFillArraysCategories = (data, categories) => {
        let arr = [];
        categories.map(category => {
            let arr_items = [];
            data.map(item => {
                if (category === item.category) arr_items.push(item);
                return arr_items;
            });
            arr.push(arr_items);
        });
        return arr;
    };

    render() {
        const {filteredData} = this.state;
        return (
            <div>
                {filteredData.map(dat => {
                    return (<div className="container">
                        <h2 align="center">{dat[0].category}</h2>
                        {dat.map(item => {
                            return <MenuItem
                                key={item.ingredients}
                                name={item.name}
                                weight={item.weight}
                                price={item.price}
                                ingredients={item.ingredients}
                            />
                        })}
                    </div>)
                })}
            </div>
        )
    }
}