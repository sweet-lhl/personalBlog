import React from 'react';

class SideAbout extends React.Component {

    render() {
        return (
            <div className="about_me">
                <h2>关于我</h2>
                <ul>
                    <i><img src={require('../../images/4.jpg')} /></i>
                    <p><b>小虹霖</b>，一个90后草根站长！17年入行。一直潜心研究web前端技术，一边工作一边积累经验，分享一些个人博客模板，以及SEO优化等心得。</p>
                </ul>
            </div>
        );
    }
}
export default SideAbout;