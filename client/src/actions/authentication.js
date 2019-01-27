import axios from "axios";
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from '../setAuthToken';

export const AUTHENTICATION_START = 'AUTHENTICATION_START';
export const AUTHENTICATION_STORE_USER = 'AUTHENTICATION_STORE_USER';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';

export const startAuthentication = () => ({
    type: AUTHENTICATION_START,
});

export const storeUser = (user) => ({
    type: AUTHENTICATION_STORE_USER,
    payload: user,
    user,
    time: new Date().toISOString(),
});

export const authenticationError = (error) => ({
    type: AUTHENTICATION_ERROR,
    payload: error,
})


export const registerUser = (user, history) => dispatch => {
    // TODO: avoid side efects in actions
    return axios.post("api/users/register", user)
        .then(res => history.push("/login"))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        });
};

export const loginUser = (user) => dispatch => {
    dispatch(startAuthentication())
    return axios.post("api/users/login", user)
        .then(res => {
            console.log('login response data=>', res.data);
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(storeUser(decoded));
        })
        .catch(err => dispatch(authenticationError(err.response.data)))
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(storeUser(false));
    history.push('/login');
}
