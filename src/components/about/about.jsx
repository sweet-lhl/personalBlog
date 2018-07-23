import React from 'react';

import AboutContent from './aboutContent'

import SideAbout from '../side/sideAbout'
import Album from '../side/album'

class About extends React.Component {


    render() {
        return (
            <article>
                <div className="l_box">
                    <SideAbout />
                    <Album />
                </div>
                <AboutContent />
            </article>
        );
    }
}

export default About;