import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM
} from "./type";
import streams from "../api/streams";
import history from "../history";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = userId => {
  return {
    type: SIGN_OUT,
    payload: userId
  };
};

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const res = await streams.post("/streams", { ...formValues, userId });
  dispatch({ type: CREATE_STREAM, payload: res.data });

  // DO some programmatic navigation
  // based on the success or error
  history.push("/");
};

export const fetchStreams = () => async dispatch => {
  const res = await streams.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: res.data });
};

export const fetchStream = id => async dispatch => {
  const res = await streams.get(`streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: res.data });
};

export const deleteStream = id => async dispatch => {
  const res = await streams.delete(`streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  dispatch(fetchStreams());
  history.push("/");
};

export const editStream = (id, formValues) => async dispatch => {
  const res = await streams.patch(`streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: res.data });
  history.push("/");
};
