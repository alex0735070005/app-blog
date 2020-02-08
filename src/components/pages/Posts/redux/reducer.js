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

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS: {
      return {
        ...state,
        dataPosts: action.payload.posts
      };
    }

    default:
      return state;
  }
};
