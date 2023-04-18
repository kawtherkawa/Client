import React, { useState } from 'react';
import './contact.css'
import holder from '../../img/contact.png'
import axios from "axios";
import {
  MDBInput,
 
 
} from 'mdb-react-ui-kit';
import { Button, Card } from 'react-bootstrap';

export default function Contact() {
  const [email,setEmail]=useState("");

  const sendEmail=async(e)=>{
    e.preventDefault()
    console.log(email)
 
  const data={
        email
          }
  const response=await axios.post("http/localhost:7801/api/sendemail",data)
  console.log(response.data)
  };
  return (
    <section  id="contact" className='Csection'>
        <form className='Cform' onSubmit={sendEmail}>
      <MDBInput id='form4Example1' wrapperClass='mb-4'   placeholder='name'/>
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' value={email}     placeholder='Email adress' onChange={(e)=>setEmail(e.target.value)} />
      <MDBInput type='number' id='form4Example2' wrapperClass='mb-4'  placeholder='Phone' />

      <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4}  placeholder='Message' />

      

      <Button type='submit' className='mb-4  Cbtn' block>
        Submit now
      </Button>
    </form>

    <Card style={{ width: '18rem' }}>
        <div className='contact-img'>                          
      <Card.Img variant="top" src={holder} /> </div>
      <Card.Body className='Ccbody'>
        <Card.Title>Moncef Habibi</Card.Title>
    <h5 > (Attorney for comment )</h5>
        <Card.Text>
        Phone : 1800 965 7845


        </Card.Text>
        <Card.Text>
    
        Email : info@legalpower.com



        </Card.Text>
       
      </Card.Body>
    </Card>
    </section>
    
  );
}