import React from "react"

import 'antd/dist/antd.css';
import '../downloadCenter/downloadCenterCss/index.css';
import {Layout, Menu, Breadcrumb, Row, Col} from 'antd';
import { Select } from 'antd';
import { Divider } from 'antd';
import { Button, Space } from 'antd';
import Selectcolumns from "./Selectcolumns";
import moment from "moment";
import { DatePicker, Input } from 'antd';
import Tables from "./Tables";
import Sidebar from "../component/Sidebar";
const { Option } = Select;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { RangePicker } = DatePicker;

let options =  [{
        name:"任务状态",
        code_type:4,
        values:['进行中','已完成','未完成']
    }];

function disabledDate(current) {
    //只能选择今天以前的数据
    return current && current > moment().endOf('day');
}

let columns = [
    {
        title: "任务ID",
        dataIndex: "任务ID",
        key: "任务ID",
    },
    {
        title: "任务状态",
        dataIndex: "任务状态",
        key: "任务状态"
    },
    {
        title: "耗时",
        dataIndex: "耗时",
        key: "耗时"
    },
    {
        title: "创建人",
        dataIndex: "创建人",
        key: "创建人"
    },
    {
        title: "创建时间",
        dataIndex: "创建时间",
        key: "创建时间"
    },
    {
        title: '操作',
        key: '操作',
        render: (text, record) => (
            <Space size="middle">
                <Button>编辑 {record.任务ID}</Button>
                <Button>下载数据</Button>
            </Space>
        ),
    },
];

let datasource = [
    {
        key: '1',
        任务ID: 1101,
        任务状态: '进行中',
        耗时: 12,
        创建人: 'linqi',
        创建时间: 32,
    },
    {
        key: '2',
        任务ID: 1102,
        任务状态: '已完成',
        耗时: 13,
        创建人: 'zyf',
        创建时间: 32,
    },
    {
        key: '3',
        任务ID: 1103,
        任务状态: '未完成',
        耗时: 15,
        创建人: 'zyf',
        创建时间: 32,
    },
];

function handleChange(value) {
    console.log(`selected ${value}`);
}
let array=[
    {"name":"有品数据中心","id":11,"pid":-1},
    {"name":"首页","id":2,"pid":11},
    {"name":"运营看板","id":3,"pid":11},
    {"name":"行业中心","id":4,"pid":11},
    {"name":"家电3C","id":5,"pid":4},
    {"name":"服饰运动","id":6,"pid":4},
    {"name":"下载任务","id":7,"pid":11},
    {"name":"创建任务","id":8,"pid":7},
    {"name":"我的任务","id":9,"pid":7},
    {"name":"交易数据","id":10,"pid":8},
    {"name":"商品数据","id":12,"pid":8}];

export default class Download extends React.Component{

    render(){
        return(
            <Layout>
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    </Menu>
                </Header>
            </Layout>
            <Layout>
                <Sidebar array={array}></Sidebar>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 10,
                                margin:'15px 0 15px 0'
                            }}
                        >
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>首页</Breadcrumb.Item>
                                <Breadcrumb.Item>下载任务</Breadcrumb.Item>
                                <Breadcrumb.Item>我的任务</Breadcrumb.Item>
                            </Breadcrumb>
                        </Content>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 30,
                                margin:0,
                                minHeight: 200,
                            }}
                        >
                            <h3>查找任务</h3>
                            <Divider />
                            <Row gutter={[0,18]}>
                                <Col span={2}>任务ID</Col>
                                <Col span={4}><Input placeholder="请输入ID" /></Col>
                                <Col span={2} offset={1}>任务创建时间</Col>
                                <Col span={4}><RangePicker disabledDate={disabledDate}/></Col>
                                <Col span={2} offset={1}>任务状态</Col>
                                <Col span={4}><Select placeholder="请输入任务状态" style={{ width: 160 }} onChange={handleChange}>
                                    <Option value="已完成">已完成</Option>
                                    <Option value="进行中">进行中</Option>
                                    <Option value="未完成">未完成</Option>
                                </Select></Col>
                            </Row>
                            <Row gutter={[0,18]}>
                                <Col span={2}>创建人</Col>
                                <Col span={4}><Input placeholder="请输入创建人" /></Col>
                                <Col span={2} offset={4}><Button type="primary" block="true">查询</Button></Col>
                            </Row>
                        </Content>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin:"15px 0 0 0 ",
                                minHeight: 0,
                            }}
                        >
                            <h3>任务管理</h3>
                            <Divider />
                            <Tables columns={columns} datasource={datasource}/>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
