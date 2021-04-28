import axios from "axios";
import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from "./types";

//Get logs from server
export const getLogs = () => async (dispatch) => {
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
      payload: err.response.data,
    });
  }
};

//Add logs from server
export const addLog = (log) => async (dispatch) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  try {
    setLoading();

    const res = await axios.post("/logs", log, config);
    // await axios.post("/logs", log, config);
    dispatch({
      type: ADD_LOG,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

//Sets loading -> true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
