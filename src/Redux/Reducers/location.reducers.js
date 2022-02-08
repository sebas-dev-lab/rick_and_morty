import { SET_LOADING_STATUS } from "../Actions/actionTypes";

let initialState = {
  loading: false,
};

const localReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      };

    default:
      return state;
  }
};

export default localReducers;
