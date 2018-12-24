import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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
    const { classes } = this.props;
    return (
      <div className="container">
        <div className="row">
          {this.state.accounts.map(curAccount => {
            return (
              <div
                className="col-3"
                style={{
                  padding: "5px"
                }}
              >
                <div
                  style={{
                    border: "1px solid black",
                    borderRadius: "10px",
                    height: "150px",
                    boxShadow: "5px 10px"
                  }}
                >
                  <h1> {curAccount.id} </h1>
                  <div>{curAccount.owner} </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Account);
