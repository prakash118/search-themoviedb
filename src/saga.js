import { all, apply, call, put, takeLatest, select } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import moment from 'moment';

import {
  INPUT_KEYWORD,
  FETCH_MOVIES,
  FILTER_MOVIES,
  ERROR,
  RESET,
} from './constants';

import { apiKey } from './config';

const formatData = (data) => 
  data.results.map((item) => {
    const year = moment(item.release_date).format('YYYY');
    const lowercaseTitle = item.title.toLowerCase();
    const imagePath = `http://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.backdrop_path}`;
    return { ...item, year, lowercaseTitle, imagePath};
  });

export function* getMovies() {
  try {
    const options = { "method": "GET", "headers": {} };
    const endpont = 'http://api.themoviedb.org';
    const parameters = '3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US';
    const apiKeyParameter = `&api_key=${apiKey}`; 
    const response = yield call(fetch, `${endpont}/${parameters}${apiKeyParameter}`, options);
    if (!response.ok) throw response.statusText;
    const responseData = yield apply(response, response.json);
    const data = yield call(formatData, responseData);
    yield put({ type: FETCH_MOVIES, data }); 
  } catch (error) {
    yield put({ type: ERROR, error });
  }
}

export default function* rootSaga() {
  yield call(getMovies);
}