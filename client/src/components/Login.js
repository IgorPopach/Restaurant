import React, { Component } from "react";
import axios from "axios";
import setAuthToken from "./../setAuthToken";
import jwt_decode from 'jwt-decode';
import isEmpty from './../validation/is-empty';

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        isAuthenticated: false,
        user: {},
        errors: {}
    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        axios.post('/api/users/login', user)
            .then(res => {
                const { token } = res.data;
                console.log('token', token)
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                this.setCurrentUser(decoded);
                console.log('state', this.state);
            })
            .catch(err => { console.log(err) })
    }

    setCurrentUser = (state = this.state, decoded) => {
        this.setState({
            isAuthenticated: !isEmpty(decoded),
            user: decoded
        })
    }

    render() {
        return (
            <div className="container">
                <h2 className="form-signin-heading">Please sign in</h2>
                <form onSubmit={this.handleSubmit} style={{ maxWidth: "300px" }}>
                    <div>
                        <input name="email" placeholder="Email" required autoFocus onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <input name="password" placeholder="Password" onChange={this.handleInputChange} />
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">LOGIN</button>
                </form>
            </div>
        )
    }
}