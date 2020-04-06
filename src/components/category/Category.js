import React, { Component } from 'react';
import {Navbar,Table,FormControl, Form} from 'react-bootstrap';
import { getCategorys } from '../redux/action/category';
import category from '../redux/reducers/category';
import { connect } from 'react-redux';
import DeleteCategory from '../modal/DeleteCategory';
import { createCategory } from '../redux/action/category';
import EditCategory from '../modal/EditCategory';
import {Link} from 'react-router-dom'

class Category extends Component{
    state = {
        show : false,
        name: '',
        selectCategory: null
    }
    handleShowEdit = (e) => {
        this.setState({
        showEdit: true
        })
    }
    handleCloseEdit = () => {
        this.setState({
            showEdit: false
        })
    }
    onSelectItemCategoryEdit = (category) => {
        this.setState({
            selectCategory: category,
            showEdit: true 
        })
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(createCategory(this.state));
    }
    getCategorys(){
        this.props.dispatch(getCategorys());
    }   
    
    componentDidMount(){
        this.getCategorys();
    }

    handleShowDelete = (categorys ) => {
        this.setState({
            data : categorys,
            showDelete: true

        })
    }

    handleCloseDelete = () => {
        this.setState({
            showDelete: false
        })
    }
    render(){
        const { categorys } = this.props;
        return(
            <div className="wrap" style={{backgroundColor:'#EFF3F3', width:'100%', height:'100vh', position:'absolute'}}>
                <div className="container" style={{marginTop:'10vh'}}>
                <Link to="/"><button className="btn btn-secondary" style={{marginBottom:'10px'}}>Back</button></Link>
                    <Navbar bg="light" expand="lg">
                    <Form onSubmit={this.onSubmit}>
                        <tr>
                            <td><FormControl style={{width:'200px', marginRight:'10px'}} aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="name" onChange={this.onChange} /></td>
                            <td><button type="submit" class="btn btn-primary">Add Category</button></td>
                        </tr>
                        
                    </Form>
                    </Navbar>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th><center>Id</center></th>
                                <th><center>Category</center></th>
                                <th><center>Action</center></th>
                            </tr>
                        </thead>
                        <tbody>
                        { categorys.map((category, index) =>
                            <tr>
                                <td key={index}><center>{category.id_category}</center></td>
                                <td><center>{category.name}</center></td>
                                <td><center><button type="button" class="btn btn-warning" onClick={()=>(this.onSelectItemCategoryEdit(category))} >Edit</button> | <button type="button" class="btn btn-danger" onClick={()=>(this.handleShowDelete(category))}>Delete</button></center></td>
                            </tr>
                        )}
                        </tbody>
                        
                        <DeleteCategory show={this.state.showDelete} onHide={this.handleCloseDelete} categorys={this.state.data} />
                        <EditCategory show={this.state.showEdit} onHide={this.handleCloseEdit} category={this.state.selectCategory} />
                    </Table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        categorys: state.categorys.categorys
    }
}

export default connect(mapStateToProps)(Category);