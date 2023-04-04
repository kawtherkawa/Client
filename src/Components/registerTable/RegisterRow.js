import React from 'react'
import {BsFillTrashFill,BsPencilFill,BsEyeSlashFill} from "react-icons/bs"
const RegisterRow = ({user}) => {
  return (
    
      <tr>
    
      <td>{user.name}</td>
      <td>{user.email}</td>
    <td>{user.phone}</td>
      <td>{user.position}</td>
      
      <td> <button type="button" class="btn btn-link btn-sm btn-rounded">Edit  </button>
      <BsEyeSlashFill/>
      <BsFillTrashFill/> 
       </td>
   
      </tr>
  
  
  )
}

export default RegisterRow