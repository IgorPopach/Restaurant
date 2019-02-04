import {
    AUTHENTICATION_START,
    AUTHENTICATION_ERROR,
    AUTHENTICATION_STORE_USER
} from './../actions/authentication';

const initialState = {
    user: null,
    errors: {}
}

export default function( state = initialState, action) {
    switch (action.type) {
        case AUTHENTICATION_START: return {
            ...state,
            isLoading: true,
        }
        case AUTHENTICATION_STORE_USER: return Object.assign({}, state, { user: action.payload, isLoading: false });
        case AUTHENTICATION_ERROR: return Object.assign({}, state, { errors: action.payload, isLoading: false });
        default: return state;
    }
}