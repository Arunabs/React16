import jsonPlaceholder from "../api/jsonPlaceholder";
import _ from "lodash";

export const fetchPosts = () => async dispatch => {
  const res = await jsonPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: res.data
  });
};
/*
// without memoization
export const fetchUser = id => async dispatch => {
  const res = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: res.data
  });
};
*/

/**
 * with memoization
 * to make service call only once for the particular user id.
 *
 */
//Memoization start
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const res = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: res.data
  });
});

// memoization ends
