import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import '../Styles/Main.css';
import Header from './Header';
import Home from './Home/Home';
import Registration from './Registration/Registration';
import MyBadge from './Profile/MyBadge';
import Settings from './Profile/Settings';
import ActivityCenter from './Profile/ActivityCenter';
import Wallet from './Wallet';
import ApplyOrganizer from './Profile/ApplyOrganizer';


export default class Main extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <div id="backGround">
                        <Header />
                        <div className="body">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/Registration" element={<Registration />} />
                                <Route path="/Profile" element={<Settings />} />
                                <Route path="/Wallet" element={<Wallet />} />
                                <Route path="/Profile/MyBadge" element={<MyBadge />} />
                                <Route path="/Profile/ActivityCenter" element={<ActivityCenter />} />
                                <Route path="/Profile/ApplyOrganizer" element={<ApplyOrganizer />} />
                            </Routes>
                        </div>
                    </div>
                    <div className="footer">
                        <div className='footerLeft'>
                            <div id="footer_logo"></div>
                            <div id="copyright">Copyright © 2021 Rentero. All rights reserved</div>
                        </div>
                        <div className='footerRight'>
                            <div id="contactUs">Contact Us<br />💌 WeLight@gmail.com</div>
                            <div id="footerShare1"></div>
                            <div id="footerShare2"></div>
                            <div id="footerShare3"></div>

                        </div>
                    </div>
                    
                </div>
            </Router>
        )
    }
}
