import React from 'react';


function MenuItem(props) {
    const {name, weight, price, ingredients, category, addItem} = props;
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
                            {weight} {category === 'Alcohol drinks' ? "ml" : "g"}
                        </div>
                        <div className="col-2">
                            {price} $
                        </div>
                        <div className="col-2">
                            <button type="button" className="btn btn-primary"
                                    onClick={() => addItem([name, weight, price, category])}>Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default MenuItem;