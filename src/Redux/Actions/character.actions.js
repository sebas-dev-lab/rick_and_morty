import Api from "../../config/Api";
import * as actionTypes from "./actionTypes";

let api = new Api();

export const getCharacterList = (content, pagination) => async (dispatch) => {
  let data = await api.fetch(content);
  if (data.error) {
    dispatch({
      type: actionTypes.ERROR_CHARACTER,
      message: data.message,
    });
  } else {
    if (!pagination) {
      dispatch({
        type: actionTypes.CLEAN_CHARACTER_LIST,
      });
    }
    dispatch({
      type: actionTypes.GET_CHARACTER_LIST,
      list: data.results,
      info: data.info,
    });
  }
};

export const getCharacterListFilter =
  (content, pagination) => async (dispatch) => {
    let data = await api.fetch(content);
    if (data.error) {
      dispatch({
        type: actionTypes.ERROR_CHARACTER_SEARCH_FILTER_LIST,
        message: data.message,
      });
    } else {
      if (!pagination) {
        dispatch({
          type: actionTypes.CLEAN_CHARACTER_LIST,
        });
      }
      dispatch({
        type: actionTypes.GET_CHARACTER_SEARCH_FILTER_LIST,
        searchList: data.results,
        inforSearchList: data.info,
      });
    }
  };
