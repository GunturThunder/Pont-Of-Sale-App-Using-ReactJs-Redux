import React, { Component } from 'react';
import {Navbar,Table,FormControl, Form} from 'react-bootstrap';

import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { getUsers, createUser } from '../redux/action/user';

class User extends Component{
    getUsers(){
        this.props.dispatch(getUsers());
    }   
    
    componentDidMount(){
        this.getUsers();
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(createUser(this.state));
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        const { users } = this.props;
        return(
            <div className="wrap" style={{backgroundColor:'#EFF3F3', width:'100%', height:'100vh', position:'absolute'}}>
                <div className="container" style={{marginTop:'10vh'}}>
                <Link to="/"><button className="btn btn-secondary" style={{marginBottom:'10px'}}>Back</button></Link>
                    <Navbar bg="light" expand="lg">
                    <Form onSubmit={this.onSubmit}>
                        <tr>
                            <td><FormControl style={{width:'200px', marginRight:'10px'}} aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="name" onChange={this.onChange} /></td>
                            <td><button type="submit" class="btn btn-primary">Add User</button></td>
                        </tr>
                        
                    </Form >
                    </Navbar>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th><center>Id</center></th>
                                <th><center>User</center></th>
                                <th><center>Status</center></th>
                                <th><center>Action</center></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user,index)=>
                                <tr>
                                    <td key={index}><center>{user.id_user}</center></td>
                                    <td><center>{user.name}</center></td>
                                    <td><center>{user.status}</center></td>
                                    <td><center><button type="button" class="btn btn-warning">Edit</button> | <button type="button" class="btn btn-danger">Delete</button></center></td>
                                </tr>   
                            )}
                        </tbody>

                    </Table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log(state.users)
    // console.log(state.users)
    //console.log(state)
    return{
        users: state.users.users
    }
}

export default connect(mapStateToProps)(User);