import {
  GlobalStateI,
  SHOW_WIP_MODAL,
  HIDE_WIP_MODAL,
  SHOW_FEATURED_MODAL,
  HIDE_FEATURED_MODAL,
  SHOW_EDUCATION_MODAL,
  HIDE_EDUCATION_MODAL,
  SHOW_EXPERIENCE_MODAL,
  HIDE_EXPERIENCE_MODAL,
  SHOW_COMMUNITYWORK_MODAL,
  HIDE_COMMUNITYWORK_MODAL,
  SWITCH_THEME,
  SHOW_PROJECT_MODAL,
  HIDE_PROJECT_MODAL,
} from "../reduxTypes";
import { updateObject } from "../../util/common";

const initialState: GlobalStateI = {
  theme: 'light',
  wipModal: false,
  featuredModal: false,
  educationModal: false,
  experienceModal: false,
  communityWorkModal: false,
  projectModal: false
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SWITCH_THEME: return switchTheme(state, action)
    case SHOW_WIP_MODAL: return showWIPModal(state, action)
    case HIDE_WIP_MODAL: return hideWIPModal(state, action)
    case SHOW_FEATURED_MODAL: return showFeaturedModal(state, action)
    case HIDE_FEATURED_MODAL: return hideFeaturedModal(state, action)
    case SHOW_EDUCATION_MODAL: return showEducationModal(state, action)
    case HIDE_EDUCATION_MODAL: return hideEducationModal(state, action)
    case SHOW_EXPERIENCE_MODAL: return showExprienceModal(state, action)
    case HIDE_EXPERIENCE_MODAL: return hideExprienceModal(state, action)
    case SHOW_COMMUNITYWORK_MODAL: return showCommunityWorkModal(state, action)
    case HIDE_COMMUNITYWORK_MODAL: return hideCommunityWorkModal(state, action)
    case SHOW_PROJECT_MODAL: return showProjectModal(state, action)
    case HIDE_PROJECT_MODAL: return hideProjectModal(state, action)
    default: return state
  }
}

export default reducer

const switchTheme = (state: GlobalStateI, action: any): GlobalStateI => {
  const { payload }: { payload: string } = action;
  let theme = payload == "light" ? "dark" : "light";
  return updateObject(state, { theme })
}

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

const showEducationModal = (state: GlobalStateI, action: any): GlobalStateI => {
  return updateObject(state, { educationModal: true })
}

const hideEducationModal = (state: GlobalStateI, action: any): GlobalStateI => {
  return updateObject(state, { educationModal: false })
}

const showExprienceModal = (state: GlobalStateI, action: any): GlobalStateI => {
  return updateObject(state, { experienceModal: true })
}

const hideExprienceModal = (state: GlobalStateI, action: any): GlobalStateI => {
  return updateObject(state, { experienceModal: false })
}

const showCommunityWorkModal = (state: GlobalStateI, action: any): GlobalStateI => {
  return updateObject(state, { communityWorkModal: true })
}

const hideCommunityWorkModal = (state: GlobalStateI, action: any): GlobalStateI => {
  return updateObject(state, { communityWorkModal: false })
}

const showProjectModal = (state: GlobalStateI, action: any): GlobalStateI => {
  return updateObject(state, { projectModal: true })
}

const hideProjectModal = (state: GlobalStateI, action: any): GlobalStateI => {
  return updateObject(state, { projectModal: false })
}