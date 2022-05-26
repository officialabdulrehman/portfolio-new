// GlobalState interface

export interface GlobalStateI {
  wipModal: boolean
  featuredModal: boolean
}

// User reducer types
export const SHOW_WIP_MODAL = 'SHOW_WIP_MODAL';
export const SHOW_FEATURED_MODAL = 'SHOW_FEATURED_MODAL';
export const HIDE_WIP_MODAL = 'HIDE_WIP_MODAL';
export const HIDE_FEATURED_MODAL = 'HIDE_FEATURED_MODAL';