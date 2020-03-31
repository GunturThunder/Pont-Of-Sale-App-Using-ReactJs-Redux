import React , { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../redux/action/product';
import { getCategorys } from '../redux/action/category';
import { Link } from 'react-router-dom';

import './Content.css';
import fork from './fork.png';
import list from './list.png';
import user from './user.png';
import AddProduct from '../modal/AddProduct';
import EditProduct from '../modal/EditProduct';
import product from '../redux/reducers/product';
import DeleteProduct from '../modal/DeleteProduct';
import { addCart } from '../redux/action/cart';
import { pagination } from '../redux/action/product'
// import food from './Wiener Schnitzel.png'

class Content extends Component{
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
    getCategorys(){
        this.props.dispatch(getCategorys());
    }  
    componentDidMount(){
        this.getProducts();
        this.getCategorys();
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

    paginationHandle = (event) => {
        // console.log(event.target.value)
        this.props.dispatch(pagination(event.target.id));
    }
    convertToRupiah = (angka) => {
        var rupiah = ''
        var angkarev = angka.toString().split('').reverse().join('')
        for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.'
        return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('') + ',-'
      }
    render(){
        // console.log(getProducts())
        const { products, categorys, pagination } = this.props;
        const Check = () =>{
            if(localStorage.getItem('status')==='admin'){
                return(
                    <div>
                        <Link to="/category"><img src={fork} style={{width:"50px",height:"50px", marginTop:"15px"}}/></Link>
                        <img src={list} style={{width:"50px",height:"50px", marginTop:"40px"}}/>
                        <Link to="/user"><img src={user} style={{width:"50px",height:"50px", marginTop:"40px"}}/></Link>
                        <span className="plus-icon"><b onClick={this.handleShow} style={{cursor: "cell"}}>+</b></span><br/>
                    </div>
                )
            }
            else{
                return(
                    <div>
                    </div>
                )
            }
        }
        const Select = () =>{
            if(localStorage.getItem('status')==='admin'){
                return(
                    <div className="fix-card">
                        { products.map((product, index) =>
                        <div className="card" key={index} >
                            <div className="img" onClick={()=>(this.onAddChart(product,product.id_product))}>
                                <img src={product.image} title={product.description}/>
                            </div>
                            <div className="content-product">
                                <h4>{product.name}</h4>
                                <h6>{this.convertToRupiah(product.price)}</h6>
                            </div>
                            <button type="button" className="btn btn-primary" data-toggle="modal" onClick={()=>(this.onSelectItemProductEdit(product))} /*data-target="#editData" onClick={()=>this.onClickHandler(post.id_product)}*/>Edit</button>
                            <button type="button" className="btn btn-danger" data-toggle="modal" onClick={()=>(this.handleShowDelete(product))}/*data-target="#deletemodal" onClick={() => this.deleteButtonHandler(post.id_product)}*/>Delete</button>
                        </div>
                    )}
                    </div>
                )
            }
            else{
                return(
                    <span>
                        { products.map((product, index) =>
                        <div className="card" key={index} >
                            <div className="img" onClick={()=>(this.onAddChart(product,product.id_product))}>
                                <img src={product.image} title={product.description}/>
                            </div>
                            <div className="content-product">
                                <h4>{product.name}</h4>
                                <h6>Rp. {product.price}</h6>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={()=>(this.onAddChart(product,product.id_product))}>Add To Cart</button>
                        </div>
                    )}
                    </span>
                )
            }
        }
        return(
            <div className="content">
                <center>
                <div className="sidebar">
                    <Check />
                </div>
                </center>
                <div className="content-card">
                    <Select />
                </div>
                <AddProduct show={this.state.show} onHide={this.handleClose} categorys={categorys}/>
                <EditProduct show={this.state.showEdit} onHide={this.handleCloseEdit} product={this.state.selectProduct}  />
                <DeleteProduct show={this.state.showDelete} onHide={this.handleCloseDelete} products={this.state.data} />
                <nav aria-label="Page navigation example" style={{marginTop:'85.5vh', marginLeft:'50%'}}>
                {/* <ul className="pagination" >
                    {pagination.map((pagination)=>(
                        <li style={{color:'white',border:'1px solid white'}} className="page-item" key={pagination}><a className="form-control btn btn-primary" onClick={this.paginationHandle} id={pagination}>{pagination}</a></li>
                    ))}
                </ul> */}
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return{
        products: state.products.products,
        categorys: state.categorys.categorys,
        pagination: state.products.totalPage
        // cart: state.cart.cart
    }
}

export default connect(mapStateToProps)(Content);