import { ACTIONS } from "./action.config";

export default function reducers(state = {}, action) {
  switch (action.type) {
    case ACTIONS.ACCOUNT_ADDED: {
      return {
        snackBarStatus: true,
        message: `account ${action.newAccount.id} added`
      };
    }
    default:
      return state;
  }
}
