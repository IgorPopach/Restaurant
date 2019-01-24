import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from './../actions/authentication';

class Login extends Component {
    state = {
        email: '',
        password: '',
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
        this.props.loginUser(user);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors: this.props.errors
            })
        }
    }

    render() {
        return (
            <div className="container">
                <h2 style={{marginBottom: '40px', color: 'white'}}>Please sign in</h2>
                <form onSubmit={this.handleSubmit} style={{ maxWidth: "300px" }}>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Email" required autoFocus onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" placeholder="Password" onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-lg btn-primary btn-block" type="submit">LOGIN</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}




export default Login;