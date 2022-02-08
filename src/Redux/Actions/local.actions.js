import * as actionTypes from "./actionTypes";

export const setLoading = (status) => (dispatch) =>
  dispatch({
    type: actionTypes.SET_LOADING_STATUS,
    status: status,
  });
