import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import CasesTable from "../../Components/Cases/CasesTable";
import "./CasesPage.css";
import TopBar from '../../Components/topbar/TopBar'
import CaseModal from "../../Components/Cases/CaseModal";

const CasesPage = () => {
  /*<Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="ادخل عدد القضية او اسم المنوب"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button> 
          </Form>*/

       
    
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


  return (

    
    <section>
    <CaseModal show={show} handleClose={handleClose}/>
             <TopBar/>

           

      <div className="CasesForm" >
  
<Button onClick={handleShow} > اضافة قضية</Button>
   <div className="Casesdiv"> 
   <CasesTable />
   </div>
  
</div>
    </section>
  )}

export default CasesPage