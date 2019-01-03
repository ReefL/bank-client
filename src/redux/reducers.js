import { ACTIONS } from "./action.config";

export default function reducers(state = {}, action) {
  switch (action.type) {
    case ACTIONS.ACCOUNT_ADDED: {
      return {
        ...state,
        snackBarStatus: true,
        message: `account ${action.newAccount.id} added`
      };
    }

    case ACTIONS.GET_ACCOUNTS_DONE: {
      // let accounts = [];
      // if (state.accounts == undefined) {
      //   accounts = state.accounts;
      // } else {
      //   accounts = state.accounts.concat(action.accounts);
      // }
      return {
        ...state,
        accounts: state.accounts
      };
    }

    default:
      return state;
  }
}
