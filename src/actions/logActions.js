import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG
} from "./types";

// GET LOGS FROM SERVER
export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/logs");
    const data = await res.json();
    dispatch({ type: GET_LOGS, payload: data });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.data });
  }
};

// ADD NEW LOG
export const addLog = log => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    dispatch({ type: ADD_LOG, payload: data });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.data });
  }
};

// DELETE LOG
export const deleteLog = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/logs/${id}`, {
      method: "DELETE"
    });

    dispatch({ type: DELETE_LOG, payload: id });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.data });
  }
};

// UPDATE LOG ON SERVER
export const updateLog = log => async dispatch => {
  try {
    const res = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();

    dispatch({ type: UPDATE_LOG, payload: data });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.data });
  }
};

// SET CURRENT LOG
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};

// CLEAR CURRENT LOG
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

export const setLoading = () => {
  return { type: SET_LOADING };
};

export const logsError = () => {};
