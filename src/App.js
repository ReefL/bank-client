import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import Account from "./components/account/account";
import BankDetails from "./components/bank-details/bank-details";
import addAccount from "./components/add-account/add-account";
import Header from "./components/header/header";
class App extends Component {
  componentDidMount() {
    console.log("app loaded!!!");
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div />
          <div>
            <Switch>
              <Route key="account" path="/account" component={Account} />
              <Route
                key="bank-details"
                path="/bank-details"
                component={BankDetails}
              />
              <Route
                key="add-account"
                path="/add-account"
                component={addAccount}
              />
              <Redirect from="/" to="/account" />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
