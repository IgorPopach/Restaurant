import React, { Component } from "react";
import axios from "axios";


export default class Register extends Component {
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
        console.log(user);

        axios.post('/api/users/register', user)
            .then(res => console.log('res',res))
            .catch(err => {console.log(err)})
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} style={{ maxWidth: "400px" }} >
                    <h2>Sign Up here</h2>
                    <div>
                        <input type="text" name="firstName" placeholder="Your First Name" onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <input type="text" name="lastName" placeholder="Your Last Name" onChange={this.handleInputChange}/>
                    </div>
                    <div>
                        <input type="text" name="email" placeholder="Your Email" onChange={this.handleInputChange}/>
                    </div>
                    <div>
                        <input type="text" name="tel" placeholder="Your Tel number" onChange={this.handleInputChange}/>
                    </div>
                    <div>
                        <input type="text" name="password" placeholder="Your Password" onChange={this.handleInputChange}/>
                    </div>
                    <div>
                        <input type="text" name="password_confirm" placeholder="Confirm Password" onChange={this.handleInputChange}/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-lg btn-primary btn-block">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}