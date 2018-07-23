import React from 'react';

import {connect} from 'react-redux';

class Album extends React.Component {

    render() {
        return (
            <div className="wdxc">
                <h2>我的相册   {this.props.user}</h2>
                <ul>
                    <li><a href="/"><img src={require('../../images/7.jpg')}/></a></li>
                    <li><a href="/"><img src={require('../../images/8.jpg')}/></a></li>
                    <li><a href="/"><img src={require('../../images/9.jpg')}/></a></li>
                    <li><a href="/"><img src={require('../../images/10.jpg')}/></a></li>
                    <li><a href="/"><img src={require('../../images/11.jpg')}/></a></li>
                    <li><a href="/"><img src={require('../../images/12.jpg')}/></a></li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}
export default connect(mapStateToProps)(Album);