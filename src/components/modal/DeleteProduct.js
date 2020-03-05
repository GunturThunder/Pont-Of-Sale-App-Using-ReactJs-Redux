import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { deleteProduct } from '../redux/action/product';

const DeleteProduct = (props) => {
    const {products, show, onHide, dispatch} = props;

    const onCancelHandle = (e) => {
        e.preventDefault();
        onHide();
    }

    const onDeleteHandle = (e) => {
        // e.preventDefault();

       dispatch(deleteProduct(products.id_product));
    //    console.log(product.id_product)
       onHide();
    }

    // const onDeleteHandle = (id_product) => {
    //     this.props.dispatch(deleteProduct(id_product))

    //     // console.log(productId)
    // }

    return(

        <Modal show={show} onHide={onHide} variant="lg">
            <Modal.Header>
                <p>Are You Sure ?</p>
            </Modal.Header>
            <Modal.Body>
                <Button variant="primary" size="sm" onClick={onCancelHandle} style={{ marginRight: "10px" }}>Cancel</Button>
                <Button variant="danger" size="sm" onClick={onDeleteHandle}>Delete</Button>
            </Modal.Body>
        </Modal>
    )
}

export default connect()(DeleteProduct); 