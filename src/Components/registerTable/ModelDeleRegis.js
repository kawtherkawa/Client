import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { deleteUser } from '../../JS/Actions/user';
const ModelDeleRegis = ({id,show,handleClose}) => {

    const dispatch = useDispatch();

  return (
    <div>
         <Modal show={show} onHide={handleClose} >
        
        <Modal.Body>هل متاكد من فسخ هذه المعلومات</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            أغلق
          </Button>
          <Button variant="primary" onClick={()=>dispatch(deleteUser(id,handleClose))}>
        فسخ
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModelDeleRegis