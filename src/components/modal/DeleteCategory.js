import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { deleteCategory } from '../redux/action/category'

const DeleteCategory = (props) => {
  const { categorys, show, onHide, dispatch } = props
  const onCancelHandle = (e) => {
    e.preventDefault()
    onHide()
  }
  const onDeleteHandle = (e) => {
    dispatch(deleteCategory(categorys.id_category))
    onHide()
  }
  return (
    <Modal show={show} onHide={onHide} variant='lg'>
      <Modal.Header>
        <p>Are You Sure ?</p>
      </Modal.Header>
      <Modal.Body>
        <Button variant='primary' size='sm' onClick={onCancelHandle} style={{ marginRight: '10px' }}>Cancel</Button>
        <Button variant='danger' size='sm' onClick={onDeleteHandle}>Delete</Button>
      </Modal.Body>
    </Modal>
  )
}
export default connect()(DeleteCategory)
