import React ,{useEffect} from 'react'
import { useSelector,useDispatch, } from 'react-redux';
import { getUsers } from '../../JS/Actions/user';
import RegisterRow from "./RegisterRow"
import Table from 'react-bootstrap/Table'
const RegisterTable = () => {

  const dispatch=useDispatch();
  const Users=useSelector(state=>state.userReducer.listusers);
  const Load=useSelector(state=>state.userReducer.load)
  console.log (Users)


  useEffect(()=>{
    dispatch(getUsers());
    },[dispatch]);
    
  return (
    <div>


<Table responsive="sm"  size='sm' id="dtBasicExample" className="table table-striped table-bordered" cellspacing="0" width="100%"    >
  <thead class="bg-light">
  <tr>
      <th>Name</th>
      <th>Email</th>
     <th>Phone</th> 
      <th>Position</th>
      <th>Actions</th>
      
    </tr>
      </thead>
      <tbody>
      {Users?.map((user , index) => <RegisterRow key={index} user={user} />)}
      </tbody>
      </Table>
    </div>
  )
}

export default RegisterTable