import {
  INPUT_KEYWORD,
  FETCH_MOVIES,
  FILTER_MOVIES,
  ERROR,
  RESET,
} from './constants';

const init = {
  keyword: null,
  movies: null,
  filterMovies: null,
  error: null,
};

const reducer = (state = init, action) => {
  switch (action.type) {
    case INPUT_KEYWORD:
      return {
        ...state,
        keyword: action.keyword,
      };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.data,
        filterMovies: action.data,
      };
    case FILTER_MOVIES:
      return {
        ...state,
        filterMovies: action.data,
      };
    case ERROR:
      return {
        ...state,
        movies: null,
        keyword: null,
        error: action.error,
      };
    case 'RESET':
      return init;
    default:
      return state;
  }
};

export default reducer;
