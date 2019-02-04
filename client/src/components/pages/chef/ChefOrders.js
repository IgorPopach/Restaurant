import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { storeOrders } from "../../../actions/orders"

import OrderList from "./OrderList";

const orders = [
    {
        id: "1",
        dishes: [
        {
            category: "salads",
            name: "cezar",
            avgTime: 20,
            dishStatus: false,
        },
        {
            category: "salads",
            name: "Vitamin",
            avgTime: 15,
            dishStatus: false,
        },
        {
            category: "First dishes",
            name: "Ukrainian borsch is with pampushka",
            avgTime: 20,
            dishStatus: false,
        }
        ]
    },
    {
        id: "2",
        dishes: [
        {
            category: "Hot dishes",
            name: "Beef steak",
            avgTime: 20,
            dishStatus: false,
        },
        {
            category: "Desserts",
            name: 'Panna Cotta "Dairy Fruit Harmony"',
            avgTime: 15,
            dishStatus: false,
        }
        ]
    }
];

class ChefOrders extends Component {
    componentDidMount() {
        this.props.storeOrders(orders);
        console.log('ChefOrders props', this.props)
        console.log('componentDidMount ChefOrders orders', orders)
    }
    render() {
        const { orders } = this.props.orders;
        console.log('ChefOrders orders', orders)
        return (
            <>
                {orders.map( e => {
                    return <OrderList key = {e.id} id = {e.id} dishes = {e.dishes} />
                })}
            </>
        )
    }
}

const mapStateToProps = state => ({
    orders: state.orders,
    errors: state.errors
})

const mapDispatchToProps = dispatch => ({
    storeOrders: bindActionCreators(storeOrders, dispatch)
  })

export default connect(mapStateToProps, mapDispatchToProps)(ChefOrders)

// export default ChefOrders;
