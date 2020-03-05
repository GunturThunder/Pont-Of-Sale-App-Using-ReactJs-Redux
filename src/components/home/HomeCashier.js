import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import NavBarCashier from '../navbar/NarBarCashier';
import ContentCashier from '../content/ContentCashier';
import Cart from '../cart/CartCashier'
import './Home.css'

class HomeCashier extends Component{
    componentDidMount(){
        if(localStorage.getItem('status') !== 'cashier'){
            alert('you login as admin. please logout and login as cashier')
            this.props.history.push('/admin')
        }
    }

    onLogout(){
        localStorage.removeItem('user-id');
        localStorage.removeItem('token');
        localStorage.removeItem('isAuth');
        this.props.history.push('/cashierlogin');
    }
    render(){
        return(
            <div className="home">
                <Link to="/cashierlogin" onClick={this.onLogout.bind(this)}>Logout</Link>
                <NavBarCashier />
                <ContentCashier />
                <Cart />
            </div>
        )
    }
}

export default HomeCashier;