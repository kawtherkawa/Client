import React, { useState } from "react";
import { BsFillTrashFill, BsPencilFill, BsEyeSlashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import ModelDeleRegis from "./ModelDeleRegis";
const RegisterRow = ({ user }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <tr>


<ModelDeleRegis id={user._id} show={show} handleClose={handleClose} />
  

      <td className="d-flex flex-row">
    
        <NavLink to={`/edituser/${user._id}`} >
          <BsPencilFill />
        </NavLink>
        <NavLink to={`/listuser/${user._id}`}>
        
          <BsEyeSlashFill />
        </NavLink >
        <NavLink  onClick={handleShow}>
        
          <BsFillTrashFill />
        </NavLink>
      </td>
      <td> {user.position}</td>
      <td> {user.phone}</td>
      <td>{user.email}</td>
      <td>{user.name}</td>
    </tr>
  );
};

export default RegisterRow;
