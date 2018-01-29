import React from 'react';
import { connect } from 'react-redux';
import {
  inputKeyword,
  fetchMovies,
  error,
  reset,
} from '../action';
import Main from './index';

const App = (props) => {
  const {
    keyword,
    movies,
    filterMovies,
    error,
    handleInputKeyword,
    handleFetchMovies,
    handleError,
    handleReset,
  } = props;
  return (
      <Main
        data={{ keyword, movies, filterMovies, error }}
        actions={{ handleInputKeyword, handleFetchMovies, handleError, handleReset }}
      />
  );
};

const mapStateToProps = ({ keyword, movies, filterMovies, error }) => ({ keyword, movies, filterMovies, error });

const mapDispatchToProps = (dispatch) => ({
  handleInputKeyword: (data) => dispatch(inputKeyword(data)),
  handleFetchMovies: () => dispatch(fetchMovies()),
  handleError: () => dispatch(error()),
  handleReset: () => dispatch(reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);