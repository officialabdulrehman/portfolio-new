import {
  GlobalStateI,
  SHOW_WIP_MODAL,
  HIDE_WIP_MODAL,
  SHOW_FEATURED_MODAL,
  HIDE_FEATURED_MODAL,
} from "../reduxTypes";
import { updateObject } from "../../util/common";

const initialState: GlobalStateI = {
  wipModal: false,
  featuredModal: false,
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_WIP_MODAL: return showWIPModal(state, action)
    case HIDE_WIP_MODAL: return hideWIPModal(state, action)
    case SHOW_FEATURED_MODAL: return showFeaturedModal(state, action)
    case HIDE_FEATURED_MODAL: return hideFeaturedModal(state, action)

    default: return state
  }
}

export default reducer

const showWIPModal = (state: GlobalStateI, action: any): GlobalStateI => {
  return updateObject(state, { wipModal: true })
}

const hideWIPModal = (state: GlobalStateI, action: any): GlobalStateI => {
  return updateObject(state, { wipModal: false })
}

const showFeaturedModal = (state: GlobalStateI, action: any): GlobalStateI => {
  return updateObject(state, { featuredModal: true })
}

const hideFeaturedModal = (state: GlobalStateI, action: any): GlobalStateI => {
  return updateObject(state, { featuredModal: false })
}