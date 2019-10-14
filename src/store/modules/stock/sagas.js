import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';
import { token } from '../../../config/token';
import { fetchStockSucess, fetchStockFailure } from './actions';

export function* fetchStockData({ payload }) {
  try {
    const { url } = payload;

    const response = yield call(api.get, `${url}`, { params: { token } });

    yield put(fetchStockSucess(response.data));
    history.push('/dashboard');
  } catch (err) {
    yield put(fetchStockFailure());
  }
}

export default all([takeLatest('@stock/FETCH_STOCK_REQUEST', fetchStockData)]);
