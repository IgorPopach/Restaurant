import React, { Component } from "react";

export default class Table extends Component {
    render(){
        const data = this.props.data
        return (
            <div>
                <ul>
                    {data.length <= 0
                        ? "NO DB ENTRIES YET"
                        : data.map(dat => (
                            <li style={{ padding: "10px" }} key={data._id}>
                            <span style={{ color: "gray" }}> id: </span> {dat.id} <br />
                            <span style={{ color: "gray" }}> table: </span> {dat.tableName} <br />
                            <span style={{ color: "gray" }}> status: </span> {dat.status}
                            </li>
                        ))}
                </ul>
                <div style={{ padding: "10px" }}>
                    <input
                        type="text"
                        style={{ width: "200px" }}
                        onChange={e => this.setState({ idToDelete: e.target.value })}
                        placeholder="put id of item to delete here"
                    />
                    <button onClick={() => this.props.deleteFromDB(this.state.idToDelete)}>
                        DELETE
                    </button>
                </div>
                <div style={{ padding: "10px" }}>
                    <input
                        type="text"
                        style={{ width: "200px" }}
                        onChange={e => this.setState({ idToUpdate: e.target.value })}
                        placeholder="id of item to update here"
                    />
                    <input
                        type="text"
                        style={{ width: "200px" }}
                        onChange={e => this.setState({ updateToApply: e.target.value })}
                        placeholder="put new status of the table here"
                    />
                    <button
                        onClick={() =>
                        this.props.updateDB(this.state.idToUpdate, this.state.updateToApply)
                        }
                    >
                        UPDATE
                    </button>
                </div>
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
            </div>
        )
    }
}