import React from 'react';

import GbookContent from './gbookContent'

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
                <GbookContent />
            </article>
        );
    }
}

export default About;