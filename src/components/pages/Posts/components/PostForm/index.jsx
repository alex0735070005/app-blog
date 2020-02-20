import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Btn from "components/shared/Btn";
import { toggleFormAction } from "../../redux/actionTypes";
import { fetchCreatePostAction } from "../../redux/actions";

import styles from "./styles.module.scss";

const PostForm = props => {
  const { isShowForm, closeForm, editPost, createPost, post } = props;

  if (!isShowForm) {
    return null;
  }

  const onSubmitEdit = e => {
    e.preventDefault();
    editPost(e.target);
  };

  const onSubmitCreate = e => {
    e.preventDefault();
    createPost(e.target);
  };

  const {
    id,
    title,
    short_description: shortDescription,
    full_description: fullDescription,
    status,
    seo_url: seoUrl
  } = post;

  const onSubmit = id ? onSubmitEdit : onSubmitCreate;
  const formText = id ? "Edit post" : "Create post";

  return (
    <div className={styles.wrap}>
      <form onSubmit={onSubmit} className={styles.root}>
        <h4>{formText}</h4>
        <Btn type="del" onClick={closeForm} />

        <input
          defaultValue={title}
          name="title"
          type="text"
          placeholder="Title"
        />

        <input
          defaultValue={seoUrl}
          name="seo_url"
          type="text"
          placeholder="Seo url"
        />

        <label htmlFor="#status-post">
          Post status
          <input
            defaultChecked={status}
            name="status"
            id="status-post"
            type="checkbox"
          />
        </label>

        <input
          defaultValue={shortDescription}
          name="short_description"
          type="text"
          placeholder="Short description"
        />

        <textarea
          defaultValue={fullDescription}
          name="full_description"
          placeholder="Full description"
        />

        <button className={styles.create} type="submit">
          {formText}
        </button>
      </form>
    </div>
  );
};

PostForm.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    seo_url: PropTypes.string.isRequired,
    short_description: PropTypes.string.isRequired,
    full_description: PropTypes.string.isRequired
  }).isRequired,
  isShowForm: PropTypes.bool.isRequired,
  closeForm: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    isShowForm: state.posts.isShowForm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeForm: () => dispatch(toggleFormAction(false, true)),
    createPost: data => fetchCreatePostAction(data, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
