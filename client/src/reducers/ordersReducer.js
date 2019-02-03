import {
    STORE_ORDERS
} from '../actions/orders';

const initialState = {
    orders: [
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
    ]
}

export default function( state = initialState, action) {
    switch (action.type) {
        case STORE_ORDERS: 
            return { ...state, orders: action.payload};
        default: return state;
    }
}