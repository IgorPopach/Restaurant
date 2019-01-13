import React from "react";
import Menu from '../components/Menu';

const MenuPage = (props) => {
    return (
        <div className="container-fluid">
            <Menu url={props} />
        </div>
    )
};

export default MenuPage;