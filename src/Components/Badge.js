import React, {useState} from 'react';
import PropTypes from 'prop-types';
import BadgeProfile from './BadgeProfile';
import '../Styles/Badge.css';

export const Badge = ({badge}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState(null);

    let badgeJson = badge.badgeJson;
    let activityName  = badge.activityName;
    let badgeAsaId = badge.badgeAsaId;
    let badgeTotal = badge.badgeTotal;
    let badgeHasClaimed = badge.badgeHasClaimed;
    let badgeImgUrl = badge.badgeImgUrl;

    const togglePopup = () => {
        setIsOpen(!isOpen);
        setId(badgeAsaId);
      }

    return (
        <>
            <div className="badge" onClick={togglePopup}>
                <div className='bottomTag'></div>
                <div className="badge_contentFrame">
                    <div className='contentBuffer'></div>
                    <div className="activityName">{activityName}</div>
                    <div className="badgeAsaId">ASA id: <span>{badgeAsaId}</span></div>
                    <div className="badgeTotal">Total: <span>{badgeTotal}</span></div>
                    <div className="collected">Collected: <span>{badgeHasClaimed}</span></div>

                </div>
                <div className="badgeImg" style={{backgroundImage:"url("+badgeImgUrl+")", backgroundSize: "contain"}}></div>
                <div className="triangle"></div>
            </div>
            {isOpen && <BadgeProfile badge={badge} handleClose={togglePopup}/>}
        </>
    )
}
