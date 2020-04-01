import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import NavBar from '../navbar/NarBar';
import Content from '../content/Content';
import Cart from '../cart/Cart'
import './Home.css'

class Home extends Component{
    componentDidMount(){
        if(!localStorage.getItem('isAuth')){
            this.props.history.push('/login');
        }
    }

    onLogout(){
        localStorage.removeItem('user-id');
        localStorage.removeItem('token');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('status');
        this.props.history.push('/login');
    }
    render(){
        return(
            <div className="home">
                {/* <Link to="/login" onClick={this.onLogout.bind(this)}>Logout</Link> */}
                <NavBar />
                <Content />
                <Cart />
            </div>
        )
    }
}

export default Home;