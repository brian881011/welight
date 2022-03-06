import React, { useState, useEffect } from 'react';
import '../../Styles/ActivityCenter.css';
import Button from '@material-ui/core/Button';
import { Link} from "react-router-dom";
import { BadgeContainer } from '../BadgeContainer';
import {AuditingBadgeContainer} from '../AuditingBadgeContainer';
import UnderwayBadgeJson from '../UnderwayBadgeJson';

const ActivityCenter = ()=> {

    const [activityCenterJson, setActivityCenterJson] = useState(UnderwayBadgeJson);

    useEffect(() => {
        getActivityCenter();
    }, []);

    const getActivityCenter = async () =>{
        const response = await fetch(
          "http://139.155.71.103:8081/customer/activity/list",
          {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                "address": "string",
                "currentPage": 1,
                "customerNo": "string",
                "pageSize": 1,
                "seqNo": "string"
              }),
          }
        );
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        if(jsonResponse.rows.length>0){setActivityCenterJson(jsonResponse.rows);}
        
      }

        return (
            <div className='profile'>
                <div className='profileButtons'>
                    <Link to="/Profile" style={{textDecoration:"none"}}>
                        <button className='profileButton' >
                            Account Settings
                        </button>
                    </Link>
                    <Link to="/Profile/MyBadge" style={{textDecoration:"none"}}>
                        <button className='profileButton'>
                            My Badge
                        </button>
                    </Link>
                    <Link to="/Profile/ActivityCenter" style={{textDecoration:"none"}}>
                        <button className='profileButton' style={{borderLeft:"2px solid #2AF598",color: "white"}}>
                            Activity Center
                        </button>
                    </Link>
                </div>
                <div className='profileContent'>
                    <button className="releaseActivities">
                        Release Activities
                    </button>
                    <div className='activityAudit'>
                        <div id="activityAuditTitle">Activity Audit</div>
                        <AuditingBadgeContainer BadgeJson={activityCenterJson} />
                    
                    </div>
                    <div className='completedActivities'>
                        <div id="completedActivitiesTitle">Hosted Activities</div>
                        <BadgeContainer BadgeJson={activityCenterJson} />
                    
                    </div>
                </div>
            </div>
        )
    
}

export default ActivityCenter;
