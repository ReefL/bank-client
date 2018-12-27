import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

class Account extends Component {
  constructor(props) {
    super(props);
    const fileName = "debug.log";
    this.state = {
      id: this.props.match.params.id,
      account: null,
      download: `http://localhost:2200/operations/export_operations/${fileName}`
    };

    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    fetch(`http://10.103.50.39:2200/accounts/${this.state.id}`)
      .then(result => {
        return result.json();
      })
      .then(result => {
        this.setState({
          account: result
        });
      });
  }

  goBack() {
    console.log(this.props.history);
    this.props.history.push("/accounts");
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="container">
        <div className="row">
          <button onClick={this.goBack} className="btn btn-primary">
            {" "}
            &lt;{" "}
          </button>

          <h2 style={{ background: "lightblue", height: "46" }}>
            Account Id: {this.state.id}
            {this.state.account && (
              <div>balance:{this.state.account.balance}</div>
            )}
            {!this.state.account && <div>loading...</div>}
          </h2>
        </div>
        <br />
        <a href={this.state.download}>download log file </a>
      </div>
    );
  }
}

export default withStyles(styles)(Account);
