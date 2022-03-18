import { Button } from "reactstrap";
import React, { useState, useEffect } from "react";
import MyAlgo from "@randlabs/myalgo-connect";
import "../Styles/Connect.css";
import MyAlgoConnect from "@randlabs/myalgo-connect";

const Connect = () => {

  useEffect(
     () => {
      if(!localStorage.getItem("walletAddress")){connectToMyAlgo();}
   }, []
 );

  const connectToMyAlgo = async () => {
    console.log(0);
    try {
      const myAlgoWallet = new MyAlgo();
      const accounts = await myAlgoWallet.connect();
      const addresses = accounts.map((account) => account.address);
      localStorage.setItem('walletAddress', addresses[0]);
      localStorage.setItem('walletConnected', true);
      window.location.reload();

      const response = await fetch(
        "http://139.155.71.103:8081/customer/info",
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "address": localStorage.getItem("walletAddress"),
            }),
        }
      );
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      localStorage.setItem("avatar", jsonResponse.avatar);
      localStorage.setItem("customerNo", jsonResponse.customerNo);
      localStorage.setItem("customerName", jsonResponse.customerName);
      localStorage.setItem("customerType", jsonResponse.customerType);
      localStorage.setItem("mail", jsonResponse.mail);

      } catch (err) {
        console.error(err);
      }
  };

  const temp = async()=>{
      console.log(1111);
      localStorage.setItem('walletAddress', "OSLJOZ7V2AB3G5GQFAQIBCO65DK6JIRNNOKCTWNJKJJRUQGQAEUJMAFPRA");
      localStorage.setItem('walletConnected', true);
      console.log(9);
      const response = await fetch(
        "http://139.155.71.103:8081/customer/info",
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "address": "OSLJOZ7V2AB3G5GQFAQIBCO65DK6JIRNNOKCTWNJKJJRUQGQAEUJMAFPRA",
            }),
        }
      );
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      localStorage.setItem("avatar", jsonResponse.avatar);
      localStorage.setItem("customerNo", jsonResponse.customerNo);
      localStorage.setItem("customerName", jsonResponse.customerName);
      localStorage.setItem("customerType", jsonResponse.customerType);
      localStorage.setItem("mail", jsonResponse.mail);
  }

  return (
    <div style={{textAlign:"center", marginTop:"10px"}}>
      {localStorage.getItem('walletConnected') ? (
        ""
      ) : (
        <button className="connectButton">
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default Connect;
