import { FeaturedI } from "../types/featuredI"

// GlobalState interface
export interface GlobalStateI {
  theme: string
  wipModal: boolean
  featuredModal: boolean
  educationModal: boolean
  experienceModal: boolean
  communityWorkModal: boolean
  projectModal: boolean
  sidebar: boolean
  projects: FeaturedI[]
}

// User reducer types
export const SWITCH_THEME = 'SWITCH_THEME';
export const SHOW_WIP_MODAL = 'SHOW_WIP_MODAL';
export const HIDE_WIP_MODAL = 'HIDE_WIP_MODAL';
export const SHOW_FEATURED_MODAL = 'SHOW_FEATURED_MODAL';
export const HIDE_FEATURED_MODAL = 'HIDE_FEATURED_MODAL';
export const SHOW_EDUCATION_MODAL = 'SHOW_EDUCATION_MODAL';
export const HIDE_EDUCATION_MODAL = 'HIDE_EDUCATION_MODAL';
export const SHOW_EXPERIENCE_MODAL = 'SHOW_EXPERIENCE_MODAL';
export const HIDE_EXPERIENCE_MODAL = 'HIDE_EXPERIENCE_MODAL';
export const SHOW_COMMUNITYWORK_MODAL = 'SHOW_COMMUNITYWORK_MODAL';
export const HIDE_COMMUNITYWORK_MODAL = 'HIDE_COMMUNITYWORK_MODAL';
export const SHOW_PROJECT_MODAL = 'SHOW_PROJECT_MODAL';
export const HIDE_PROJECT_MODAL = 'HIDE_PROJECT_MODAL';
export const SHOW_SIDEBAR = 'SHOW_SIDEBAR';
export const HIDE_SIDEBAR = 'HIDE_SIDEBAR';
export const SET_PROJECTS = "SET_PROJECTS"
