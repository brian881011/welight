import React, { Component, useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import { MDBIcon} from 'mdbreact';
import '../Styles/Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';



function Header(){

    const [walletMessage, setWalletMessage] = useState(localStorage.getItem('walletAddress') || "Connect Wallet");
    const [showWalletMenu, setShowWalletMenu] = useState(false);

    function toggleWalletMenu(){
        setShowWalletMenu(!showWalletMenu);
    }
    useEffect(() => {
        let address  = localStorage.getItem('walletAddress');
        if (!address){setWalletMessage("Connect Wallet");}
        else{
            setWalletMessage(address.slice(0, 4)+"..."+address.slice(-5,-1));
        }
      });

    
        return (
            <div className="header">
                <div className="header_left">
                    <Link to="/" style={{textDecoration:"none"}}><div id="logo"></div></Link>
                    <div id="search">Search</div>
                </div>
                <div className="header_right">
                    <div id="explore">Explore</div>
                    <Link to="/Registration" style={{textDecoration:"none"}}><div id="create">Create</div></Link>
                    <div id="faq">FAQ</div>
                    <div id="about">About</div>

                    {!localStorage.getItem('walletAddress')&&(
                    <Link to="/Wallet" style={{textDecoration:"none"}}>
                        <button id="wallet"><MDBIcon far icon="user-circle" /> {walletMessage } <MDBIcon icon="caret-down" /></button>
                    </Link>
                    )}
                    
                    {localStorage.getItem('walletAddress')&& (
                        <button id="wallet" onClick = {toggleWalletMenu} ><MDBIcon far icon="user-circle" /> {walletMessage } <MDBIcon icon="caret-down" /></button>
                    )}
                    {showWalletMenu && (
                        <div className='headerDropdown'>
                            <Link to="/Profile" style={{textDecoration:"none"}}>
                                <button className="headerProfile"><MDBIcon icon="cog" /> Profile  </button>
                            </Link>

                            <button className="headerProfile" onClick={
                                ()=>{
                                        localStorage.clear();
                                        window.location.reload();
                                        window.location = "/"
                                    }
                                }><MDBIcon icon="sign-out-alt" /> Disconnect</button>

                        </div>
                    )}
                    
                </div>
            </div>  
        )
    
}

export default Header;