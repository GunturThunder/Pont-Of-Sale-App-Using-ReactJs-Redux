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
        if(localStorage.getItem('isAuth')){
            this.props.history.push('/cashier');
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:4040/user/login", this.state)
            .then(res => {
                // console.log(res.data);
                if(res.data.status === 'cashier'){
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('user-id', res.data.id_user);
                    localStorage.setItem('isAuth', true);
                    localStorage.setItem('status',res.data.status)
                    this.props.history.push('/cashier');
                }
                else{
                    alert('You are an admin, please login in admin form')
                    this.props.history.push('/adminlogin');
                }
               
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
                <Link to="/adminlogin"><Button variant="primary" type="submit" style={{position:'absolute',marginTop:'22vh', marginLeft:'7%'}}>Login Admin</Button></Link>
                <div className="container" style={{marginTop:'27vh', marginLeft:'30%',position:'absolute', textAlign: 'center', border:'1px solid #F6FEFF', width:'35%'}}>
                    <Form onSubmit={this.onSubmit}>
                    <h4 style={{ marginTop: '10px', color:'#949C9C' }}>Login Cashier</h4><hr/>
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
            // <div className="container" style={{border:'1px solid #F6FEFF', marginTop:'25vh', backgroundColor:'#ECE8E8', borderRadius:'50px 50px 50px 50px'}}>
            //     <center>
            //     <h4 style={{ marginTop: '10px', color:'#949C9C' }}>Login</h4><hr/>
            //     <div className="row justify-content-md-center">
            //         <div className="col-md-8">
            //             <form onSubmit={this.onSubmit}>
            //                 <div className="form-group">
            //                     <input type="text" className="form-control" placeholder="Enter email" name="email" onChange={this.onChange}/>
            //                 </div>
            //                 <div className="form-group">
            //                     <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={this.onChange} />
            //                 </div>
            //                 <button type="submit" className="btn btn-primary">Login</button>
            //             </form>
            //         </div>
            //     </div>
            //     </center>
            // </div>
        )
    }
}

export default Login;