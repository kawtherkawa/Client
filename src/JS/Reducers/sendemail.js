//importation

import { FAIL_EMAIL, LOAD_EMAIL, SENDEMAIL } from "../ActionsTypes/sendemail"


//initialeState
const initialeState={
    newEmail:null,
    load:false,
    errors:null,
   
}


//pure function

const sendemailReducer=(state=initialeState,{type,payload})=>{
    switch(type){
        case LOAD_EMAIL:
        return{...state,load:true}

        case SENDEMAIL:
           
            return{...state,load:false,newEmail:payload.newEmail}

          
         case FAIL_EMAIL:
            return{...state, load:false , errors:payload }
            default :
            return state

    }
}
export default sendemailReducer