import { Button } from 'bootstrap'
import React from 'react'
import {BsFillTrashFill,BsPencilFill} from "react-icons/bs"
import { NavLink } from 'react-router-dom'
const CaseRow = ({casee}) => {

  return (
<tr>
  <td> <BsPencilFill/></td>
<td><NavLink to={`/case/${casee._id}`}><BsFillTrashFill/></NavLink> </td>
  <td>{casee.casesDecision}</td>
  <td>{casee.casesDatePublication}</td>
  <td>{casee.casesClient}</td>
    <td>{casee.casesDate}</td>
    <td>{casee.casesEtat}</td>
    <td>{casee.casesNumber}</td>
</tr>
  )
}

export default CaseRow;


{/* <td> <Button onClick={dispatach(deleteCase(casee._id))} > icon </Button> </td>
<td> <Button onClick={dispatach(editCase(casee._id))} > icon </Button> </td> */}