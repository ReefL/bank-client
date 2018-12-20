import React, { Component } from "react";

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.state = { accounts: [] };
  }

  componentDidMount() {
    fetch("http://10.103.50.39:2200/accounts")
      .then(result => {
        return result.json();
      })
      .then(result => {
        this.setState({
          accounts: result
        });
      });
  }

  render() {
    return (
      <div>
        <h2> This is the account page </h2>

        {this.state.accounts.map(curAccount => {
          return <h2> {curAccount.account_number} </h2>;
        })}
      </div>
    );
  }
}
