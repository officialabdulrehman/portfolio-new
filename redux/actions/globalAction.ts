// NOTE: Actions are not being used. I am using useDispatch() hook instead. Might use these if need be.

import {
  GlobalStateI,
  SHOW_WIP_MODAL,
  HIDE_WIP_MODAL,
  SHOW_FEATURED_MODAL,
  HIDE_FEATURED_MODAL,
  SHOW_PROJECT_MODAL,
  HIDE_PROJECT_MODAL,
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

export const showProjectModal = () => (dispatch: any) => {
  dispatch({
    type: SHOW_PROJECT_MODAL,
    payload: null
  });
};

export const hideProjectModal = () => (dispatch: any) => {
  dispatch({
    type: HIDE_PROJECT_MODAL,
    payload: null
  });
};