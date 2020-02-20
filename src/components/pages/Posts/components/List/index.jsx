import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editPostAction } from "../../redux/actionTypes";
import Item from "../Item";
import styles from "./styles.module.scss";

const List = ({ posts, removePost, editPost }) => {
  const postsList = posts.map(post => {
    return (
      <Item
        key={post.id}
        post={post}
        editPost={editPost}
        removePost={removePost}
      />
    );
  });

  return <div className={styles.root}>{postsList}</div>;
};

List.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  removePost: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  editPost: post => dispatch(editPostAction(post))
});

export default connect(null, mapDispatchToProps)(List);
