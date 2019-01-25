import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';
import { registerUser } from './../actions/authentication';
import classnames from 'classnames';

class Register extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        tel: '',
        role: 'client',
        password: '',
        password_confirm: '',
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
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            tel: this.state.tel,
            role: this.state.role,
            password: this.state.password,
            password_confirm: this.state.password_confirm,
        }
        this.props.registerUser(user, this.props.history);
    }
    componentWillReceiveProps = (nextProps) => {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    componentDidMount = () => {
        console.log('this.props.history',this.props.history)
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/')
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <h2 style={{marginBottom: '40px', color: 'white'}}>Registration</h2>
                <form onSubmit={this.handleSubmit} style={{ maxWidth: "400px" }} >
                    <div className="form-group">
                        <input type="text" name="firstName" 
                        placeholder="Your First Name" 
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.firstName
                        })}
                        onChange={this.handleInputChange} 
                        value={ this.state.firstName }/>
                        {errors.firstName && (<div className="invalid-feedback">{errors.firstName}</div>)}
                    </div>
                    <div className="form-group">
                        <input type="text" name="lastName" 
                        placeholder="Your Last Name" 
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.lastName
                        })}
                        onChange={this.handleInputChange} 
                        value={ this.state.lastName }/>
                        {errors.lastName && (<div className="invalid-feedback">{errors.lastName}</div>)}
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" 
                        placeholder="Your Email" 
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.email
                        })}
                        onChange={this.handleInputChange} 
                        value={ this.state.email }/>
                        {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                    </div>
                    <div className="form-group">
                        <input type="tel" name="tel" 
                        placeholder="Your Tel number" 
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.tel
                        })}
                        onChange={this.handleInputChange} 
                        value={ this.state.tel }/>
                        {errors.tel && (<div className="invalid-feedback">{errors.tel}</div>)}
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" 
                        placeholder="Your Password" 
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.password
                        })}
                        onChange={this.handleInputChange} 
                        value={ this.state.password }/>
                        {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                    </div>
                    <div className="form-group">
                        <input type="password" name="password_confirm" 
                        placeholder="Confirm Password" 
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.password_confirm
                        })}
                        onChange={this.handleInputChange} 
                        value={ this.state.password_confirm }/>
                        {errors.password_confirm && (<div className="invalid-feedback">{errors.password_confirm}</div>)}
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-lg btn-primary btn-block">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter(Register))