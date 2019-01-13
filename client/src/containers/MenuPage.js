import React from "react";
import Menu from '../components/Menu';

const MenuPage = (props) => {
    return (
        <div>
            <Menu url={props} />
        </div>
    )
};

export default MenuPage;