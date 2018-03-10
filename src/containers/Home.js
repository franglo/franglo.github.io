import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

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
    <Header />
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
