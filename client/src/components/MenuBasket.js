import React from 'react';


function MenuBasket(props) {
    const {data} = props;
    let sum=0;
    let id=0;
    console.log(data);


    return (
        <div className="card">
            <div className="card-header" align="center" style={{background:"black", color:"white"}}>
                ORDER
            </div>
            <div className="card-body" style={{padding:5}}>
                <table className="table table-sm table-dark" style={{marginBottom:0}}>
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(item=>{

                        sum+=item[2];
                        id++;
                        return (
                            <tr key={id}>
                                <th scope="row">{id}</th>
                                <td>{item[0]}</td>
                                <td>{item[1]} {item[3]==='Alcohol drinks'? "ml" : "g"}</td>
                                <td>${item[2]}</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <th scope="row">Total</th>
                        <td colSpan="2"> </td>
                        <td>{sum===0 ? '0' : `Total:$${sum}`}</td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default MenuBasket;