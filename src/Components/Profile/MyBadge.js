import React, { useState, useEffect } from 'react';
import '../../Styles/MyBadge.css';
import { Link } from "react-router-dom";
import { BadgeContainer } from '../BadgeContainer';
import UnderwayBadgeJson from '../UnderwayBadgeJson';
import Header from '../Header';

const MyBadge = () => {

    const [myBadgeJson, setMyBadgeJson] = useState(UnderwayBadgeJson);

    useEffect(() => {
        getMyBadge();
    }, []);

    const getMyBadge = async () => {
        const response = await fetch(
            "http://139.155.71.103:8081/customer/badge/list",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "address": localStorage.getItem("walletAddress"),
                    "currentPage": 1,
                    "customerNo": localStorage.getItem("customerNo"),
                    "pageSize": 1000
                }),
            }
        );
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        if (jsonResponse.rows.length > 0) { setMyBadgeJson(jsonResponse.rows); }
    }

    return (
        <div id="backGround">
            <Header />
            <div className="body">
                <div className='profile'>
                    <div className='profileButtons'>
                        <Link to="/Profile" style={{ textDecoration: "none" }}>
                            <button className='profileButton'>
                                Account Settings
                            </button>
                        </Link>
                        <Link to="/Profile/MyBadge" style={{ textDecoration: "none" }}>
                            <button className='profileButton' style={{ borderLeft: "2px solid #2AF598", color: "white" }}>
                                My Badge
                            </button>
                        </Link>
                        <Link to="/Profile/ActivityCenter" style={{ textDecoration: "none" }}>
                            <button className='profileButton'>
                                Activity Center
                            </button>
                        </Link>
                    </div>
                    <div className='myBadgeContent'>
                        <div id="myBadgeTitle">Completed Activities</div>
                        <BadgeContainer BadgeJson={myBadgeJson} />

                    </div>
                </div>
            </div>
        </div>
    )

}

export default MyBadge;
