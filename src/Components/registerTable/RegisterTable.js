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
      <th>تحيين</th>
      <th>الوظيفة</th>
     <th>الهاتف</th> 
      <th>البريد الالكتروني</th>
      <th>اسم المستخدم</th>
      
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