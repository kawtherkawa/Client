import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import TopBar from '../../Components/topbar/TopBar'
//import TopBar from '../Components/topbar/TopBar'
const Dashbord = () => {

  /*  {isAuth? <TopBar/>: navigate('/login')}*/ 
  const isAuth = useSelector((state) => state.userReducer.isAuth)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  return (
    <div>
  <TopBar/>
     
    </div>
  )
}

export default Dashbord



