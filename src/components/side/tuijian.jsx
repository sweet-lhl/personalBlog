import React from 'react';

class Tuijian extends React.Component {

    render() {
        return (
            <div className="tuijian">
                <h2>{this.props.title}</h2>
                <ul>
                    <li><a href="/">你是什么人便会遇上什么人</a></li>
                    <li><a href="/">帝国cms 列表页调用子栏目，没有则不显示栏目名称</a></li>
                    <li><a href="/">第二届 优秀个人博客模板比赛参选活动</a></li>
                    <li><a href="/">个人博客模板《绅士》后台管理</a></li>
                    <li><a href="/">你是什么人便会遇上什么人</a></li>
                    <li><a href="/">帝国cms 列表页调用子栏目，没有则不显示栏目名称</a></li>
                    <li><a href="/">第二届 优秀个人博客模板比赛参选活动</a></li>
                    <li><a href="/">个人博客模板《绅士》后台管理</a></li>
                </ul>
            </div>
        );
    }
}
export default Tuijian;