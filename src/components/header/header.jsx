import React from 'react';
import {
    Link,
} from 'react-router-dom';


class Header extends React.Component {
    state = {
        isNav: 0,
    }

    handleNav = (e) => {
        this.setState({
            isNav: e
        })
    }

    render() {
        const {isNav} = this.state
        return (
            <header>
                <div className="logo"><a href="/">小虹霖个人博客</a></div>
                <nav id="nav">
                    <ul>
                        <li>
                            <Link to="/" id={isNav === 0 ? 'selected' : ''} onClick={() => {
                                this.handleNav(0)
                            }}>网站首页</Link>
                        </li>
                        <li>
                            <Link to="/share" id={isNav === 1 ? 'selected' : ''} onClick={() => {
                                this.handleNav(1)
                            }}>我的相册</Link>
                        </li>
                        <li>
                            <Link to="/list" id={isNav === 2 ? 'selected' : ''} onClick={() => {
                                this.handleNav(2)
                            }}>我的日记</Link>
                        </li>

                        <li>
                            <Link to="/about" id={isNav === 3 ? 'selected' : ''} onClick={() => {
                                this.handleNav(3)
                            }}>关于我</Link>
                        </li>

                        <li>
                            <Link to="/gbook" id={isNav === 4 ? 'selected' : ''} onClick={() => {
                                this.handleNav(4)
                            }}>留言</Link>
                        </li>
                        <li>
                            <Link to="/info" id={isNav === 5 ? 'selected' : ''} onClick={() => {
                                this.handleNav(5)
                            }}>内容页</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;