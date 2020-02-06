import { POSTS_URL, API_KEY } from "config/api";

export const fetchListPosts = () => {
  const url = `${POSTS_URL}?api_key=${API_KEY}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      if (!data.result) {
        return [];
      }
      return data.posts;
    });
};

export const fetchRemovePost = postId => {
  const url = `${POSTS_URL}/${postId}?api_key=${API_KEY}`;
  return fetch(url, {
    method: "DELETE"
  }).then(response => response.json());
};

export const fetchCreatePost = data => {
  const url = `${POSTS_URL}?api_key=${API_KEY}`;
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data)
  }).then(response => response.json());
};

export const fetchEditPost = (data, postId) => {
  const url = `${POSTS_URL}/${postId}?api_key=${API_KEY}`;
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(data)
  }).then(response => response.json());
};

export const initialPost = {
  id: null,
  title: "",
  short_description: "",
  full_description: "",
  status: false,
  seo_url: ""
};
