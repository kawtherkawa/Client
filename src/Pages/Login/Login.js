import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdb-react-ui-kit'
import React ,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {NavLink, useNavigate} from 'react-router-dom'
import {login} from '../../JS/Actions/user'
import photologo from '../../img/loginlogo.jpg'
//import {Form,Button} from 'react-bootstrap'
import './login.css'
import { Button } from 'react-bootstrap'

const Login = () => {
  const [user,setUser]=useState({})
  const dispatch=useDispatch()
  const navigate=useNavigate()
    const handleChange=(e)=>{
      setUser({...user,[e.target.name]:e.target.value})
    }
    
    const handleUser=(e)=>{
      e.preventDefault();
      dispatch(login(user,navigate))
    }
  return (
    <div>
    <MDBContainer className="my-5 gradient-form">

<MDBRow>

  <MDBCol col='6' className="mb-5">
    <div className="d-flex flex-column ms-5">
      <div  className="text-center">
      <NavLink  to={'/'}>
        <img src={photologo}
          style={{width: '185px'}} alt="logo" />
      </NavLink>
        <h4 className="mt-1 mb-5 pb-1">We are The Lawer Team</h4>
        </div>
      <p>Please login to your account</p>


      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={handleChange}  name='email'/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={handleChange}  name='password'/>


      <div className="text-center pt-1 mb-5 pb-1">
        <Button className="mb-4 w-100"  style={{backgroundColor:"#BF9E58" , border : "none"}} onClick={handleUser}>Sign in</Button>
     
      </div>

    

    </div>

  </MDBCol>

  <MDBCol col='6' className="mb-5">
    <div className="d-flex flex-column  justify-content-center  h-100 mb-4" style={{backgroundColor:"#BF9E58" ,}}>

      <div className="text-white px-3 py-4 p-md-5 mx-md-4">
        <h4 class="mb-4">WELCOME TO OUR ATTORNEY</h4>
        <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

    </div>

  </MDBCol>

</MDBRow>

</MDBContainer>
    </div>
  )
}

export default Login


{/* <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
<p className="mb-0">Don't have an account?</p>
<MDBBtn outline className='mx-2' color='danger'>
  Danger
</MDBBtn>
</div> */}