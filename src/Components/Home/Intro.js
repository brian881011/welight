import React, { Component } from 'react';
import '../../Styles/Intro.css';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';

export default class Intro extends Component {
    render() {
        return (
            <div id="intro">
                <div id="intro_description">
                    <h1>WeLight</h1>
                    <h5>Into The World Of Digital Collectibles That Is Meaningful, And Full Of Possibilities.
                        <br /><br />
                        A Platform For Creating, Discovering And Collecting NFT Event Badges In A Simple Way.
                    </h5>
                    <button id="listEvent" >
                        List your event
                    </button>
                    <button id="exploreGallery">Explore the gallery</button>

                </div>
            </div>  
        )
    }
}
