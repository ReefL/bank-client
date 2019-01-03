import { ACTIONS } from "./action.config";

export const accountAdded = newAccount => {
  return {
    type: ACTIONS.ACCOUNT_ADDED,
    newAccount
  };
};

export const getAccountsDone = accounts => {
  return {
    type: ACTIONS.GET_ACCOUNTS_DONE,
    accounts
  };
};

export const getAccounts = (skip,take) => {
  return {
    type: ACTIONS.GET_ACCOUNTS , skip,take
  };
};
