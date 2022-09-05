/*
 *  filename: src/home/Music.js
 **/

/** External imports **/
import React from 'react';

/** Project imports **/
//-

class Music extends React.Component {
    constructor(props) {
        super(props);
        this.releases = this.releases.bind(this);
        this.state = {
            ready: 0,
            releases: null,
        }
    }

    componentDidMount() {
        fetch('/api/releases')
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                'releases': data.releases,
                'ready': 1,
            });
        });
    }

    releases() {
        if (!this.state.ready) {
            return [];
        }
        return this.state.releases.map((release) => {
            return (
                <a key={release.name} href={release.link}>
                    <div id={release.name} className="release">
                        <img className="music-img" src={release.artwork} alt={release.name}/>
                    </div>
                </a>
            );
        });
    }

    render() {
        return (
            <section id="music" className="odd">
                <h2 className='section-header'> Music </h2>
                <div id='music-grid'>
                    { this.releases() }
                </div>
            </section>
        )
    }
}

export default Music;
