import React , { Component } from 'react'
import { Modal, Form, Button} from 'react-bootstrap'

import { connect } from 'react-redux';
import { updateCategory } from '../redux/action/category';

class EditCategory extends Component{
    state = {
        name: ''
    }

    onChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const id_category = this.props.category.id_category;
        console.log(this.props.category.id_category)
        this.props.dispatch(updateCategory(id_category, this.state));
        this.props.onHide()
    }

    render(){
        // console.log(this.props)
        const { show, onHide } = this.props;
        return(
            <Modal show={show} onHide={onHide} variant="lg">
                <Form onSubmit={this.onSubmit}>
                <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" onChange={this.onChange} />
                </Form.Group>
                <Button variant="primary" size="sm" type="submit" onClick={this.onHide}>Save</Button>
                </Form>
            </Modal>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        categorys: state.categorys.categorys,
    }
}

export default connect(mapStateToProps)(EditCategory);