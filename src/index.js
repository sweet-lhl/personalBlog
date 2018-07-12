import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

import HeaderComponent from './components/header/header'
import HomeComponent from './components/home/home'
import UserComponent from './components/user/user'
import RoleComponent from './components/role/role'



//import App from './App';
import {
    Layout,
    Menu,
    Breadcrumb,
    Icon,Row,
    Col
} from 'antd';
import 'antd/dist/antd.css'
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');



const role = () => <RoleComponent />
const user = () => <UserComponent />
const home = () => <HomeComponent />

const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Router>
                <Layout style={{minHeight: '100vh'}}>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        trigger={null}
                        style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
                    >
                        <div className="logo"/>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <Link to="/">
                                    <Icon type="home"/>
                                    <span>首页</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/user">
                                    <Icon type="contacts"/>
                                    <span>用户管理</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/role">
                                    <Icon type="idcard"/>
                                    <span>角色管理</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="lock"/>
                                <span>权限管理</span>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Icon type="bars"/>
                                <span>菜单管理</span>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Icon type="profile"/>
                                <span>操作日志</span>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={<span><Icon type="user"/><span>会员</span></span>}
                            >
                                <Menu.Item key="7">
                                    <Icon type="team"/>
                                    <span>会员列表</span>
                                </Menu.Item>
                                <Menu.Item key="8">
                                    <Icon type="user-add"/>
                                    <span>添加会员</span>
                                </Menu.Item>
                                <Menu.Item key="9">
                                    <Icon type="login"/>
                                    <span>导入会员</span>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={<span><Icon type="team"/><span>Team</span></span>}
                            >
                                <Menu.Item key="10">Team 1</Menu.Item>
                                <Menu.Item key="11">Team 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="12">
                                <Icon type="file"/>
                                <span>File</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ marginLeft: 200 }}>
                        <Header style={{background: '#fff', padding: '0 20px'}}>
                            <Row gutter={8}>
                                <Col span={16}>
                                    <Icon
                                        className="trigger"
                                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                        onClick={this.toggle}
                                    />
                                    <span style={{marginLeft:8}}>首页</span>
                                </Col>
                                <Col span={8}>
                                    <HeaderComponent />
                                </Col>
                            </Row>

                        </Header>
                        <Content style={{margin: '0 16px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>首页</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>

                            <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                                <Route path="/role" component={role}/>
                                <Route path="/user" component={user}/>
                                <Route exact path="/" component={home}/>
                            </div>
                        </Content>

                        <Footer style={{textAlign: 'center'}}>
                            Ant Design ©2016 Created by Ant UED
                        </Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

ReactDOM.render(<SiderDemo/>, document.getElementById('root'));

/*if (module.hot) {
    module.hot.accept('./App', () => {
        ReactDOM.render(<SiderDemo/>, document.getElementById('root'))
    })
}*/

