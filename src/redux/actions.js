import { ACTIONS } from "./action.config";

export const accountAdded = newAccount => {
  return {
    type: ACTIONS.ACCOUNT_ADDED,
    newAccount
  };
};

export const getAccounts = () => {
  return {
    type: ACTIONS.GET_ACCOUNTS
  };
};
