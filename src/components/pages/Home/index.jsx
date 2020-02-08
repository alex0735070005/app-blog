import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Home = props => {
  const { title, description } = props;
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
};

Home.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    title: state.home.title,
    description: state.home.description
  };
};

export default connect(mapStateToProps)(Home);
