import React from "react";
import AddDishes from '../components/AddDishes';

const EditBase = (props) => {
    return (
        <div className="container-fluid">
            <AddDishes url={props} />
        </div>
    )
};

export default EditBase;