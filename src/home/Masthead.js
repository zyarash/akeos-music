/*
 *  filename: src/home/Masthead.js
 **/

/** External imports **/
import React, { Component } from 'react';

/** Project imports **/
//-

const STREAMING_DATA = {
    "spotify": "https://open.spotify.com/artist/01GwQuZRU4oG83fF2ZOyQs",
    "apple": "https://music.apple.com/us/artist/akeos/1197196877",
    "google": "https://music.youtube.com/channel/UCq07lKTiw0Os27BBbz_Ay_g",
    "amazon": "https://www.amazon.com/s?k=Akeos", 
}

class Masthead extends Component {
    constructor(props) {
        super(props);
        this.streamingIcons = this.streamingIcons.bind(this);
    }

    streamingIcons() {
        return Object.entries(STREAMING_DATA).map(([key, value]) => {
            return (
                <React.Fragment key={`streaming-link-${key}`}>
                    <div className="music-link" id={`${key}`} onClick={() => { window.open(value) }}/>
                    <div className="vr"/>
                </React.Fragment>
            )
        });
    }

    render() {
        return (
            <section id="banner" className="odd">
                    <header>
                        <img id="emblem" src={require("Images/emblem.gif")}/>
                        <img id="logo" src={require("Images/logo.png")}/>
                    </header>
                <section id='music-links'>
                    { this.streamingIcons() }
                </section>
            </section>
        )
    }
}

export default Masthead;
