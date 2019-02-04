import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sendStatusOrders } from '../../../actions/orders';

class OrderItem extends Component {

  state = {
    dishProcessing: false,
    dishStatus: this.props.dishStatus,
  };

  changeStatusHandle = () => {
    this.setState(state => ({
        dishProcessing: !state.dishProcessing
    }))
  };

  sendHandle = () => {
    this.setState(state => ({
        dishStatus: !state.dishStatus
    }))
    const orders = [...this.props.orders];
    console.log('OrderItem orders', orders);
    // this.props.sendStatusOrders(this.props.orders)
  }

  render() {
      const { dishProcessing, dishStatus } = this.state;
      const { category, name, avgTime } = this.props;
      console.log('OrderItem props', this.props);
    return (
      <div className="row" style={{paddingBottom: "5px", borderBottom:"1px dotted #d9d9d9"}} >
        <div className="col-3">{category}</div>
        <div className="col-5">{name}</div>
        <div className="col-4">
          <button className="btn btn-light" onClick={this.changeStatusHandle} style={{marginRight: "10px"}}>
            {dishProcessing ? "Time" : "Cooking"}
          </button>
          {dishProcessing === true && <span style={{padding: "5px"}}>{avgTime}:00</span> }
          <button className="btn btn-light" onClick={this.sendHandle}>
            {dishStatus ? "Not Ready" : "Done"}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    orders: state.orders,
    errors: state.errors
})

const mapDispatchToProps = dispatch => ({
    sendStatusOrders: bindActionCreators(sendStatusOrders, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderItem)

// export default OrderItem;
