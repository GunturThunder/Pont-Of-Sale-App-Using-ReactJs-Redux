import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { createProduct } from '../redux/action/product';
import {postOrder} from '../redux/action/checkout'
import { removeCart } from '../redux/action/cart'

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
    async onCheckout(cart) {
        const data = {
            product: this.props.cart
        };

        console.log(data)

        await this.props.dispatch(postOrder(data));
        await this.props.dispatch(removeCart(cart))
        this.props.onHide();
    }
    render() {
        console.log(this.props)
        const { show, onHide,cart, total } = this.props
        // console.log(cart, " ", total)
        return (
            <Modal show={show} onHide={onHide} variant="lg">
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: 20 }}>Checkout</Modal.Title>
                </Modal.Header>
                {cart.map(cart => (
                <div style={{ margin: '20px 20px', flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <p>{cart.name}  {cart.qty}x</p>
                    </div>
                    <div>
                        <p>Rp. {cart.price*cart.qty}</p>
                    </div>
                </div>
                ))}
                <Modal.Footer closeButton>
                    <Modal.Title style={{ fontSize: 20 }}>
                        <button onClick={() => this.onCheckout(cart)} type="button" class="btn btn-primary" style={{marginRight:10}}>Order</button>
                        <b>Total : Rp.{total}</b>
                    </Modal.Title>
                </Modal.Footer>
            </Modal>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log(state.cart.cart)
    return {
        cart: state.cart.cart,
        total: state.cart.total
    }
}
export default connect(mapStateToProps)(CheckOut);