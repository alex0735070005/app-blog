import { POSTS_URL, API_KEY } from "config/api";
import { setPostsAction } from "./actionTypes";
import mockPosts from "./data.json";

export const fetchListPostsAction = dispatch => {
  const url = `${POSTS_URL}?api_key=${API_KEY}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      if (!data.result) {
        dispatch(setPostsAction([]));
      }
      dispatch(setPostsAction(data.posts));
    })
    .catch(() => {
      dispatch(setPostsAction(mockPosts.posts));
    });
};

export const fetchRemovePostAction = postId => {
  const url = `${POSTS_URL}/${postId}?api_key=${API_KEY}`;
  return fetch(url, {
    method: "DELETE"
  }).then(response => response.json());
};

export const fetchCreatePostAction = (data, dispatch) => {
  const url = `${POSTS_URL}?api_key=${API_KEY}`;

  const dataQuery = {
    title: data.title.value,
    short_description: data.short_description.value,
    full_description: data.full_description.value,
    status: data.status.checked,
    seo_url: data.seo_url.value
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(dataQuery)
  })
    .then(response => response.json())
    .then(dataResp => {
      if (dataResp.result) {
        fetchListPostsAction(dispatch);
      }
    })
    .catch(() => {
      alert("post created");
      fetchListPostsAction(dispatch);
    });
};

export const fetchEditPostAction = (data, postId) => {
  const url = `${POSTS_URL}/${postId}?api_key=${API_KEY}`;
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(data)
  }).then(response => response.json());
};
