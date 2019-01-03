export const getAccountsService = async action => {
  let result = await fetch(
    `http://10.103.50.39:2200/accounts/${action.skip}/${action.take}`
  );
  const accounts = result.json();
  return accounts;
};
