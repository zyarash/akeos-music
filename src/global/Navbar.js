/*
 *  filename: src/global/Navbar.js
 **/

/** External imports **/
import React, { Component } from 'react';

/** Project imports **/
//-

class Navbar extends Component {
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
