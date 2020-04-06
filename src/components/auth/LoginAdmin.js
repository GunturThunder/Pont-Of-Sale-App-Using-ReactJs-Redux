import React, { Component } from 'react';
import axios from 'axios';
import {Button,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom'

import './LoginAdmin.css';
import elipse from './elipse.png';
import human from './human.png';
import bg from './bg.png';

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    componentDidMount(){
        if(window.localStorage.getItem('token')){
            this.props.history.push('/');
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        // console.log('hahaa');

        axios
            .post(process.env.REACT_APP_URL+'user/login', this.state)
            .then(res => {
                window.localStorage.setItem('token', res.data.token);
                window.localStorage.setItem('user-id', res.data.id_user);
                window.localStorage.setItem('isAuth', true);
                window.localStorage.setItem('status',res.data.status)
                this.props.history.push('/');
            })
            .catch(err => {
                console.log(err);
            })
    }

    render(){
        return(
            <div className="container-login">
                <img className="elipse" src={elipse} />
                <img className="human" src={human} />
                <img className="bg" src={bg}/>
                {/* <Link to="/cashierlogin"><Button variant="primary" type="submit" style={{position:'absolute',marginTop:'22vh', marginLeft:'7%'}}>Login Cashier</Button></Link> */}
                <div className="container" style={{marginTop:'27vh', marginLeft:'30%',position:'absolute', textAlign: 'center', border:'1px solid #F6FEFF', width:'35%'}}>
                    <Form onSubmit={this.onSubmit}>
                    <h4 style={{ marginTop: '10px', color:'#949C9C' }}>Login</h4><hr/>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{color:'#949C9C'}}>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.onChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label style={{color:'#949C9C'}}>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={this.onChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        {/* <Button style={{marginLeft:'5px'}} variant="primary" type="">
                            Register
                        </Button> */}
                    </Form>
                </div>
            </div>
        )
    }
}

export default Login;