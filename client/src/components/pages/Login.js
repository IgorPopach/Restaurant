import React, { Component } from "react";
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
        const { email,  password} = this.state;
        const user = {
            email,
            password,
        }
        this.props.loginUser(user);
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.user) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: this.props.errors
            })
        }
    }
    componentDidMount = () => {
        if(this.props.user) {
            this.props.history.push('/')
        }
    }

    render() {
        const { errors } = this.props;
        return (
            <div className="container">
                <h2 style={{marginBottom: '40px', color: 'white'}}>Please sign in</h2>
                <form onSubmit={this.handleSubmit} style={{ maxWidth: "400px" }}>
                    <div className="form-group">
                        <input type="email" name="email" 
                        placeholder="Email" required autoFocus 
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.email
                        })}
                        value={ this.state.email }
                        onChange={this.handleInputChange} />
                        {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" 
                        placeholder="Password" 
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.password
                        })}
                        value={ this.state.password }
                        onChange={this.handleInputChange}
                        onBlur={() => alert('Validate me!')}
                        />
                        {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                    </div>
                    <div className="form-group">
                        <button className="btn btn-lg btn-primary btn-block" 
                        type="submit">LOGIN</button>
                    </div>
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    user: PropTypes.shape({
        firstName: PropTypes.string.isRequired
    }),
    errors: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired
}

export default Login;