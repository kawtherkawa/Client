import React,{ useState } from 'react'
import TopBar from "../../Components/topbar/TopBar"
import RegisterTable from "../../Components/registerTable/RegisterTable"
import Container from 'react-bootstrap/Container';
import RegisterForm from '../../Components/registerTable/RegisterForm';
const Register = () => {


  return (
    <div>
      
        <section className='vh-100' style={{backgroundColor: "#eee;"}}>
         <TopBar/>
       <Container  fluid className='d-flex justify-content-between mt-5' > <RegisterForm/>
<RegisterTable/></Container>  

</section>
    </div>
  )
}

export default Register