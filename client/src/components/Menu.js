import React, {Component} from "react";
import MenuBasket from './MenuBasket';
import MenuItem from './MenuItem';

export default class Menu extends Component {
    state = {
        dishesData: [],
        filteredData: [],
        order: []
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
            if (!categoriesNames.includes(item.category)) categoriesNames.push(item.category);
            return '';
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
            return '';
        });
        return arr;
    };
    handlerAddItemToBasket = (data)=>{
        this.setState(prevState => ({
            order: [...prevState.order, data]
        }));
    };

    render() {
        const {filteredData} = this.state;
        console.log(this.state.order);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        {filteredData.map(dat => {
                            return (<div key={dat[0]._id} className="container">
                                <h2 align="center">{dat[0].category}</h2>
                                {dat.map(item => {
                                    return <MenuItem
                                        key={item._id}
                                        name={item.name}
                                        weight={item.weight}
                                        price={item.price}
                                        ingredients={item.ingredients}
                                        category={item.category}
                                        addItem={this.handlerAddItemToBasket}
                                    />
                                })}
                            </div>)
                        })}
                    </div>
                    <div className="col-4">
                        <MenuBasket data={this.state.order}/>
                    </div>
                </div>

            </div>
        )
    }
}