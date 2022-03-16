import React, { useEffect, useState } from 'react';
import { BadgeContainer } from '../BadgeContainer';
import UnderwayBadgeJson from '../UnderwayBadgeJson';
import '../../Styles/Underway.css';

const Underway = () => {

    const [underwayJson, setUnderwayJson] = useState(UnderwayBadgeJson);

    useEffect(() => {
        getUnderway();
    }, []);

    const getUnderway = async () => {
        const response = await fetch(
            "http://139.155.71.103:8081/activity/list/underway",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "currentPage": 1,
                    "pageSize": 10000
                }),
            }
        );
        const jsonResponse = await response.json();
        // console.log(jsonResponse);
        setUnderwayJson(jsonResponse.rows);
    }




    return (
        <div className="underway">
            <div id="underway_title"><h1>What's going on?</h1></div>
            <BadgeContainer BadgeJson={underwayJson} />
        </div>
    )
}

export default Underway;