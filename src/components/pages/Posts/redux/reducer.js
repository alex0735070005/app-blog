const initialState = {
  dataPosts: [],
  isShowForm: false,
  post: {
    id: null,
    title: "",
    short_description: "",
    full_description: "",
    status: false,
    seo_url: ""
  }
};

export const SET_POSTS = "SET_POSTS";
export const EDIT_POST = "EDIT_POST";
export const TOGGLE_FORM = "TOGGLE_FORM";

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS: {
      return {
        ...state,
        dataPosts: action.payload.posts
      };
    }

    case TOGGLE_FORM: {
      const post = action.payload.clear ? initialState.post : state.post;
      return {
        ...state,
        isShowForm: action.payload.status,
        post
      };
    }

    case EDIT_POST: {
      return {
        ...state,
        post: action.payload.post,
        isShowForm: true
      };
    }

    default:
      return state;
  }
};
