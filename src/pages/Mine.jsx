import React from "react"

import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Row, Col, Divider } from 'antd';
import { Button } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import Tables from "./Tables";
import Selectcolumns from "./Selectcolumns";
import ButtonGenerator from "./ButtonGenerator"


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
 //只能选择今天以前的数据
  return current && current > moment().endOf('day');
}

function handleButtonClick(e){
  columns.push({title:e,dataIndex:e,key:e});

  console.log("already clicked");
}

const buttonInfo=[
  {
    title:"日期",
    value:"date",
    isAble:true,
    describe:"选中的日期",
  },
  {
    title:"事业部",
    value:"shiyebu",
    isAble:false,
    describe:""
  },
  {
    title:"bbb",
    value:"bb",
    isAble:true,
    describe:""
  },
  {
    title:"aaa",
    value:"aaaa",
    isAble:false,
    describe:""
  },
]


const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "ge",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  }
];

let options = [
  {
    name:"事业部",
    code_type:0,
    values:[
        "全部事业部",
      "服饰运动行业运营中心",
      "家电3C行业运营中心",
      "海购行业运营中心",
      "个户健康行业运营中心",
      "小米自营行业运营中心"
    ]
  },
  {
    name:"一级业务分类",
    code_type:0,
    values:[1,2,3,4,5,6,7,8]
  },
  {
    name:"二级业务分类",
    code_type:1,
    values:[1,2,3,4,5,6,7,8]
  },
  {
    name:"品牌",
    code_type:2,
    values:[1,2,3,4,5,6,7,8]
  },
  {
    name:"厂商",
    code_type:3,
    values:[1,2,3,4,5,6,7,8]
  },
  {
    name:"数据统计周期",
    code_type:4,
    values:[1,2,3,4,5,6]
  },
  {
    name:"数据统计周期",
    code_type:4,
    values:[1,2,3,4,5,6]
  },
  {
    name:"数据统计周期",
    code_type:4,
    values:[1,2,3,4,5,6]
  },
]


export default class Mine extends React.Component{

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
                <Breadcrumb.Item>创建任务-交易数据</Breadcrumb.Item>
              </Breadcrumb>
            </Content>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin:0,
                minHeight: 50,
              }}
            >
              <h3>数据筛选</h3>
              <Divider />

              <Selectcolumns options={options}/>

            </Content>
            
            <Content className="site-layout-background" style={{
                padding: 24,
                margin:"15px 0 0 0 ",
                minHeight: 0,
              }}>
              <h3>维度选择</h3>
              <Divider />
              <Row gutter={[0,18]}>
                <Col span={2}><h3>筛选维度</h3></Col>
                <Col span={22}><ButtonGenerator buttonInfo={buttonInfo}/></Col>
              </Row>
              <Row gutter={[0,18]}>
                <Col span={2}><h3>商品维度</h3></Col>
                <Col span={3}><Button block="true">gid（含名称）</Button></Col>
                <Col span={3}><Button block="true">pid（含名称）</Button></Col>
                <Col span={3}><Button block="true">商品类型</Button></Col>
                <Col span={3}><Button block="true">销售模式</Button></Col>
                <Col span={3}><Button block="true">上下架状态</Button></Col>
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
              <h3>指标选择</h3>
              <Divider />
              <Row gutter={[0,0]}>
                <Col span={2}><h3>用户行为</h3></Col>
                <Col span={2}><Button block="true">浏览PV</Button></Col>
                <Col span={2}><Button block="true">浏览UV</Button></Col>
                <Col span={2}><Button block="true">加购PV</Button></Col>
                <Col span={2}><Button block="true">加购UV</Button></Col>
                <Col span={2}><Button block="true">收藏PV</Button></Col>
                <Col span={2}><Button block="true">收藏UV</Button></Col>
                <Col span={2}><Button block="true">分享PV</Button></Col>
                <Col span={2}><Button block="true">分享UV</Button></Col>
                <Col span={2}><Button block="true">搜索曝光PV</Button></Col>
                <Col span={2}><Button block="true">搜索曝光UV</Button></Col>
                <Col span={2}></Col>
                <Col span={2} offset={2}><Button block="true">下单人数</Button></Col>
                <Col span={2} ><Button block="true" onClick={(event)=>handleButtonClick("支付人数")}>支付人数</Button></Col>
                <Col span={2} ><Button block="true" onClick={(event)=>handleButtonClick("退款人数")}>退款人数</Button></Col>
                <Col span={2} ><Button block="true" onClick={(event)=>{handleButtonClick("支付转化率")}}>支付转化率</Button></Col>
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
              <h3>表头预览</h3>
              <Divider />
              <Tables columns={columns}/>
            </Content>

            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin:"15px 0 0 0 ",
                minHeight: 0,
              }}
            >
              <div>
                <Row gutter={[0,11]}>
                  <Col span={3} offset={8}><Button size="large" block="true" href="http://localhost:3000/Home">返回</Button></Col>
                  <Col span={3}><Button size="large" type="primary" block="true" href="http://localhost:3000/Download">下一步</Button></Col>
                </Row>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}



