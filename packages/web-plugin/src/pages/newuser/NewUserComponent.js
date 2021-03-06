import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NewUserComponent extends Component {

  constructor(args) {
    super(args);
  }

  render() {

    return (

      <div className="NewUserComponent container">

        <img alt="" className="NewUserComponent logo" src={require("../../images/boomerang.png")}/>
        <h5 className="NewUserComponent welcomeMessage">Welcome to Boomerang</h5>

        <Link to="/createAccount">
          <button className="NewUserComponent createAccountButton">Start a new account</button>
        </Link>

        <Link to="/importAccount">
          <button className="NewUserComponent importAccountButton">I already have an account</button>
        </Link>

        <h6 className="NewUserComponent version">B O O M - v 1 . 0</h6>

      </div>
    );
  }
}

export default NewUserComponent;
