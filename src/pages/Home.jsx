import React from "react"

import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import { Button } from 'antd';
import ShuJvLeiXing from "./ShuJvLeiXing";
import Sidebar from "./Sidebar";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


const buttonInfo=[
  {
    title:"日期",
    value:"0",
    isAble:true,
    describe:"选中的日期"
  },
  {
    title:"日期",
    value:"1",
    isAble:true,
    describe:"选中的日期"
  },
  {
    title:"日期",
    value:"2",
    isAble:true,
    describe:"选中的日期"
  },
  {
    title:"日期",
    value:"3",
    isAble:true,
    describe:"选中的日期"
  },
];

let data=[
  {
    id:2,
    parent_id:11,
    page_name:'首页'
  },
  {
    id:3,
    parent_id:11,
    page_name:'运营看板'
  },
  {
    id:4,
    parent_id:11,
    page_name:'行业中心'
  },
  {
    id:5,
    parent_id:4,
    page_name:'家电3C'
  },  {
    id:6,
    parent_id:4,
    page_name:'服饰运动'
  },
  {
    id:7,
    parent_id:11,
    page_name:'下载任务'
  },
  {
    id:8,
    parent_id:7,
    page_name:'创建任务'
  },
  {
    id:9,
    parent_id:7,
    page_name:'我的任务'
  },
  {
    id:10,
    parent_id:8,
    page_name:'交易数据'
  },
  {
    id:11,
    parent_id:-1,
    page_name:'有品数据中心'
  },
  {
    id:12,
    parent_id:8,
    page_name:'交易数据'
  },


]

export default class Home extends React.Component{

  render(){
    return(
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          </Menu>
        </Header>
        <Layout>
          <Menu>
            <Sidebar data ={data}></Sidebar>
          </Menu>
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
                <Breadcrumb.Item>创建任务</Breadcrumb.Item>
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
              <h3>选择数据类型</h3>
               <Divider />
              <div>
                <ShuJvLeiXing buttonInfo = {buttonInfo}></ShuJvLeiXing>
              </div>
            </Content>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin:"15px 0 0 0 ",
                minHeight: 0,
              }}
            >
              <div className="middle">
                <Button size="large" href="http://localhost:3000/mine">下一步</Button>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
