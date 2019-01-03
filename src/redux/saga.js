import { takeEvery, fork, call, put } from "redux-saga/effects";
//actions/
import { getAccountsDone } from "./actions";
//services/
import { getAccountsService } from "./services";
import { ACTIONS } from "./action.config";

function* getAccounts(action) {
  try {
    const accounts = yield call(getAccountsService,action);
    yield put(getAccountsDone(accounts));
  } catch (ex) {
    //   todo  yield put error action \ no accounts account
  }
}

function* GetAccounts() {
  yield takeEvery(ACTIONS.GET_ACCOUNTS, getAccounts);
}

function* GetTransactions() {
  yield takeEvery(ACTIONS.GET_TRANSACTIONS, getAccounts);
}

function* rootSaga() {
  yield [fork(GetAccounts), fork(GetTransactions)];
}

export default rootSaga;
