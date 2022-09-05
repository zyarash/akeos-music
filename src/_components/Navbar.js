/*
 *  filename: src/_components/Navbar.js
 *  description: -
 **/

/** External imports **/
import React from 'react';

/** Project imports - JS **/
//-

/** Project imports - CSS **/
import 'CSS/_components/navbar.scss';

class Navbar extends React.Component {
    render() {
        return(
            <nav>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#music">MUSIC</a></li>
                    <li><a href="#tour">TOUR</a></li>
                    <li><a href="https://www.dubhub.co/">MERCH</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;
