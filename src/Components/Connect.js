import { Button } from "reactstrap";
import React, { useState, useEffect } from "react";
import MyAlgo from "@randlabs/myalgo-connect";
import "../Styles/Connect.css";
import MyAlgoConnect from "@randlabs/myalgo-connect";

const Connect = () => {

  // useEffect(
  //   () => {
  //     temp();
  // }, []
  // );

  const connectToMyAlgo = async () => {
    console.log(0);
    try {
      const myAlgoWallet = new MyAlgo();
      console.log(1);
      const accounts = await myAlgoWallet.connect();
      console.log(2);
      const addresses = accounts.map((account) => account.address);
      localStorage.setItem('walletAddress', addresses[0]);
      localStorage.setItem('walletConnected', true);
      window.location.reload();

    } catch (err) {
      console.error(err);
    }
  };

  const temp = async()=>{
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
              "seqNo": "string"
            }),
        }
      );
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      /*
      localStorage.setItem("avatar", jsonResponse.avatar);
      localStorage.setItem("custNo", jsonResponse.custNo);
      localStorage.setItem("custName", jsonResponse.custName);
      localStorage.setItem("customerType", jsonResponse.customerType);
      localStorage.setItem("mail", jsonResponse.mail);*/
  }

  return (
    <div style={{textAlign:"center", marginTop:"10px"}}>
      {localStorage.getItem('walletConnected') ? (
        ""
      ) : (
        <button className="connectButton" onClick={temp}>
          Connect Wallet
        </button>
      )}
      <p style={{fontWeight:"600", margin:"50px",color:"white", textAlign:"center"}}>
        Address:<br /><br />
        {localStorage.getItem('walletConnected') ? localStorage.getItem("walletAddress") : "Address will show here"}
      </p>
    </div>
  );
};

export default Connect;
