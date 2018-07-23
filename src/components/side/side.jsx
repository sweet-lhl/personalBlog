import React from 'react';

import SideAbout from './sideAbout'
import Album from './album'
import Search from './search'
import Fenlei from './fenlei'
import Tuijian from './tuijian'
import Guanzhu from './guanzhu'

class Side extends React.Component {

    render() {
        return (
            <div>
                <SideAbout />
                <Album />
                <Search />
                <Fenlei />
                <Tuijian title="站长推荐"/>
                <Guanzhu />
            </div>
        );
    }
}
export default Side;