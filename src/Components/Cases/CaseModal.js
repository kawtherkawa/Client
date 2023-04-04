
import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CaseModal = ({show,handleClose}) => {

  return (
    <div>
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>اضافة قضية جديدة </Modal.Title>
        </Modal.Header>
        <Modal.Body>

       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
     
  <input type="text" id="form1" className="form-control" placeholder=" أدخل عدد القضية المرسمة بالمحكمة" />
 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">

      <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"
      
      placeholder=" الموضوع"></textarea>
                           
                            </Form.Group>
    

      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label></Form.Label>
          <Form.Control name="casesDate" type="text" placeholder="تاريخ القضية" />
        </Form.Group>
        <Form.Select aria-label="حالتها" className="mb-3">
          <option>حالتها</option>
          <option value="1">سارية </option>
          <option value="2">منتهاة</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          
          <Form.Control type="text" placeholder="اسم المنوب" />
        </Form.Group>
        <Form.Select aria-label="المحكمة" className="mb-3" >
          <option>اختر المحكمة</option>
          <option value="1">المحكمة الابتدائية</option>
          <option value="2">محكمة الاستناف </option>
          <option value="3">محكمة التعقيب</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          
          <Form.Control type="text" placeholder= "تاريخ نشر القضية"  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          
          <Form.Control type="text" placeholder="الحكم " />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
         
          <Form.Control type="text" placeholder="اسم و لقب الخصم " />
        </Form.Group>
     
      
    </Form>

        </Modal.Body>
       
       
       
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            اغلق 
          </Button>
          <Button variant="primary" onClick={handleClose}>
           حفظ
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default CaseModal