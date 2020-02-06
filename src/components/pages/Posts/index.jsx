import React, { useState, useEffect } from "react";
import List from "./components/List";
import Nav from "./components/Nav";
import PostForm from "./components/PostForm";
import {
  fetchCreatePost,
  fetchListPosts,
  fetchRemovePost,
  fetchEditPost,
  initialPost
} from "./helpers";

const Posts = () => {
  const [state, setState] = useState({
    isShowForm: false,
    posts: [],
    post: initialPost
  });

  const updatePosts = (isShowForm = false) => {
    return fetchListPosts().then(posts =>
      setState({
        ...state,
        isShowForm,
        posts
      })
    );
  };

  useEffect(() => {
    updatePosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showForm = () =>
    setState({
      ...state,
      isShowForm: true
    });

  const hideForm = () =>
    setState({
      ...state,
      post: initialPost,
      isShowForm: false
    });

  const showEditForm = post =>
    setState({
      ...state,
      post,
      isShowForm: true
    });

  const createPost = e => {
    e.preventDefault();

    const dataSend = {
      title: e.target.title.value,
      short_description: e.target.short_description.value,
      full_description: e.target.full_description.value,
      status: e.target.status.checked,
      seo_url: e.target.seo_url.value
    };

    fetchCreatePost(dataSend).then(() => {
      updatePosts();
    });
  };

  const editPost = e => {
    e.preventDefault();

    const dataSend = {
      title: e.target.title.value,
      short_description: e.target.short_description.value,
      full_description: e.target.full_description.value,
      status: e.target.status.checked,
      seo_url: e.target.seo_url.value
    };

    fetchEditPost(dataSend, state.post.id).then(() => {
      updatePosts();
    });
  };

  const removePost = id => {
    fetchRemovePost(id).then(() => {
      updatePosts();
    });
  };

  return (
    <>
      <Nav showForm={showForm} />
      <List
        posts={state.posts}
        removePost={removePost}
        showEditForm={showEditForm}
      />
      <PostForm
        post={state.post}
        onSubmitEdit={editPost}
        onSubmitCreate={createPost}
        hide={hideForm}
        isShow={state.isShowForm}
      />
    </>
  );
};

export default Posts;
