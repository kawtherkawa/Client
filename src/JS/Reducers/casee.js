import { ADD_CASES, FAIL_CASES, GET_CASEE, GET_CASES, LOAD_CASES } from "../ActionsTypes/casee"





//initialeState
const initialeState={
    listCases:[],
    caseToGet:{},
    newCases:{},
    errors:null,
    load:false,
    etat:false

}
//pure function

const caseReducer=(state=initialeState,{type,payload})=>{
    switch(type){
        case LOAD_CASES:
        return{...state,load:true}
        case GET_CASES:
            return{...state,load:false,listCases:payload}//listcases meme nom que celui en back
         case GET_CASEE:
         return{...state,load:false, caseToGet:payload.caseToGet}//casetToGet meme nom que celui en back
         case ADD_CASES:
            return {...state, load : false , newCases: payload.newCases} 
         
         case FAIL_CASES:
            return{...state,load:false,errors:payload }
            default :
            return state

    }
}
export default caseReducer
