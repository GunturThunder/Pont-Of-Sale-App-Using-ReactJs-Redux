import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { createProduct } from '../redux/action/product';

class CheckOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: []
        };
      }
    state = {
        show: false
    }
    // Insert Data
    handleShow = () => {
        this.setState({
            show: true
        })
    }
    handleClose = () => {
        this.setState({
            show: false
        })
    }
    render() {
        const { show, onHide } = this.props;
        const { cart,total } = this.props;
        console.log(cart," ",total)
        return (
            <Modal show={show} onHide={onHide} variant="lg">
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: 20 }}>Checkout</Modal.Title>
                </Modal.Header>
                <div style={{ margin: '20px 20px', flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <p>Coffee Latte 1x</p>
                    </div>
                    <div>
                        <p>Rp. 60.000</p>
                    </div>
                </div>
                <Modal.Footer closeButton>
                    <Modal.Title style={{ fontSize: 20 }}><b>Total : Rp.100.000</b></Modal.Title>
                </Modal.Footer>
            </Modal>
        )
    }
}
// const mapStateToProps = (state) => {
//     // console.log(state.cart.cart)
//     return {
//         cart: state.cart.cart,
//         total: state.cart.total
//     }
// }
export default connect()(CheckOut);