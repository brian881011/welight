import React, { Component } from 'react';
import Intro from './Intro';
import Underway from './Underway';
import ComingSoon from './ComingSoon';
import Benefits from './Benefits';
import Instructions from './Instructions';

export default class Home extends Component {
    render() {
        return (
            <>
                <Intro />
                <Benefits />
                <Instructions />
                <Underway />
                <ComingSoon />  
            </>
        )
    }
}
