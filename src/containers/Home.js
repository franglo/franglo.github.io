import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ projects }, ownProps) => {
  return {
    projects: projects.list
  }
};
 
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
};

const Home = props => (
  <div>
    { props.projects.map(({ name }) => <li key={name}>{name}</li>) }
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
