import React, { useState, useEffect } from 'react';
import { BadgeContainer } from '../BadgeContainer';
import ComingSoonBadgeJson from '../ComingSoonBadgeJson';
import '../../Styles/ComingSoon.css';

const ComingSoon = () => {

    const [comingSoonJson, setComingSoonJson] = useState(ComingSoonBadgeJson);

    useEffect(() => {
        getUpcoming();
    }, []);

    const getUpcoming = async () => {
        const response = await fetch(
            "http://139.155.71.103:8081/activity/list/upcoming",
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
        console.log(jsonResponse);
        if (jsonResponse.rows.length > 0) { setComingSoonJson(jsonResponse.rows); }

    }

    return (
        <div className="comingSoon">
            <div id="comingSoon_title"><h1>What's coming?</h1></div>
            <BadgeContainer BadgeJson={comingSoonJson} />
        </div>
    )

}

export default ComingSoon;