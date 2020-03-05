import React , { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../redux/action/product';
import { Link } from 'react-router-dom';

import './Content.css';
import fork from './fork.png';
import list from './list.png';
import AddProduct from '../modal/AddProduct';
import EditProduct from '../modal/EditProduct';
import product from '../redux/reducers/product';
import DeleteProduct from '../modal/DeleteProduct';
import { addCart } from '../redux/action/cart';
import { pagination } from '../redux/action/product'
// import food from './Wiener Schnitzel.png'

class ContentCashier extends Component{
    state = {
        show: false,
        selectDeleteProduct: null,
        selectProduct: null
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
    // <>
    //Update 
    handleShowEdit = (e) => {
        // console.log(this.id_product)
        // e.preventDefault();
        this.setState({
        showEdit: true
        })
    }
    handleCloseEdit = () => {
        this.setState({
            showEdit: false
        })
    }
    onSelectItemProductEdit = (product) => {
        // console.log(this.product)
        this.setState({
            selectProduct: product,
            showEdit: true 
        })
    }
    
    // <>
    // Get Data
    getProducts(){
        this.props.dispatch(getProducts());
        // this.props.dispatch(pagination(1));
    }   
    
    componentDidMount(){
        this.getProducts();
    }
    // <>
    // Delete Data
    handleShowDelete = (products) => {
        console.log(products)
        this.setState({
            data : products,
            showDelete: true

        })
    }

    handleCloseDelete = () => {
        this.setState({
            showDelete: false
        })
    }

    onAddChart = (product) => {
        
        product.qty = 1 
        this.props.dispatch(addCart(product))
      }

    paginationHadle = (event) => {
        // console.log(event.target.value)
        this.props.dispatch(pagination(event.target.value));
    }
    render(){
        // console.log(getProducts())
        const { products, categorys } = this.props;
        return(
            <div className="content">
                <center>
                <div className="sidebar">
                    {/* <img src={fork} style={{width:"50px",height:"50px", marginTop:"15px"}}/>
                    <img src={list} style={{width:"50px",height:"50px", marginTop:"40px"}}/>
                    <span className="plus-icon"><b onClick={this.handleShow} style={{cursor: "cell"}}>+</b></span><br/>
                    <Link to="/category"><span className="plus-icon2"><b style={{cursor: "cell", color:'yellow'}}>+</b></span></Link> */}
                    <select style={{width:'65px'}} id="inputState" class="form-control btn btn-primary" onChange={this.paginationHadle}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                            </select>
                    {/* <button style={{border:'1px solid #82DE3A', width:'50px',backgroundColor:'#E6F8D8', color:'#82DE3A'}}>Page</button> */}
                </div>
                </center>
                <div className="content-card">
                    { products.map((product, index) =>
                        <div className="card" key={index} >
                            <div className="img" onClick={()=>(this.onAddChart(product,product.id_product))}>
                                <img src={product.image} title={product.description}/>
                            </div>
                            <div className="content-product">
                                <h4>{product.name}</h4>
                                <h6>Rp. {product.price}</h6>
                            </div>
                            <button type="button" className="btn btn-primary" data-toggle="modal" onClick={()=>(this.onAddChart(product,product.id_product))} /*data-target="#editData" onClick={()=>this.onClickHandler(post.id_product)}*/>Add To Cart</button>
                        </div>
                    )}
                </div>
                <AddProduct show={this.state.show} onHide={this.handleClose} categorys={categorys}/>
                <EditProduct show={this.state.showEdit} onHide={this.handleCloseEdit} product={this.state.selectProduct}  />
                <DeleteProduct show={this.state.showDelete} onHide={this.handleCloseDelete} products={this.state.data} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return{
        products: state.products.products,
        categorys: state.categorys.categorys
        // cart: state.cart.cart
    }
}

export default connect(mapStateToProps)(ContentCashier);