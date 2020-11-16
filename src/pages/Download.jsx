import React from "react"

import 'antd/dist/antd.css';
import '../index.css';
import {Layout, Menu, Breadcrumb, Row, Col} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import { Button, Space } from 'antd';
import Selectcolumns from "./Selectcolumns";
import moment from "moment";
import { DatePicker, Input } from 'antd';
import Tables from "./Tables";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { RangePicker } = DatePicker;

let options = [
    "全部","进行中","已完成"
]

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
]

export default class Download extends React.Component{

    render(){
        return(
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item key="0">首页</Menu.Item>
                            <SubMenu key="sub1" icon={<UserOutlined />} title="运营看板">
                                <Menu.Item key="2">查询表格</Menu.Item>
                                <Menu.Item key="3">标准列表</Menu.Item>
                                <Menu.Item key="4">卡片列表</Menu.Item>
                                <SubMenu key="搜索列表" title="搜索列表">
                                    <Menu.Item key="41">搜索列表(文章)</Menu.Item>
                                    <Menu.Item key="42">搜索列表(项目)</Menu.Item>
                                    <Menu.Item key="43">搜索列表(应用)</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<LaptopOutlined />} title="行业中心">
                                <Menu.Item key="5">基础详情页</Menu.Item>
                                <Menu.Item key="6">高级详情页</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<NotificationOutlined />} title="下载任务">
                                <Menu.Item key="7">创建任务</Menu.Item>
                                <Menu.Item key="8">我的任务</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
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
                                padding: 24,
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
                                <Col span={4}><Selectcolumns options={options}/></Col>
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
