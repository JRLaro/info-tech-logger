import { GET_TECHS, ADD_TECH, SET_LOADING, TECHS_ERROR, DELETE_TECH } from './types';
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

// Add Tech

export const addTech = (tech) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      setLoading();
  
      const res = await axios.post("/techs", tech, config);
  
      dispatch({
        type: ADD_TECH,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
  
  //Delete Tech
  export const deleteTech = (id) => async (dispatch) => {
    try {
      setLoading();
  
      await axios.delete(`/techs/${id}`);
      dispatch({
        type: DELETE_TECH,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
//Sets loading -> true
export const setLoading = () => {
    return {
      type: SET_LOADING,
    };
  };