import axios from "axios"
import { FAIL_EMAIL, LOAD_EMAIL, SENDEMAIL } from "../ActionsTypes/sendemail"




export const sendemail = (newEmail)=>async(dispatch)=>{

    dispatch({type:LOAD_EMAIL})

    try{
        let result=await axios.post("/api/sendemail",newEmail)

           dispatch({type: SENDEMAIL , payload: result.data})
           
    }catch(error){
        dispatch({type: FAIL_EMAIL , payload: error.response.errors})
    }

 }
