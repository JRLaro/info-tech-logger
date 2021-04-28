import { GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECHS_ERROR } from './types';
import axios from 'axios'

//Get Techs

export const getTechs = () => async (dispatch) => {
    try {
      setLoading();
  
      const res = await axios.get("/techs");
      dispatch({
        type: GET_TECHS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText
      });
    }
};
  
//Sets loading -> true
export const setLoading = () => {
    return {
      type: SET_LOADING,
    };
  };