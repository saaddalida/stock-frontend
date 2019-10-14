import { all } from 'redux-saga/effects';

import stock from './stock/sagas';

export default function* rootSaga() {
  return yield all([stock]);
}
