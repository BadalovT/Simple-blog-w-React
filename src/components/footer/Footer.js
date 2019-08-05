import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="container">
                    <ul>
                        <li>Help blog</li>
                        <li>Careers</li>
                        <li>Pravicy</li>
                        <li>Tems</li>
                        <li>About</li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;