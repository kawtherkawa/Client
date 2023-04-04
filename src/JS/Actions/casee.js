import axios from "axios";
import { ADD_CASES, FAIL_CASES, GET_CASEE, GET_CASES, LOAD_CASES } from "../ActionsTypes/casee";


export const getCases = () => async (dispatch) => {
  dispatch({ type: LOAD_CASES });
  try {
    let result = await axios.get("http://localhost:7801/api/cases/allCases");
    dispatch({ type: GET_CASES, payload: result.data.listCases });
  } catch (error) {
    dispatch({ type: FAIL_CASES, payload: error.response });
  }
};

export const addCases = (newCases) => async (dispatch) => {
  dispatch({ type: LOAD_CASES });
  try {
    let result =  await axios.post("/api/cases/addCases", newCases);
    dispatch (  { type : ADD_CASES, payload : result.data})
  } catch (error) {
    dispatch({ type: FAIL_CASES, payload: error.response });
  }
};
export const deleteCases=(id)=>async(dispatch)=>{
  dispatch({ type: LOAD_CASES });
  try{
   await axios.delete(`/api/cases/${id}`)
   dispatch(getCases())
  }catch(error){
    dispatch({ type: FAIL_CASES, payload: error.response }); 
  }
}
 export const editCases=(id,newCases)=>async(dispatch)=>{
  dispatch({ type: LOAD_CASES });
  try{
    await axios.put(`/api/cases/${id}`,newCases)
    dispatch(getCases())
  }catch(error){
    dispatch({ type: FAIL_CASES, payload: error.response }); 
  }
  
 }
 export const getCasee=(_id)=>async(dispatch)=>{
  dispatch({ type: LOAD_CASES });
  try {
    let result = await axios.get(`http://localhost:7801/api/cases/getOneCase/${_id}`);
    dispatch({ type: GET_CASEE, payload: result.data });
    dispatch(getCases())
  }catch(error){
    dispatch({ type: FAIL_CASES, payload: error.response }); 
  }
  
 }