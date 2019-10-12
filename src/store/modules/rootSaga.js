import { all } from 'redux-saga/effects';

import company from './company/sagas';

export default function* rootSaga() {
  return yield all([company]);
}
