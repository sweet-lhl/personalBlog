import React from 'react';

import ListContent from './listContent'
import Fenlei from '../side/fenlei'

import Search from '../side/search'
import Tuijian from '../side/tuijian'
import Cloud from '../side/cloud'

class List extends React.Component {

    render() {
        return (
            <article>
                <div className="l_box">
                    <Search />
                    <Fenlei />
                    <Tuijian title="站长推荐"/>
                    <Tuijian title="点击排行"/>
                    <Cloud />
                </div>
                <ListContent />
            </article>
        );
    }
}

export default List;