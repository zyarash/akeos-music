/*
 *  filename: src/_components/Footer.js
 *  description: -
 **/

/** External imports **/
import React from 'react';

/** Project imports **/

/** Project imports - CSS **/
import 'CSS/_components/footer.scss';

const SOCIAL_DATA = {
    "twitter": "https://twitter.com/akeos_",
    "facebook": "https://facebook.com/akeostunes",
    "instagram": "https://instagram.com/akeos_",
    "soundcloud": "https://soundcloud.com/akeos",
};

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.socialIcons = this.socialIcons.bind(this);
    }

    socialIcons() {
        return Object.entries(SOCIAL_DATA).map(([key, value]) => {
            return (
                <a key={`footer-social-link-${key}`} className={`footer-social-link ${key}`} href={`${value}`}>
                    <div className="footer-social">
                        <img src={require(`Images/social-icons/${key}.png`)}/>
                    </div>
                </a>
            )
        });
    }

    render() {
        return (
            <footer>
                <div className='footer-socials'>
                    { this.socialIcons() }
                </div>
                <div className="footer-text">
                    COPYRIGHT © AKEOS 2022
                </div>
            </footer>
        )
    }
}

export default Footer;
