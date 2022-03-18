import React, {useEffect} from 'react';
import '../Styles/BadgeProfile.css';

export const BadgeProfile = (props) => {

    useEffect(() => {
        getState();
    }, []);

    const getState = async () => {
        const response = await fetch(
            "http://139.155.71.103:8081/customer/activity/link",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "activityId": badge.activityId,
                    "address": localStorage.getItem("walletAddress")||"",
                    "customerNo": localStorage.getItem("customerNo")||"",
                }),
            }
        );
        const jsonResponse = await response.json();
        console.log(badge.activityId);
        console.log(localStorage.getItem("walletAddress")||"");
        console.log(localStorage.getItem("customerNo")||"");
        console.log(jsonResponse);
    }


    const badge = props.badge;
    
    
    return(
            <div className="badgeProfile">
                <div className="badgeProfileInner">
                    <div className="badgeProfileL">
                        <div className="badgeProfileImg" 
                            style={{backgroundImage:"url("+badge.badgeImgUrl+")", backgroundSize: "contain"}}>
                        </div>
                    </div>
                    <div className="badgeProfileR">
                        <button className='closeButton' onClick={props.handleClose}></button>
                        <h2><span>{badge.activityName}#{badge.badgeAsaId}</span><br/>{badge.activityDescription}</h2>
                        <h3><span>How To Participate</span> <br/>{badge.activityLink}</h3>
                        <h3><span>Event Time:</span><br/>{badge.startDateTime} to {badge.endDateTime}</h3>
                        <h3><span>ASA ID:</span><br/>{badge.badgeAsaId}</h3>
                        
                        <h3><span>Collected/Total</span><br/>{badge.badgeHasClaimed}/{badge.badgeTotal}</h3>
                        <h3><span>Event Organizer</span><br/>{badge.organizer}</h3>

                        <div style={{display:"flex", flexWrap:"wrap"}}>
                            <button className='badgeButton'>
                                How to get it?
                            </button>
                            <div style={{width:"180px",height:"30px", lineHeight:"12.5px",fontSize:"2px", fontWeight:"200", marginBottom:"20px"}}>Please pay close attention to the social media channel from the organizer</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default BadgeProfile;