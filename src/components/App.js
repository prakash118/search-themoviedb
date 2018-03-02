import React from 'react';
import { connect } from 'react-redux';
import { inputKeyword, fetchMovies, error, reset } from '../action';
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
      data={{ filterMovies, error }}
      actions={{ handleInputKeyword, handleFetchMovies, handleError, handleReset }}
    />
  );
};

const getFilterMovies = (movies, keyword) => {
  if (!keyword) return movies;
  const lowerKeyword = keyword.toLowerCase();
  if (lowerKeyword.length <= 1) return movies;
  const filter = movies.filter((movie) => {
    const { lowercaseTitle, year } = movie;
    if (lowercaseTitle.indexOf(lowerKeyword) !== -1 || year.indexOf(lowerKeyword) !== -1) {
      return movie;
    }
  });
  return filter;
};

const mapStateToProps = ({ keyword, movies, filterMovies, error }) => ({
  filterMovies: getFilterMovies(movies, keyword),
  error,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputKeyword: (data) => dispatch(inputKeyword(data)),
  handleFetchMovies: () => dispatch(fetchMovies()),
  handleError: () => dispatch(error()),
  handleReset: () => dispatch(reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
