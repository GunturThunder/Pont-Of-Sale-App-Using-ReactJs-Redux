import React, { Component } from 'react';
import './Cart.css';
import logo from './pic.png';
import { connect } from 'react-redux';
import { addQty, reduceQty, deleteFromCart } from '../redux/action/cart';
import CheckOut from '../modal/CheckOut';

class Cart extends Component {
     state =  {
        show: false,
        selectDeleteProduct: null,
        selectProduct: null
    }
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
    addQuantity = (cart) => {
        const initialTotal = this.props.total + cart.price
        cart.total = initialTotal
        this.props.dispatch(addQty(cart))
    }
    reduceQuantity = (cart) => {
        if (cart.qty > 1) {
            const initialTotal = this.props.total - cart.price
            cart.total = initialTotal
            this.props.dispatch(reduceQty(cart))
        }
    }
    deleteFromCart = (cart) => {
        const initialTotal = this.props.total - (cart.price * cart.qty)
        cart.total = initialTotal
        this.props.dispatch(deleteFromCart(cart));
    };
    convertToRupiah = (angka) => {
        var rupiah = ''
        var angkarev = angka.toString().split('').reverse().join('')
        for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.'
        return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('') + ',-'
      }
    render() {
        const { cart, total } = this.props
        const Check = () => {
            if (total == 0) {
                return (
                    <div>
                        <img src={logo} style={{ marginTop: "35px" }} />
                        <br /><b>Your Cart Is Empty</b>
                    </div>
                )
            }
            else {
                return (
                    <div>
                    </div>
                )
            }
        }
        return (
            <div className="cart">
                <div className="item-selected">
                    {cart.map((cart) =>

                        <center>
                            <div className="cart-item">
                                <div className="img-cart">
                                    <img className="img-cartt" src={cart.image} onClick={() => this.deleteFromCart(cart)} />
                                </div>
                                <div style={{ marginLeft: '7px' }}>
                                    <h6 style={{ marginTop: '10px', lineHeight: '40px', marginLeft: '40px' }}>{cart.name}</h6>
                                    <div style={{ marginLeft: '40px' }}>
                                        <button className="minus" style={{ border: '1px solid #82DE3A', width: '28px', backgroundColor: '#E6F8D8', color: '#82DE3A' }} onClick={() => (this.reduceQuantity(cart))}>-</button>
                                        <input style={{ border: '1px solid #82DE3A', width: '30px', height: '30px', backgroundColor: '#E6F8D8', textAlign: 'center', color: '#82DE3A' }} type="text" value={cart.qty} />
                                        <button className="plus" style={{ border: '1px solid #82DE3A', width: '28px', backgroundColor: '#E6F8D8', color: '#82DE3A' }} onClick={() => (this.addQuantity(cart))}>+</button>
                                    </div>
                                </div>
                            </div>
                        </center>
                    )}
                    <center>
                        <Check />
                    </center>
                </div>
                <div type="button" className="btn btn-outline-primary" style={{float:'right',marginRight:35,marginTop:10}}>{this.convertToRupiah(total)}</div>
                <center style={{marginTop:55}}>
                <button onClick={this.handleShow} type="button" className="btn btn-primary" style={{width:'80%'}}>Checkout</button>
                <CheckOut show={this.state.show} onHide={this.handleClose} />
                </center>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
        total: state.cart.total
    }
}

export default connect(mapStateToProps)(Cart);