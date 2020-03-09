import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { createUser } from '../redux/action/user';

class AddUser extends Component{
    state = {
        name: '',
        email: '',
        status: '',
        password: ''
    }
    
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        // let data = new FormData();
        // // data.append("id_user", this.state.id_user);
        // data.append("name", this.state.name);
        // data.append("email", this.state.email);
        // data.append("status", this.state.status);
        // data.append("password", this.state.password);

        this.props.dispatch(createUser(this.state))
        // console.log(this.props.dispatch(createUser(data)))
        // console.log("jekwjekw")
        this.props.onHide()
        // this.props.onHandleClose()
        // await this.props.dispatch(createProduct(this.state));
        // await this.props.onHide();
    }
    render(){
        const { show, onHide } = this.props;
        return(
            <Modal show={show} onHide={onHide} variant="lg">
                <Modal.Header>
                    <p>Add User</p>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" onChange={this.onChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" onChange={this.onChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Status</Form.Label>
                            <Form.Control type="text" name="status" onChange={this.onChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Passowrd</Form.Label>
                            <Form.Control type="password" name="password" onChange={this.onChange} />
                        </Form.Group>
                        <Button variant="primary" size="sm" type="submit" onClick={this.onHide}>Save</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log(state)
    return{
        users : state.users.users
        // categorys: state.categorys.categorys,
        // cart: state.cart.cart
    }
}

export default connect(mapStateToProps)(AddUser);