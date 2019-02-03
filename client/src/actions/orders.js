import axios from "axios";

import { GET_ERRORS } from "./types";
export const STORE_ORDERS = 'STORE_ORDERS';

export const storeOrders = (orders) => ({
    type: STORE_ORDERS,
    payload: orders,
    orders,
});

export const sendStatusOrders = (orders) => dispatch => {
    return axios.post("api/chef/orders", orders)
        .then(res => {
            console.log("sendStatusOrders ==>> OK!")
            dispatch(storeOrders(orders))
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })

}

export const getStatusOrders = (orders) => dispatch => {
    return fetch("/api/Orders")
}