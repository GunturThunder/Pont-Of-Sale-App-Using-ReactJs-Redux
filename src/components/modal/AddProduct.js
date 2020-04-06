import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { createProduct } from '../redux/action/product';

class ProductAdd extends Component{
    state = {
        id_category: 0,
        name: '',
        price: 0,
        stock: 0,
        description: '',
        image: ''
    }
    onChangeImageHandler = (event)=>{
        this.setState({
            image: event.target.files[0]
        })
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        let data = new FormData();
        data.append("id_category", this.state.id_category);
        data.append("name", this.state.name);
        data.append("price", this.state.price);
        data.append("stock", this.state.stock);
        data.append("description", this.state.description);
        data.append("image", this.state.image);
        this.props.dispatch(createProduct(data))
        this.props.onHide()
    }
    render(){
        const { show, onHide, categorys } = this.props;
        return(
            <Modal show={show} onHide={onHide} variant="lg">
                <Modal.Header>
                    <p>Add Product</p>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.onSubmit}>
                    <Form.Group>
                    <Form.Label>Category</Form.Label>
                        <select id="inputState" class="form-control" name="id_category" onChange={this.onChange}>
                            <option disabled>Choose...</option>
                            {categorys.map((category,index)=>
                                <option key={index} value={category.id_category}>{category.name}</option>
                            )}
                        </select>
                    </Form.Group>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" onChange={this.onChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" name="price" onChange={this.onChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type="number" name="stock" onChange={this.onChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" name="description" onChange={this.onChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" name="image" onChange={this.onChangeImageHandler} />
                        </Form.Group>
                        <Button variant="primary" size="sm" type="submit" onClick={this.onHide}>Save</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        categorys: state.categorys.categorys,
    }
}
export default connect(mapStateToProps)(ProductAdd);