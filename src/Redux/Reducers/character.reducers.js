import {
  GET_CHARACTER_LIST,
  GET_CHARACTER,
  ERROR_CHARACTER,
  GET_CHARACTER_SEARCH_FILTER_LIST,
  ERROR_CHARACTER_SEARCH_FILTER_LIST,
  CLEAN_CHARACTER_LIST,
} from "../Actions/actionTypes";

let initialState = {
  info: {},
  list: [],
  searchList: [],
  inforSearchList: {},
  character: {},
  messege: "",
  error: false,
};

const characterReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTER_LIST:
      return {
        ...state,
        list: state.list.concat(action.list),
        info: action.info,
        searchList: [],
        inforSearchList: {},
        error: false,
      };
    case CLEAN_CHARACTER_LIST:
      return {
        ...state,
        info: {},
        list: [],
        searchList: [],
        inforSearchList: {},
        character: {},
      };
    case GET_CHARACTER:
      return {
        ...state,
        character: action.character,
        error: false,
        list: [],
        info: {},
      };
    case ERROR_CHARACTER:
      return {
        ...state,
        message: action.messege,
        error: true,
        list: [],
        info: {},
        searchList: [],
        inforSearchList: {},
      };
    case GET_CHARACTER_SEARCH_FILTER_LIST:
      return {
        ...state,
        searchList: state.searchList.concat(action.searchList),
        inforSearchList: action.inforSearchList,
        error: false,
      };
    case ERROR_CHARACTER_SEARCH_FILTER_LIST:
      return {
        ...state,
        message: action.message,
        error: true,
        list: [],
        info: {},
        searchList: [],
        inforSearchList: {},
      };
    default:
      return state;
  }
};

export default characterReducers;
