import React from 'react';
import {
    Table,
    Icon,
    Switch,
    Form,
    Popconfirm,
    message ,
    Divider
} from 'antd';

const FormItem = Form.Item;

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 150,
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 70,
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'Action',
    key: 'action',
    width: 360,
    render: (text, record) => (
        <span>
      <a href="javascript:;">Action 一 {record.name}</a>
      <Divider type="vertical"/>
          <Popconfirm title="您确定删除此任务吗？" onConfirm={confirm} onCancel={cancel} okText="是"
                      cancelText="否">
              <a href="#">Delete</a>
          </Popconfirm>
      <Divider type="vertical"/>
      <a href="javascript:;" className="ant-dropdown-link">
        More actions <Icon type="down"/>
      </a>
    </span>
    ),
}];
function confirm(e) {
    console.log(e);
    message.success('Click on Yes');
}

function cancel(e) {
    console.log(e);
    message.error('Click on No');
}
const data = [];
for (let i = 1; i <= 100; i++) {
    data.push({
        key: i,
        name: 'lhlcr',
        age: `${i}2`,
        address: `New York No. ${i} Lake Park`,
        description: `My name is lhlcr, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
    });
}

const expandedRowRender = record => <p>{record.description}</p>;
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const scroll = {y: 500};
const pagination = {position: 'bottom'};

class Home extends React.Component {
    state = {
        bordered: true,
        loading: false,
        pagination,
        size: 'middle',
        expandedRowRender,
        title: () => 'this is a title',
        showHeader,
        footer,
        rowSelection: {},
        scroll: undefined,
    }

    handleToggle = (prop) => {
        return (enable) => {
            this.setState({[prop]: enable});
        };
    }

    handleExpandChange = (enable) => {
        this.setState({expandedRowRender: enable ? expandedRowRender : undefined});
    }

    handleTitleChange = (enable) => {
        this.setState({title: enable ? title : undefined});
    }

    handleHeaderChange = (enable) => {
        this.setState({showHeader: enable ? showHeader : false});
    }

    handleFooterChange = (enable) => {
        this.setState({footer: enable ? footer : undefined});
    }

    handleRowSelectionChange = (enable) => {
        this.setState({rowSelection: enable ? {} : undefined});
    }

    handleScollChange = (enable) => {
        this.setState({scroll: enable ? scroll : undefined});
    }


    render() {
        const state = this.state;
        return (
            <div>
                <div className="components-table-demo-control-bar">
                    <Form layout="inline">
                        <FormItem label="边框">
                            <Switch checked={state.bordered} onChange={this.handleToggle('bordered')}/>
                        </FormItem>
                        <FormItem label="加载">
                            <Switch checked={state.loading} onChange={this.handleToggle('loading')}/>
                        </FormItem>
                        <FormItem label="标题">
                            <Switch checked={!!state.title} onChange={this.handleTitleChange}/>
                        </FormItem>
                        <FormItem label="列标题">
                            <Switch checked={!!state.showHeader} onChange={this.handleHeaderChange}/>
                        </FormItem>
                        <FormItem label="页脚">
                            <Switch checked={!!state.footer} onChange={this.handleFooterChange}/>
                        </FormItem>
                        <FormItem label="扩展">
                            <Switch checked={!!state.expandedRowRender} onChange={this.handleExpandChange}/>
                        </FormItem>
                        <FormItem label="复选框">
                            <Switch checked={!!state.rowSelection} onChange={this.handleRowSelectionChange}/>
                        </FormItem>
                        <FormItem label="固定标题">
                            <Switch checked={!!state.scroll} onChange={this.handleScollChange}/>
                        </FormItem>
                    </Form>
                </div>
                <Table {...this.state} columns={columns} dataSource={data}/>
            </div>
        );
    }
}

export default Home;
