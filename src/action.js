import {
  INPUT_KEYWORD,
  FETCH_MOVIES,
  ERROR,
  RESET,
} from './constants';

export const inputKeyword = (keyword) => ({type: INPUT_KEYWORD, keyword});
export const fetchMovies = (data) => ({type: FETCH_MOVIES, data});
export const error = (error) => ({type: ERROR, error});
export const reset = () => ({type: RESET});
