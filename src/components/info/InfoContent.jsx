import React from 'react';


import '../../css/info.css'

class InfoContent extends React.Component {

    render() {
        return (
            <div className="infosbox">
                <div className="newsview">
                    <h3 className="news_title">个人博客，属于我的小世界！</h3>
                    <div className="bloginfo">
                        <ul>
                            <li className="author">作者：<a href="/">小虹霖</a></li>
                            <li className="lmname"><a href="/">学无止境</a></li>
                            <li className="timer">时间：2018-5-13</li>
                            <li className="view">4567人已阅读</li>
                        </ul>
                    </div>
                    <div className="tags">
                        <a href="/" target="_blank">个人博客</a> &nbsp; 
                        <a href="/" target="_blank">小世界</a></div>
                    <div className="news_about">
                        <strong>简介</strong>
                        个人博客，用来做什么？我刚开始就把它当做一个我吐槽心情的地方，也就相当于一个网络记事本，
                        写上一些关于自己生活工作中的小情小事，也会放上一些照片，音乐。每天工作回家后就能访问自己的网站，
                        一边听着音乐，一边写写文章。
                    </div>
                </div>
                <div className="share">
                    <p className="diggit"><a
                        href="JavaScript:makeRequest('/e/public/digg/?classid=3&amp;id=19&amp;dotop=1&amp;doajax=1&amp;ajaxarea=diggnum','EchoReturnedText','GET','');"> 很赞哦！ </a>(<b
                        id="diggnum">
                        <script type="text/javascript" src="/e/public/ViewClick/?classid=2&id=20&down=5"></script>
                        13</b>)
                    </p>
                </div>
                <div className="nextinfo">
                    <p>上一篇：<a href="/news/life/2018-03-13/804.html">作为一个设计师,如果遭到质疑你是否能恪守自己的原则?</a></p>
                    <p>下一篇：<a href="/news/life/">返回列表</a></p>
                </div>
                <div className="news_pl">
                    <h2>文章评论</h2>
                    <ul>
                        <div className="gbko"></div>
                    </ul>
                </div>
            </div>
    );
    }
    }

    export default InfoContent;
