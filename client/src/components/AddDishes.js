import axios from "axios";
import React, { Component } from "react";
import { connect } from 'react-redux';

class Dishes extends Component {

    componentDidMount() {
       const { user, history } = this.props;

        if (!user || user.role !== 'admin'){
            history.push('/');
        }

    }
    
    putInfoToDB = data => {
        console.log('dishes data',data);
        axios.post("/api/Dishes/add", {
            category: data.category,
            name: data.name,
            ingredients: data.ingredients,
            description: data.description,
            weight: data.weight,
            price: data.price,
            avgTime: data.avgTime,
            image: data.image,
        });
    };
    render(){
        console.log(this.state);
        return (
            <div className="container">
                <div style={{ padding: "10px" }}>
                    <input
                        type="text"
                        onChange={e => this.setState({ category: e.target.value })}
                        placeholder="add category"
                        style={{ width: "200px" }}
                    />
                    <input
                        type="text"
                        onChange={e => this.setState({ name: e.target.value })}
                        placeholder="add name"
                        style={{ width: "200px" }}
                    />
                    <input
                        type="text"
                        onChange={e => this.setState({ ingredients: e.target.value })}
                        placeholder="add ingredients"
                        style={{ width: "200px" }}
                    /> <br />
                    <input
                        type="text"
                        onChange={e => this.setState({ description: e.target.value })}
                        placeholder="add description"
                        style={{ width: "200px" }}
                    />
                    <input
                        type="text"
                        onChange={e => this.setState({ weight: e.target.value })}
                        placeholder="add weight"
                        style={{ width: "200px" }}
                    />
                    <input
                        type="text"
                        onChange={e => this.setState({ price: e.target.value })}
                        placeholder="add price"
                        style={{ width: "200px" }}
                    /> <br />
                    <input
                        type="text"
                        onChange={e => this.setState({ avgTime: e.target.value })}
                        placeholder="add avgtime"
                        style={{ width: "200px" }}
                    />
                    <input
                        type="text"
                        onChange={e => this.setState({ image: e.target.value })}
                        placeholder="add image"
                        style={{ width: "200px" }}
                    />
                    <button onClick={() => this.putInfoToDB(this.state)}>
                        ADD DISHES
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ auth }) => ({
    user: auth.user,
})

export default connect(mapStateToProps)(Dishes)