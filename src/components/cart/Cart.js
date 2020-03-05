import React , { Component } from 'react';
import './Cart.css';
import logo from './pic.png';
import cart from './Black Forest.png'
import { connect } from 'react-redux';
import { addQty, reduceQty } from '../redux/action/cart';

class Cart extends Component{
    // constructor (props) {
    //     super(props)
    //     this.state = {
    //       cart: []
    //     }
    //   }
      addQuantity = (id_product) => {
   
        this.props.dispatch(addQty(id_product))
     }
     reduceQuantity = (id_product,qty) => {
        // console.log(qty)
        if(qty > 1){
            this.props.dispatch(reduceQty(id_product))
        }
     }
    render(){
        const { cart } = this.props
        var total = cart.qty * cart.price
        return(
            <div className="cart">
                <div className="item-selected">
                    {cart.map((cart) =>
                    
                    <center>
                        <div className="cart-item">
                            <div className="img-cart">
                                <img className="img-cartt" src={cart.image} />
                            </div>
                            <div style={{marginLeft:'7px'}}>
                                <h6 style={{marginTop:'10px', lineHeight:'40px', marginLeft:'40px'}}>{cart.name}</h6>
                                <div style={{ marginLeft:'40px'}}>
                                    <button className="minus" style={{border:'1px solid #82DE3A', width:'28px', backgroundColor:'#E6F8D8', color:'#82DE3A'}}onClick={()=>(this.reduceQuantity(cart.id_product,cart.qty))}>-</button>
                                    <input style={{border:'1px solid #82DE3A', width:'30px', height:'30px', backgroundColor:'#E6F8D8', textAlign:'center',color:'#82DE3A'}} type="text" value={cart.qty}/>
                                    <button  className="plus" style={{border:'1px solid #82DE3A', width:'28px', backgroundColor:'#E6F8D8', color:'#82DE3A'}} onClick={()=>(this.addQuantity(cart.id_product))}>+</button>
                                </div>
                                <h6 style={{float:'right', marginRight:'12px'}}>Rp. {total=cart.qty*cart.price}</h6>
                            </div>
                        </div>
                        {/* <img src={logo} style={{marginTop: "35px"}}/><br/><b>Your Cart Is Empty</b> */}
                    </center>
                    )}
                    {/* <p>{total}</p> */}
                    
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log(state)
    return {
        cart: state.cart.cart
      }
    }

export default connect(mapStateToProps)(Cart);