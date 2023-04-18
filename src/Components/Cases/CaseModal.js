import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCases } from "../../JS/Actions/casee";
const CaseModal = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newCases, setNewCase] = useState({});
  const loading=useSelector((state)=>state.caseReducer.load)
  const handelChange = (e) => {
    setNewCase({...newCases, [e.target.name]: e.target.value });
  };
  const handelAdd = () => {
    dispatch(addCases({newCases,handleClose}));
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>اضافة قضية جديدة </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicNumero">
              <input
                type="text"
                id="form1"
                className="form-control"
                placeholder=" أدخل عدد القضية المرسمة بالمحكمة"
                onChange={handelChange}
                name="casesNumber"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSujet">
              <textarea
                type="text"
                id="message"
                name="casesSubject"
                rows="2"
                class="form-control md-textarea"
                placeholder=" الموضوع"
                onChange={handelChange} 
              ></textarea>
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label></Form.Label>
              <Form.Control
                name="casesDate"
                type="text"
                placeholder="تاريخ القضية"
                onChange={handelChange}
              
              />
            </Form.Group>
            <Form.Select aria-label="حالتها" className="mb-3"  onChange={handelChange} name="casesEtat" >
              <option>حالتها</option>
              <option value="سارية">سارية </option>
              <option value="منتهاة">منتهاة</option>
            </Form.Select>
            <Form.Group className="mb-3" >
              <Form.Control type="text" placeholder="اسم المنوب"  onChange={handelChange} name="casesClient" />
            </Form.Group>
            <Form.Select aria-label="المحكمة" className="mb-3" onChange={handelChange} name="casesTribunal">
              <option>اختر المحكمة</option>
              <option value="1">المحكمة الابتدائية</option>
              <option value="2">محكمة الاستناف </option>
              <option value="3">محكمة التعقيب</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Control type="text" placeholder="تاريخ نشر القضية"  onChange={handelChange}  name='casesDatePublication'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDecision">
              <Form.Control type="text" placeholder="الحكم "  onChange={handelChange} name='casesDecision'/>
            </Form.Group> 
            <Form.Group className="mb-3" controlId="formBasicKhassim">
              <Form.Control type="text" placeholder="اسم و لقب الخصم "  onChange={handelChange} name='casesKhassim' />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            اغلق
          </Button>
          <Button variant="primary" disabled={loading} type="submit" onClick={handelAdd}>
            حفظ
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CaseModal;
