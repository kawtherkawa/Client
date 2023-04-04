// importation 

import { FAIL_USER, LOAD_USER,REGISTER_USER,LOGIN_USER,CURRENT_USER,LOGOUT_USER, EDIT_USER, GET_USER, GET_USERS } from "../ActionsTypes/user"


//initialeState
const initialeState={
    user:null,
    load:false,
    isAuth:false,
    errors:null,
    newUser:null,
    userToGet : {} ,
    listusers:[],
   

}
//pure function

const userReducer=(state=initialeState,{type,payload})=>{
    switch(type){
        case LOAD_USER:
        return{...state,load:true}

        case REGISTER_USER:
            localStorage.setItem("token",payload.token)
            return{...state,load:false,newUser:payload.newUser,isAuth:true}

            case LOGIN_USER:
            localStorage.setItem("token",payload.token)
            return{...state, load:false, user:payload.user ,isAuth:true}

            case CURRENT_USER:
        return{...state, user:payload,isAuth:true}

        case GET_USERS:
            return {...state,load:false,listusers:payload}
        case EDIT_USER:    
        return {...state , load : false , user : payload.user, isAuth : true }   
   
    case GET_USER:
        return {...state , userToGet :payload , load:false}


        case LOGOUT_USER:
            localStorage.removeItem("token")
            return{
                 user:null,
                load:false,
                isAuth:false,
                errors:null,
                newUser:null,
                userToGet : {} ,
                listusers:[],
   
            }
         case FAIL_USER:
            return{...state, load:false , errors:payload }
            default :
            return state

    }
}
export default userReducer