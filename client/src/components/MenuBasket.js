import React from 'react';


function MenuBasket(props) {
    const {data} = props;
    let sum=0;
    console.log(data);


    return (
        <div className="card">
            <div className="card-header" align="center">
                ORDER
            </div>
            <div className="card-body">
                <ol className="list-group list-group-flush">
                    {data.map(item=>{

                        sum+=item[2];
                        return <li className="list-group-item">{item[0]}</li>
                    })}
                </ol>
                {sum===0 ? '' : `Total:${sum}`}
            </div>
        </div>
    );
}

export default MenuBasket;