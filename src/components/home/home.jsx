import React from 'react';


import Side from '../side/side'
import HomeContent from './homeContent'

class Home extends React.Component {

    render() {
        return (
            <article>
                <div className="l_box">
                    <Side />
                </div>
                <HomeContent />
            </article>
        );
    }
}

export default Home;
