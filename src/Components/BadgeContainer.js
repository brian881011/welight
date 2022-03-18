import React from 'react';
import { Badge } from './Badge';
import PropTypes from 'prop-types';
import '../Styles/BadgeContainer.css';

export const BadgeContainer = ({BadgeJson}) => {
    return (
        <div className="badge_container">
            {BadgeJson.map((e, key)=>{
                return (
                    <Badge key={key} badge={e}/>
            );})}
                


        </div>
    )
}
