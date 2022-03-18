import React, { Component, useEffect } from "react";
import "../Styles/Wallet.css";
import {
  Form,
} from "reactstrap";
import Connect from "./Connect";
import { Link } from "react-router-dom";
import Header from "./Header";

const Wallet = ()=> {

  useEffect(() => {
    if (localStorage.getItem("walletConnected")){
      window.location="/"
  }
    
}, []);

    return (

      <div id="backGround">
        <Header />
        <div className="body">
          <div className="walletConnect">
            <div className="connectImage"></div>
            <Form>
              <div className="connectTitle">
                {!localStorage.getItem('walletConnected')&&(<>Please Sign In With Your Wallet To Check This Page<br />Sign in</>)}
                {localStorage.getItem('walletConnected')&&(<>Wallet Connected</>)}
              </div>
                  <Connect/>
            </Form>
          </div>
        </div>
      </div>
    );
  }

export default Wallet;

