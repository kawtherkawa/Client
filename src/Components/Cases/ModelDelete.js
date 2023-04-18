
import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { deleteCases } from '../../JS/Actions/casee';
const ModelDelete = ({id,show,handleClose }) => {

    const dispatch = useDispatch();
  return (
   
 <Modal show={show} onHide={handleClose} >
        
        <Modal.Body>هل متاكد من فسخ هذه المعلومات</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            أغلق
          </Button>
          <Button variant="primary" onClick={()=>dispatch(deleteCases(id,handleClose))}>
        فسخ
          </Button>
        </Modal.Footer>
      </Modal>


  )
}

export default ModelDelete
