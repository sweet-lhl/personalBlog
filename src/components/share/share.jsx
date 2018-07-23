import React from 'react';

import scrollReveal from './scrollReveal'

class Share extends React.Component {

    componentDidMount() {
        if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
            (function () {
                window.scrollReveal = new scrollReveal({reset: true});
            })();
        }
    }

    render() {
        return (
            <article>
                <div className="picbox">
                    <ul>
                        <li data-scroll-reveal="enter bottom over 1s">
                            <a href="/"><i><img src={require("../../images/b01.jpg")}/></i>
                                <div className="picinfo">
                                    <h3>个人博客模板《繁花》</h3>
                                    <span>好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li data-scroll-reveal="enter bottom over 1s">
                            <a href="/"><i><img src={require("../../images/zd01.jpg")}/></i>
                                <div className="picinfo">
                                    <h3>个人博客模板《繁花》</h3>
                                    <span>好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li data-scroll-reveal="enter bottom over 1s">
                            <a href="/"><i><img src={require("../../images/b02.jpg")}/></i>
                                <div className="picinfo">
                                    <h3>个人博客模板《繁花》</h3>
                                    <span>好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li data-scroll-reveal="enter bottom over 1s">
                            <a href="/"><i><img src={require("../../images/zd01.jpg")}/></i>
                                <div className="picinfo">
                                    <h3>个人博客模板《繁花》</h3>
                                    <span>好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </article>
        );
    }
}

export default Share;