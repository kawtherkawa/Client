import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate, useParams } from 'react-router-dom';
import TopBar from '../../Components/topbar/TopBar'
import { getCasee } from '../../JS/Actions/casee';

import {
  MDBRow,
  MDBCol,
  MDBInput,
  
  
} from 'mdb-react-ui-kit';
import { editCases } from '../../JS/Actions/casee';
import { Button } from 'react-bootstrap';


const OneCase = () => {
  const {_id}=useParams();
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const [newCase,setNewCase]=useState({})
  const match=useMatch('/case/:id')
const CaseOne=useSelector((state)=>state.caseReducer.caseToGet);
const Load=useSelector((state)=>state.caseReducer.load)
useEffect(()=>{
  dispatch(getCasee(_id));
  },[dispatch]);

  const handelChange=(e)=>{
    setNewCase({...newCase,[e.target.name]:e.target.value})
  }
 
  useEffect(()=>{
    dispatch(getCasee(_id))
  })
  const handelEdit=()=>{
    dispatch(editCases(_id, newCase, navigate))
   
  }
  return (
    <div><TopBar/>
    
  <form className='m-5'>
      <MDBRow className='mb-2'>
        <MDBCol>
              
          <MDBInput id='form6Example1' label='عدد القضية المرسمة بالمحكمة'  placeholder={`${CaseOne.casesNumber}`} onChange={handelChange} name='casesNumber'/>
          <MDBInput id='form6Example1' label='اسم و لقب المنوب' placeholder={`${CaseOne.casesClient}`} onChange={handelChange} name='casesClient' />
        </MDBCol>
        <MDBCol>
          <MDBInput  textarea id='form6Example2' rows={5} label='موضوع'  placeholder={`${CaseOne.casesSubject}`}  onChange={handelChange} name="casesSubject"/>
        </MDBCol>
      </MDBRow>

      <MDBInput wrapperClass='mb-2' id='form6Example3' label='تاريخ القضية'  placeholder={`${CaseOne.casesDate}`}  onChange={handelChange} name="ccasesDate" />
      <MDBInput wrapperClass='mb-2' id='form6Example4' label='المحكمة'  placeholder={`${CaseOne.casesTribunal}`}  name='casesTribunal' />
      <MDBInput wrapperClass='mb-2'  id='form6Example5' label='حالتها' placeholder={`${CaseOne.casesEtat}`} onChange={handelChange} name="casesEtat" />
      <MDBInput wrapperClass='mb-2' type='text' id='form6Example6' label="تاريخ نشر القضية"  placeholder={`${CaseOne.casesDatePublication}`} onChange={handelChange}  name='casesDatePublication'/>

      <MDBInput wrapperClass='mb-2'  label='الحكم' placeholder={`${CaseOne.casesDecision}`} onChange={handelChange}  name='casesDecision' />

      <MDBInput wrapperClass='mb-2' type='text' id='form6Example6' label="اسم ولقب الخصم"  placeholder={`${CaseOne.casesKhassim}`} onChange={handelChange}  name='casesKhassim'/>
     
      <Button className='mb-4'  onClick={handelEdit}>
        تحيين
      </Button>
    </form>

  
  </div>
  )
}

export default OneCase
/*<tr>
  
<td><BsFillTrashFill/> </td>
  <td>{CaseOne.casesDecision}</td>
  <td>{CaseOne.casesDatePublication}</td>
  <td>{CaseOne.casesClient}</td>
    <td>{CaseOne.casesDate}</td>
    <td>{CaseOne.casesEtat}</td>
    <td>{CaseOne.casesNumber}</td>
</tr>  
casesNumber,casesSubjet,casesEtat,casesDate,casesClient,casesTribunal,casesDatePublication,casesDecision,
casesKhassim*/