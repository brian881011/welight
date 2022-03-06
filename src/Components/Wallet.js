import React, { Component } from "react";
import "../Styles/Wallet.css";
import {
  Form,
} from "reactstrap";
import Connect from "./Connect";
import { Link } from "react-router-dom";

export default class Wallet extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="walletConnect">
        <div className="connectImage"></div>
        <Form>
          <div className="connectTitle">
            {!localStorage.getItem('walletConnected')&&(<>Please Sign In With Your Wallet To Check This Page<br />Sign in</>)}
            {localStorage.getItem('walletConnected')&&(<>Wallet Connected</>)}
          </div>
              <Connect/>

            {localStorage.getItem('walletConnected') &&
              <Link to="/" style={{textDecoration:"none"}}>
                <button className='walletBackButton'>
                    Back
                </button>
              </Link>
            }
        </Form>
      </div>
    );
  }
}


