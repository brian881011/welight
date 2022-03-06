import React from 'react';
import { Badge } from './Badge';
import PropTypes from 'prop-types';
import '../Styles/BadgeContainer.css';

export const BadgeContainer = ({BadgeJson}) => {
    return (
        <div className="badge_container">
            {BadgeJson.map((e, key)=>{
                return (
                    <Badge key={key} badgeJson={BadgeJson} activityName={e.activityName} badgeAsaId = {e.badgeAsaId} badgeTotal={e.badgeTotal} 
                    badgeHasClaimed={e.badgeHasClaimed} countdown={e.countdown} badgeImgUrl={e.badgeImgUrl}/>
            );})}
                


        </div>
    )
}
