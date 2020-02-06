import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Nav = props => {
  const { showForm } = props;
  return (
    <div className={styles.root}>
      <h1>Posts</h1>
      <button onClick={showForm} type="button">
        Add post
      </button>
    </div>
  );
};

Nav.propTypes = {
  showForm: PropTypes.func.isRequired
};

export default Nav;
