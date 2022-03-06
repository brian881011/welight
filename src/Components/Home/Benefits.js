import React, { Component } from 'react';
import '../../Styles/Benefits.css';

export default class Benefits extends Component {
    render() {
        return (
            <div className="benefits">
                <div id="benefits_title"><h1>A little extra makes a big difference</h1></div>
                <div id="benefits_content">
                    <div className='benefitsBlock'>
                        <div className='benefitsImage1'></div>
                        <div className='benefitsDetails'>
                            <h3>Engage the Community</h3>
                            <p>
                                NFT badges empower projects with a vector to build up a highly engaged community.
                            </p>
                        </div>
                    </div>
                    <div className='benefitsBlock'>
                        <div className='benefitsImage2'></div>
                        <div className='benefitsDetails'>
                            <h3>Enhance the Experience</h3>
                            <p>
                                Create memories and footprints with your active members as your project and community grow.
                            </p>
                        </div>
                    </div>
                    <div className='benefitsBlock'>
                        <div className='benefitsImage3'></div>
                        <div className='benefitsDetails'>
                            <h3>Unlock the potential</h3>
                            <p>
                                Acknowledge your loyal supporters in the community, and grant them with exclusive rewards.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
