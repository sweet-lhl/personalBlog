import React from 'react';


import Side from '../side/side'
import InfoContent from './InfoContent'

class Info extends React.Component {

    render() {
        return (
            <article>
                <div className="l_box">
                    <Side />
                </div>
                <InfoContent />
            </article>
        );
    }
}

export default Info;
