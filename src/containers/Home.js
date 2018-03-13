import React from 'react';
import { connect } from 'react-redux';
import Splash from '../components/Splash';

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
    <Splash />
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
