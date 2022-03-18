import React, { Component } from 'react';
import Intro from './Intro';
import Underway from './Underway';
import ComingSoon from './ComingSoon';
import Benefits from './Benefits';
import Instructions from './Instructions';
import Header from '../Header';

export default class Home extends Component {
    render() {
        return (
            <div id="backGroundWelight">
            <Header />
            <div className="body">
                <Intro />
                <Benefits />
                <Instructions />
                <Underway />
                <ComingSoon />  
            </div>
            </div>
        )
    }
}
