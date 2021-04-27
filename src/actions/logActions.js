import axios from "axios";
import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";


// export const getLogs = () => {
//   return async (dispatch) => {
//     setLoading();

//     const res = await fetch("/logs");
//     const data = await res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data,
//     });
//   };
// };
export const getLogs = () => async dispatch => {
    try {
        setLoading();
    
        const res = await axios.get("/logs");
        dispatch({
          type: GET_LOGS,
          payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
        payload: err.response.data})
    }
  };

//Sets loading -> true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
