import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { toggleFormAction } from "../../redux/actionTypes";

import styles from "./styles.module.scss";

const Nav = props => {
  const { toggleForm } = props;
  return (
    <div className={styles.root}>
      <h1>Posts</h1>
      <button onClick={toggleForm} type="button">
        Add post
      </button>
    </div>
  );
};

Nav.propTypes = {
  toggleForm: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  toggleForm: () => dispatch(toggleFormAction(true))
});

export default connect(null, mapDispatchToProps)(Nav);
