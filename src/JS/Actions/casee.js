import axios from "axios";
import { ADD_CASES, FAIL_CASES, GET_CASEE, GET_CASES, LOAD_CASES } from "../ActionsTypes/casee";


export const getCases = () => async (dispatch) => {
  dispatch({ type: LOAD_CASES });
  try {
    let result = await axios.get("/api/cases/allCases");
    dispatch({ type: GET_CASES, payload: result.data.listCases });
  } catch (error) {
    dispatch({ type: FAIL_CASES, payload: error.response });
  }
};

export const addCases = ({newCases,handleClose}) => async (dispatch) => {
  dispatch({ type: LOAD_CASES });
  try {
    let result =  await axios.post("/api/cases/addCases", newCases);
    dispatch (  { type : ADD_CASES, payload : result.data})
    dispatch(getCases())
    handleClose()
  } catch (error) {
    dispatch({ type: FAIL_CASES, payload: error.response });
  }
};
export const deleteCases=(id,handleClose)=>async(dispatch)=>{
  dispatch({ type: LOAD_CASES });
  try{
   await axios.delete(`/api/cases/${id}`)
   dispatch(getCases())

   handleClose()
  }catch(error){
    dispatch({ type: FAIL_CASES, payload: error.response }); 
  }
}
 export const editCases=(_id,newCases,navigate)=>async(dispatch)=>{
  dispatch({ type: LOAD_CASES });
  try{
    await axios.put(`http://localhost:7801/api/cases/${_id}`,newCases)
    dispatch(getCases())
    navigate('/cases')
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