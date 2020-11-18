import React from "react"

import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import { Button } from 'antd';

  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;

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
              
              <SubMenu key="sub4" icon={<NotificationOutlined />} title="设置">
                <Menu.Item key="7" href= "http://localhost:3000/setting">添加维度</Menu.Item>   
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
              <div className="middle">
                <Button className="bigbutton">
                  <h2>流量数据</h2>
                  <p>平台,页面,楼层,坑位的预览,曝光,点击等数据</p>
                  <p>数据更新时间:</p>
                </Button >
                <Button className="bigbutton">          
                  <h2>交易数据</h2>
                  <p>事业部,类目,商品维度的下单,支付等数据</p>
                  <p>数据更新时间:</p>
                </Button>
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
