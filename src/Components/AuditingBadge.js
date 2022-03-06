import React, {useState} from 'react';
import PropTypes from 'prop-types';
import BadgeProfile from './BadgeProfile';
import '../Styles/Badge.css';

export const AuditingBadge = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState(null);

    let badgeJson = props.badgeJson;
    let activityName  = props.activityName;
    let badgeAsaId = props.badgeAsaId;
    let badgeTotal = props.badgeTotal;
    let badgeHasClaimed = props.badgeHasClaimed;
    let countdown = props.countdown;
    let badgeImgUrl = props.badgeImgUrl;

    const togglePopup = () => {
        setIsOpen(!isOpen);
        setId(badgeAsaId);
        console.log(1);
      }

    const cancel = async () =>{
        const response = await fetch(
          "http://139.155.71.103:8081/activity/cancel",
          {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                "address": localStorage.getItem("walletAddress"),
                "customerNo": "e23a88c8c13b21cf33e24e5166423183a73042a8a9c67da15da6903d7daaeb9a",
                "activityId": 7,
              }),
          }
        );
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        
      }

    return (
        <>
            <div className="badge" style={{cursor:"context-menu"}}>
                <div className='bottomTag'></div>
                <div className="badge_contentFrame">
                    <div className='contentBuffer'></div>
                    <div className="activityName">{activityName}</div>
                    <div className="badgeAsaId">State: <span>Auditing</span></div>
                    <button className="viewActivityButton" onClick={togglePopup}>
                        View Activity
                    </button>
                    <button className="cancelActivityButton" onClick={cancel}>
                        Cancel
                    </button>

                </div>
                <div className="badgeImg" style={{backgroundImage:"url("+badgeImgUrl+")", backgroundSize: "contain"}}></div>
                <div className="triangle"></div>
            </div>
            {isOpen && <BadgeProfile badgeJson={badgeJson} asaId={id} handleClose={togglePopup}/>}
        </>
    )
}
