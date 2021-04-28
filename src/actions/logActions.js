import axios from "axios";
import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
} from "./types";

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

//Update log
export const updateLog = (log) => async (dispatch) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  try {
    setLoading();

    const res = await axios.put(`/logs/${log.id}`, log, config);
    dispatch({ type: UPDATE_LOG, payload: res.data });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

//Delete log
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    await axios.delete(`/logs/${id}`);
    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

//Set current log
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

//Clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

//Sets loading -> true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
