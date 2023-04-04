import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TopBar from '../../Components/topbar/TopBar'
import { getCasee } from '../../JS/Actions/casee';
import {BsFillTrashFill} from "react-icons/bs"
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';


const OneCase = () => {
  const {_id}=useParams();
  const dispatch=useDispatch();
const CaseOne=useSelector((state)=>state.caseReducer.caseToGet);
const Load=useSelector((state)=>state.caseReducer.load)
useEffect(()=>{
  dispatch(getCasee(_id));
  },[dispatch]);
  return (
    <div><TopBar/> 
    
  <form className='m-5'>
      <MDBRow className='mb-2'>
        <MDBCol>
          <MDBInput id='form6Example1' label='First name' placeholder={`${CaseOne.casesNumber}`} />
          <MDBInput id='form6Example1' label='First name' placeholder={`${CaseOne.casesClient} `} />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Last name' />
        </MDBCol>
      </MDBRow>

      <MDBInput wrapperClass='mb-2' id='form6Example3' label='Company name'  />
      <MDBInput wrapperClass='mb-2' id='form6Example4' label='Address' />
      <MDBInput wrapperClass='mb-2' type='email' id='form6Example5' label='Email' />
      <MDBInput wrapperClass='mb-2' type='tel' id='form6Example6' label='Phone' />

      <MDBInput wrapperClass='mb-2' textarea id='form6Example7' rows={4} label='Additional information' />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form6Example8'
        label='Create an account?'
        defaultChecked
      />

      <MDBBtn className='mb-4' type='submit' block>
        Place order
      </MDBBtn>
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