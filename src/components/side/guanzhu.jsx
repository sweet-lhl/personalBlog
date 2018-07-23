import React from 'react';

class Guanzhu extends React.Component {

    render() {
        return (
            <div className="guanzhu">
                <h2>关注我 么么哒</h2>
                <ul>
                    <img src= {require('../../images/wx.jpg')}/>
                </ul>
            </div>
        );
    }
}
export default Guanzhu;