import React, { Component } from "react";

export default class AddTable extends Component {
    render(){
        return (
            <div style={{ padding: "10px" }}>
                <input
                    type="text"
                    onChange={e => this.setState({ status: e.target.value })}
                    placeholder="add status in the database"
                    style={{ width: "200px" }}
                />
                <input
                    type="text"
                    onChange={e => this.setState({ tableName: e.target.value })}
                    placeholder="add table number in the database"
                    style={{ width: "200px" }}
                />
                <button onClick={() => this.props.putStatusToDB(this.state)}>
                    ADD
                </button>
            </div>
        )
    }
}