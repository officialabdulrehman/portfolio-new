import {
  GlobalStateI,
  SHOW_WIP_MODAL,
  HIDE_WIP_MODAL,
  SHOW_FEATURED_MODAL,
  HIDE_FEATURED_MODAL,
} from "../reduxTypes";

export const showWIPModal = () => (dispatch: any) => {
  dispatch({
    type: SHOW_WIP_MODAL,
    payload: null
  });
};

export const hideWIPModal = () => (dispatch: any) => {
  dispatch({
    type: HIDE_WIP_MODAL,
    payload: null
  });
};

export const showFeaturedModal = () => (dispatch: any) => {
  dispatch({
    type: SHOW_FEATURED_MODAL,
    payload: null
  });
};

export const hideFeaturedModal = () => (dispatch: any) => {
  dispatch({
    type: HIDE_FEATURED_MODAL,
    payload: null
  });
};