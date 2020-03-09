import React, { Component } from 'react';
import {Navbar,Table,FormControl, Form} from 'react-bootstrap';

import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { getUsers, createUser } from '../redux/action/user';
import AddUser from '../modal/AddUser';

class User extends Component{
    state = {
        show: false
    }
    onSubmit = (e) => {
        console.log(this.props.dispatch(createUser(this.state)))
        e.preventDefault();
        this.props.dispatch(createUser(this.state));
    }
    onChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    getUsers(){
        this.props.dispatch(getUsers());
    }   
    
    componentDidMount(){
        this.getUsers();
    }
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
    render(){
        const { users } = this.props;
        return(
            <div className="wrap" style={{backgroundColor:'#EFF3F3', width:'100%', height:'100vh', position:'absolute'}}>
                <div className="container" style={{marginTop:'10vh'}}>
                <Link to="/"><button className="btn btn-secondary" style={{marginBottom:'10px'}}>Back</button></Link>
                    <Navbar bg="light" expand="lg">
                            <td><button type="submit" class="btn btn-primary" onClick={this.handleShow}>Add User</button></td>
                    </Navbar>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th><center>Id</center></th>
                                <th><center>User</center></th>
                                <th><center>Status</center></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user,index)=>
                                <tr>
                                    <td key={index}><center>{user.id_user}</center></td>
                                    {console.log(user.id_user)}
                                    <td><center>{user.name}</center></td>
                                    <td><center>{user.status}</center></td>
                                </tr>   
                            )}
                        </tbody>

                    </Table>
                </div>
                <AddUser show={this.state.show} onHide={this.handleClose} />
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