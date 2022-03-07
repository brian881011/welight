import React from 'react';
import '../Styles/BadgeProfile.css';

export const BadgeProfile = (props) => {
    const asaId = props.asaId;
    const badgeJson = props.badgeJson;
    const badge = badgeJson.filter(badge => badge.badgeAsaId === asaId)[0];
    
    
    return(
            <div className="badgeProfile">
                <div className="badgeProfileInner">
                    <div className="badgeProfileL">
                        <div className="badgeProfileImg" 
                            style={{backgroundImage:"url("+badge.badgeImg+")", backgroundSize: "contain"}}>
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