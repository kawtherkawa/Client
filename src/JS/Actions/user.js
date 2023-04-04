import axios from 'axios' 
import {LOAD_USER,REGISTER_USER,FAIL_USER,LOGIN_USER, LOGOUT_USER,CURRENT_USER, EDIT_USER, GET_USER,GET_USERS} from '../ActionsTypes/user'
 

export const register = (newUser,navigate)=>async(dispatch)=>{

    dispatch({type:LOAD_USER})

    try{
        let result=await axios.post("/api/user/register",newUser)

           dispatch({type: REGISTER_USER , payload: result.data})
           navigate('/dashbord')
    }catch(error){
        dispatch({type: FAIL_USER , payload: error.response.errors})
    }

 }

 
 export const login = (user,navigate)=>async(dispatch)=>{

    dispatch({type:LOAD_USER})

    try{
        let result=await axios.post("/api/user/login",user)

           dispatch({type: LOGIN_USER , payload: result.data})
           navigate('/dashbord')
    }catch(error){
        dispatch({type: FAIL_USER , payload: error.response.errors})
    }

 }


 export const current = ()=>async(dispatch)=>{

    dispatch({type:LOAD_USER})

    try{
        const config={
            headers:{authorization:localStorage.getItem("token")}
        }
        let result=await axios.post("/api/user/current",config)

           dispatch({type: CURRENT_USER , payload: result.data})
    }catch(error){
        dispatch({type: FAIL_USER , payload: error.response.errors})
    }

 }



 export const logout=()=>async(dispatch)=>{
    dispatch({type: LOGOUT_USER})

    

 }
 export const edituser = (id,newUser)=> async (dispatch) =>{
    dispatch ({type : LOAD_USER})
  try {
     let result = await axios.put(`/api/user/${id}`,newUser)
      dispatch (  { type : EDIT_USER , payload : result.data})
  } catch (error) {
    dispatch ({type : FAIL_USER , payload : error.response.data.errors})
  }
}

export const getUser =(id)=> async (dispatch) =>{
    dispatch ({type : LOAD_USER})

    try {
        let result = await axios.get(`/api/user/${id}`)
        dispatch ({ type : GET_USER , payload : result.data.userToGet })
        
    } catch (error) {
        dispatch ({type : FAIL_USER , payload : error.response.data.errors})
        
    }
}

export const getUsers =(id)=> async (dispatch) =>{
    dispatch ({type : LOAD_USER})

    try {
        let result = await axios.get('/api/user/all/Users')
        dispatch ({ type : GET_USERS , payload : result.data.listusers })
        
    } catch (error) {
        dispatch ({type : FAIL_USER , payload : error.response.data.errors})
        
    }
}


