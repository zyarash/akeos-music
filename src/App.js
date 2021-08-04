import React, { Component } from 'react';
import './App.css';

import { MAILING_LIST_LINK, SOCIAL_LINKS, RELEASES} from "./CONSTANTS";


class App extends Component {

    constructor(props) {
        super(props);
        this.displayFooterSocials = this.displayFooterSocials.bind(this);
        this.displayMusic = this.displayMusic.bind(this);
    }

    displayMusic() {
        let releases = [];
        for (const release of RELEASES) {
            releases.push(
                <a href={release.link}>
                    <div id={release.name} className="release">
                        <img className="music-img" src={release.path} alt={release.name}/>
                    </div>
                </a>
            );
        }
                                                                                                               
        return (<div id="music-grid">{releases}</div>)
    }

    displayFooterSocials() {
        let socials = [];
        for (const [key, value] of Object.entries(SOCIAL_LINKS)) {
            socials.push(
                <a className="footer-social-link" href={`${value}`}>
                    <div className="footer-social">
                        <img className={`${key} footer-social-img`} src={`${key}.png`}/>
                    </div>
                </a>
            );
        }
        return(<div className="footer-socials">{socials}</div>);
    }

    render() {
        return(
            <div id="main-contain">
                <div id="background"/>
                <nav>
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#music">MUSIC</a></li>
                        <li><a href="#tour">TOUR</a></li>
                        <li><a href="https://www.dubhub.co/">MERCH</a></li>
                    </ul>
                </nav>


                <section id="banner" className="odd">
                    <header>
                        <img id="emblem" src="emblem.gif"/>
                        <img id="logo" src="logo.png"/>
                    </header>
                    <section id="music-links">
                        <div className="music-link" id="spotify"/>
                        <div className="vr"/>
                        <div className="music-link" id="apple"/>
                        <div className="vr"/>
                        <div className="music-link" id="google"/>
                        <div className="vr"/>
                        <div className="music-link" id="amazon"/>
                    </section>

                </section>

                <section id="news" className="even">
                    <img src="CAROUSEL/MERCH.jpg"/>
                </section>

                <section id="music" className="odd">
                    { this.displayMusic() }
                </section>

                <section id="tour" className="even">
                    <div className="tour-line odd-tour-line">
                        <div className="show-date">
                            <a className="show" href="https://www.songkick.com/festivals/1632659-lost-lands/id/39935702-lost-lands-2021">
                            SEPTEMBER 24, 2021</a></div>
                        <div className="show-name">
                            <a className="show" href="https://www.songkick.com/festivals/1632659-lost-lands/id/39935702-lost-lands-2021">
                            LOST LANDS</a></div>
                        <div className="location-info">
                            <div> LEGEND VALLEY></div>
                            <div> THORNVILLE OH, USA</div>
                        </div>
                        <button onClick={() => {window.open('https://www.lostlandsfestival.com')}} type="button" className="btn btn-secondary btn-sm ticket-button">TICKETS</button>
                    </div>
                    <a className="show" href="https://www.songkick.com/concerts/39467882-shiverz-at-cervantes-masterpiece-ballroom">
                    <div className="tour-line even-tour-line strikethrough">
                        <div className="show-date">APRIL 03, 2020</div>
                        <div className="show-name">BASS INFERNO</div>
                        <div className="location-info">
                            <div>CERVANTES' MASTERPIECE BALLROOM</div>
                            <div>DENVER CO, USA</div>
                        </div>
                        <button type="button" className="btn btn-secondary btn-sm" disabled>TICKETS</button>
                    </div>
                    </a>
                    <a className="show" href="https://www.songkick.com/concerts/39504516-funtcase-at-hangar-305">
                    <div className="tour-line odd-tour-line strikethrough">
                        <div className="show-date">MARCH 19, 2020</div>
                        <div className="show-name">DPMO MMW SHOWCASE</div>
                        <div className="location-info">
                            <div>HANGAR 305</div>
                            <div>MIAMI FL, USA</div>
                        </div>
                        <button type="button" className="btn btn-secondary btn-sm" disabled>TICKETS</button>
                    </div>
                    </a>
                    <a className="show" href="https://www.songkick.com/concerts/39470745-akeos-at-fairmount-theatre">
                    <div className="tour-line even-tour-line strikethrough">
                        <div className="show-date">MARCH 06, 2020</div>
                        <div className="show-name">AKEOS PRESENTS</div>
                        <div className="location-info">
                            <div>FAIRMOUNT THEATRE</div>
                            <div>MONTREAL QC, CANADA</div>
                        </div>
                        <button type="button" className="btn btn-secondary btn-sm" disabled>TICKETS</button>
                    </div>
                    </a>
                </section>

                <section id="mailing" className="odd" onClick={ () => { window.open(MAILING_LIST_LINK)}}>
                    <div className="mail-text">JOIN THE AKEOS MAILING LIST</div>
                    <div className="mail">
                        <div className="mail-stamp"/>
                    </div>
                </section>
                <footer>
                    { this.displayFooterSocials() }
                    <div className="footer-text">
                        COPYRIGHT © AKEOS 2021
                    </div>
                </footer>
            </div>
        )
    }
}

export default App;
