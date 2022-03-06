import React, { Component } from 'react';
import '../../Styles/Instructions.css';

export default class Instructions extends Component {
    render() {
        return (
            <div className="instructions">
                <div id="instructions_title"><h1>How it works</h1></div>
                <div id="instructions_content">
                    <div className='instructionsBlock'>
                        <div className='instructionsImage1'></div>
                        <div className='instructionsDetails'>
                            <h2>List your event</h2>
                            <p>
                                You just need to fill out a simple form with event details and upload a badge design. we will let you know when your NFT badge is ready
                            </p>
                        </div>
                    </div>
                    <div className='instructionsBlock'>
                        <div className='instructionsImage2'></div>
                        <div className='instructionsDetails'>
                            <h2>Distribute to your community</h2>
                            <p>
                                If you are holding an event like an AMA, simply send the registry link to the attendees during the session. Afterwards, you just need to publish a further badge collection link to your audience. 
                            </p>
                        </div>
                    </div>
                    <div className='instructionsBlock'>
                        <div className='instructionsImage3'></div>
                        <div className='instructionsDetails'>
                            <h2>Encourage Conversation</h2>
                            <p>
                                It is a great idea to encourage your members to share the badge and engage with others on social media
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
