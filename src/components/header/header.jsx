import React, { Component } from 'react';
import {
    Avatar ,
    Row,
    Col,
    Menu,
    Dropdown,
    Button
} from 'antd';
import './header.css';

/*import zhCN from 'antd/lib/locale-provider/zh_CN';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');*/
const menu = (
    <Menu>
        <Menu.Item>
            <a rel="noopener noreferrer">首页</a>
        </Menu.Item>
        <Menu.Item>
            <a rel="noopener noreferrer">退出登录</a>
        </Menu.Item>
    </Menu>
);

const lin8 = (
    <Menu>
        <Menu.Item>
            <a>中文</a>
        </Menu.Item>
        <Menu.Item>
            <a>English</a>
        </Menu.Item>
    </Menu>
);

class Header extends Component {
    render() {
        return (
            <div>
                <Row type="flex" justify="end" className='text-center'>
                    {/*<Col span={6}>cols</Col>
                    <Col span={6}>cols</Col>*/}
                    <Col span={6}>
                        <Dropdown overlay={lin8} placement="bottomCenter">
                            <Button>国际化</Button>
                        </Dropdown>
                    </Col>
                    <Col span={3}>
                        <Dropdown overlay={menu} placement="bottomCenter">
                             <Avatar shape="square" size="large" icon="user" src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" />
                        </Dropdown>
                    </Col>
                    <Col span={6}>人称小虹霖</Col>
                </Row>
            </div>
        );
    }
}

export default Header;
