/* eslint-disable import/prefer-default-export */
import { SET_POSTS, TOGGLE_FORM, EDIT_POST } from "./reducer";

export const setPostsAction = posts => ({
  type: SET_POSTS,
  payload: { posts }
});

export const toggleFormAction = (status, clear = false) => ({
  type: TOGGLE_FORM,
  payload: { status, clear }
});

export const editPostAction = post => ({
  type: EDIT_POST,
  payload: { post }
});
