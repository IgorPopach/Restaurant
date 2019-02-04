import React from "react";

import OrderItem from "./OrderItem";

const OrderList = (props) => {
    const { dishes } = props;
    return (
        <div style={{color: "white", border: "3px ridge #d9d9d9", margin: "10px", padding: "15px" }}>
            <h3 style={{color: "#d9d9d9", textDecoration: "underline"}} >Order id: {props.id}</h3>
            {dishes.map((e, index) => {
                return <OrderItem key = {index} category={e.category} name={e.name} avgTime={e.avgTime} dishStatus={e.dishStatus} />
            })}
            
        </div>
    )
}

export default OrderList;