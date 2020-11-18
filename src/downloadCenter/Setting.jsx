import React, { useEffect, useState } from "react"
import { Layout, Menu, Breadcrumb,Button} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Tables from "./Tables";
import { Form, Input, DatePicker, TimePicker, Select, Cascader, InputNumber } from 'antd';
import { Row, Col, Divider } from 'antd';

import SettingForm from "./SettingForm"
import { Redirect } from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { RangePicker } = DatePicker;
const tableColumns = [
    {
      title: "维度名称",
      dataIndex: "name",
    },
    {
      title: "创建人",
      dataIndex: "creator",
    },
    {
      title: "维度描述",
      dataIndex: "description",
    }
  ];
  
export default function Setting(){
    const [tableInfo,setTableInfo] = useState([]);

    console.log("TableINFO")
    console.log(tableInfo);

    const [form] = Form.useForm();
    const onFinish = ()=>{

    }
    useEffect(()=>{
        //之后API获取按钮数据
        //setTableInfo([]);
      })

    const onFormCallBack = (info) =>{

        var newTable = []
        let i = 0
        for(i = 0;i<tableInfo.length;i++){
            const tmp = {}
            tmp.key = i;
            tmp.name = tableInfo[i].name;
            tmp.creator = tableInfo[i].creator;
            tmp.description = tableInfo[i].description;
            newTable.push(tmp)
        }

        var InfoKey = {}
        InfoKey.key = i;
        InfoKey.name = info.name;
        InfoKey.creator=info.creator;
        InfoKey.description=info.description;

        newTable.push(InfoKey);
        
      
        console.log(newTable);
        setTableInfo(newTable);
        console.log(tableInfo);
        
    }
    const formItemLayout = {
        labelCol: {
          xs: { span: 20 },
          sm: { span: 5 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 12 },
        },
      };

      const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };

      const onReset =()=> {
        form.resetFields();
      }


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
                <Breadcrumb.Item>设置</Breadcrumb.Item>
                <Breadcrumb.Item>创建维度</Breadcrumb.Item>
              </Breadcrumb>

                 <SettingForm onFormCallBack={onFormCallBack}/>


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
              { <Tables columns={tableColumns} datasource = {tableInfo}/> }
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
                <Row gutter={0,11}>
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