import React, { Component } from 'react';
import { Navbar, Nav, Dropdown, Form, FormControl,DropdownButton } from 'react-bootstrap';
import './NavBar.css';
import { searchProduct, sortProduct } from '../redux/action/product';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import logo from './logo.png';
import { Link } from 'react-router-dom'

class NavBar extends Component {
    state = {
        name: '',
        sort: ''
    }

    sortProductHadle = (event) => {
        this.setState({
            sort: event.target.value
        })
        this.props.history.push(`?limit=6&searchName=${this.state.name}&sort=${event.target.value}`)
        this.props.dispatch(searchProduct(this.state.name, event.target.value));
    }

    searchProductHadle = async (event) => {
        await this.setState({
            name: event.target.value
        })
        console.log(this.state.name)
        this.props.history.push(`?limit=6&searchName=${this.state.name}&sort=${this.state.sort}`)
        console.log(this.props)
        this.props.dispatch(searchProduct(this.state.name, this.state.sort));
    }
    onLogout() {
        localStorage.removeItem('user-id');
        localStorage.removeItem('token');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('status');
        this.props.history.push('/login');
    }
    render() {
        return (
            <div className="navbar" style={{ margin: '0', padding: '0' }}>
                <Navbar bg="white" expand="lg" style={{ width: '75%', borderRight: '1px solid #F2F2F2' }}>
                    <img src={logo} style={{ width: "40px", height: "40px" }} />
                    <Navbar.Brand href="/" style={{ marginLeft: '1%' }}><b style={{ color: '#007BFF' }}>AsaUlu</b></Navbar.Brand>
                    <select style={{ width: '11%' }} id="inputState" class="form-control btn btn-primary" onChange={this.sortProductHadle}>
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
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.searchProductHadle} />
                        </Form>
                    </Navbar.Collapse>
                    <DropdownButton id="dropdown-basic-button" title="Settings">
                        <Dropdown.Item href="#/action-1"><Link to="/login" onClick={this.onLogout.bind(this)}>Logout</Link></Dropdown.Item>
                    </DropdownButton>
                </Navbar>
                <div className="cartt">
                    <b>Cart</b> <span className="div-cart">{this.props.cart}</span>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart.totalPurchase
    }
}
export default withRouter(connect(mapStateToProps)(NavBar));