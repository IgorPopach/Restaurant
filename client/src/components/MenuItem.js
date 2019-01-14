import React from 'react';


function MenuItem(props) {
    const {id, name, weight, price, ingredients} = props;


    return (
        <div className="container">
            <div className="card d-flex">
                <div className="card-header">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-6">
                            <h3 className="card-title">
                                {name}
                            </h3>
                            <h6>
                                ({ingredients})
                            </h6>
                        </div>
                        <div className="col-2">
                            {weight}g
                        </div>
                        <div className="col-2">
                            {/*<input type="text" placeholder="1" required style={{width:25}}/>*/}
                        </div>
                        <div className="col-1">
                            {price}$
                        </div>
                        <div className="col-1">
                            <button type="button" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default MenuItem;