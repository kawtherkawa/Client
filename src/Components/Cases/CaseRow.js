import React, { useState } from "react";
import {
  BsFillEyeSlashFill,
  BsFillTrashFill,
  BsPencilFill,
} from "react-icons/bs";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteCases } from "../../JS/Actions/casee";
import { Button } from "react-bootstrap";
import ModelDelete from "./ModelDelete";

/*mport ModelDelete from "./ModelDelete";*/
const CaseRow = ({ casee }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  /**   <NavLink onClick={dispatch(deleteCases(casee._id))}>
          <BsFillTrashFill  />
        </NavLink> */
  /**  <div>
        <ModelDelete  show={show} handleClose={handleClose} />
        <Button onClick={handleShow} >
          <BsFillTrashFill  />
        </Button>
        </div> */
  return (
    <tr>
      <ModelDelete id={casee._id} show={show} handleClose={handleClose} />
      <td className="d-flex flex-row">
        <NavLink to={`/case/${casee._id}`}>
          <BsPencilFill />
        </NavLink>
        <div>
          <NavLink onClick={handleShow}>
            <BsFillTrashFill />
          </NavLink>
        </div>
        <NavLink to={`/listcase/${casee._id}`}>
          <BsFillEyeSlashFill />
        </NavLink>
      </td>
      <td>{casee.casesDecision}</td>
      <td>{casee.casesDatePublication}</td>
      <td>{casee.casesClient}</td>
      <td>{casee.casesDate}</td>
      <td>{casee.casesEtat}</td>
      <td>{casee.casesNumber}</td>
    </tr>
  );
};

export default CaseRow;

{
  /* <td> <Button onClick={dispatach(deleteCase(casee._id))} > icon </Button> </td>
<td> <Button onClick={dispatach(editCase(casee._id))} > icon </Button> </td> */
}
/**  <Button onClick={()=>dispatch(deleteCases(casee._id))}>
          <BsFillTrashFill  />
        </Button>*/
