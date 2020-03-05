import React, { Component } from 'react';
import { Navbar, Nav, Dropdown, Form, FormControl} from 'react-bootstrap';
import './NavBar.css';
import { searchProduct, sortProduct } from '../redux/action/product';
import { connect } from 'react-redux';

class NavBarCashier extends Component{
    searchProductHadle = (event) => {
        console.log(event.target.value)
        this.props.dispatch(searchProduct(event.target.value));
    }

    sortProductHadle = (event) => {
        // console.log(event.target.value)
        this.props.dispatch(sortProduct(event.target.value));
    }

    render(){
        return(
            <div className="navbar" style={{margin:'0', padding:'0'}}>

                <Navbar bg="white" expand="lg" style={{width:'75%', borderRight:'1px solid #F2F2F2'}}>
                        <Navbar.Brand href="#home" style={{marginLeft:'15%'}}><b style={{color:'#959595'}}>AsaUlu Rest</b></Navbar.Brand>
                            <select style={{width:'11%'}} id="inputState" class="form-control btn btn-primary" onChange={this.sortProductHadle}>
                                <option selected disabled>Sort By</option>
                                <option value="name">Name</option>
                                <option value="price">Price</option>
                            </select>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link href="#home"></Nav.Link>
                            <Nav.Link href="#link"></Nav.Link>
                            </Nav>
                            <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.searchProductHadle}/>
                            </Form>
                            </Navbar.Collapse>
                </Navbar>

                <div className="cartt">
                    <b>Cart</b> <span className="div-cart">0</span>
                </div>

            </div>
        )
    }
}


// export default NavBar;

// const mapStateToProps = (state) => {
//     return {
//         // products: state.products.products,
//         // categorys: state.categorys.categorys
//     }
// }

export default connect()(NavBarCashier);