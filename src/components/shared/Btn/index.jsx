import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Btn = props => {
  const { onClick, type } = props;

  const types = {
    del: "x",
    edit: "edit"
  };

  return (
    <button className={styles[type]} type="button" onClick={onClick}>
      {types[type]}
    </button>
  );
};

Btn.defaultProps = {
  type: "del"
};

Btn.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string
};

export default Btn;
