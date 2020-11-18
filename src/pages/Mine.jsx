import React, { useEffect, useState } from "react"

import ReactDOM from 'react-dom';
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
const { RangePicker } = DatePicker;
  
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

let table;
function handleButtonClick(e){
  columns.push({title:e,dataIndex:e,key:e});
  table =<Tables columns={columns}/>;

  console.log("already clicked");
}

const target = [
  {title:"浏览PV",dataIndex:"浏览PV"},
  {title:"加购PV",dataIndex:"加购PV"},
  {title:"收藏PV",dataIndex:"收藏PV"},
  {title:"分享PV",dataIndex:"分享PV"},
  {title:"搜索曝光PV",dataIndex:"搜索曝光PV"},
  {title:"下单人数",dataIndex:"下单人数"},
  {title:"支付人数",dataIndex:"支付人数"},
  {title:"退款人数",dataIndex:"退款人数"},
  {title:"支付转化率",dataIndex:"支付转化率"},

]


const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "ge",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  }
];

let options = [
  "全部事业部",
  "服饰运动行业运营中心",
  "家电3C行业运营中心",
  "海购行业运营中心",
  "个户健康行业运营中心",
  "居家生活行业运营中心",
  "日用文创行业运营中心",
  "小米自营行业运营中心"
];


let selecteDeminsion = [
  {title:"日期",dataIndex:"日期"},
  {title:"事业部",dataIndex:"事业部"},
  {title:"bbbb",dataIndex:"bbbb"},
  {title:"aaaa",dataIndex:"aaaa"},
]

let productsDeminsion = [
  {title:"gid(含名称)",dataIndex:"gid",isAble:false,describe:"gid"},
  {title:"pid(含名称)",dataIndex:"pid",isAble:false,describe:"pid"},
  {title:"商品类型",dataIndex:"商品类型",isAble:false,describe:"商品类型"},
  {title:"销售模式",dataIndex:"销售模式",isAble:false,describe:"销售模式"},
  {title:"上架状态",dataIndex:"上架状态",isAble:false,describe:"上架状态"},


]

const button=[
  {
    title:"日期",
    dataIndex:"date",
    isAble:true,
    describe:"选中的日期",
    
  },
  {
    title:"事业部",
    dataIndex:"shiyebu",
    isAble:false,
    describe:"",
  }
]    

export default function Mine(){
  //筛选纬度
  const [buttonInfo,setButtonInfo] = useState();
  //商品纬度
  const [dimension,setDimension] = useState([]);
  //表格
  const [columns,setColumns] = useState([]);


  useEffect(()=>{
    //之后API获取按钮数据
    setButtonInfo(button);
    setDimension(productsDeminsion);
  })

  //父组件传递给子组件的回调函数 用来动态更新table数据
  const onbuttonCallBack = (element) => {


    let newElement = {...element};
      newElement.isAble = !newElement.isAble;
      const isExist = (ele)=>{
        return (ele.dataIndex === element.dataIndex);
      }

      if(newElement.isAble){
        //如果说isAble的值=== true
        //那么新的element应该加入column
        //column中必不存在这个element
        columns.push(element);
      }else{
        //新元素的isAble的值===false
        //从column中删除这个element
        let columnIndex =  columns.findIndex(isExist)
        columns.splice(columnIndex,1);
      }
      setColumns(columns.slice())

      //处理button

      let index = buttonInfo.findIndex(isExist)
      buttonInfo[index].isAble = !buttonInfo[index].isAble
      setButtonInfo(buttonInfo.slice())

      console.log(buttonInfo);
      console.log("=========");
      console.log(columns);
  }

  const onDimensionCallBack = (element) => {

    let newElement = {...element};
    newElement.isAble = !newElement.isAble;
    const isExist = (ele)=>{
      return (ele.dataIndex === element.dataIndex);
    }

    if(newElement.isAble){
      //如果说isAble的值=== true
      //那么新的element应该加入column
      //column中必不存在这个element
      columns.push(element);
    }else{
      //新元素的isAble的值===false
      //从column中删除这个element
      let columnIndex =  columns.findIndex(isExist)
      columns.splice(columnIndex,1);
    }

    setColumns(columns.slice())

    //处理dimension
    let index = dimension.findIndex(isExist)
    dimension[index].isAble = !dimension[index].isAble
    setButtonInfo(dimension.slice())
    console.log(dimension)
    console.log("=========");
    console.log(columns);

}

const onTargetCallBack = (element) => {

  let newElement = {...element};
  newElement.isAble = !newElement.isAble;
  const isExist = (ele)=>{
    return (ele.dataIndex === element.dataIndex);
  }

  if(newElement.isAble){
    //如果说isAble的值=== true
    //那么新的element应该加入column
    //column中必不存在这个element
    columns.push(element);
  }else{
    //新元素的isAble的值===false
    //从column中删除这个element
    let columnIndex =  columns.findIndex(isExist)
    columns.splice(columnIndex,1);
  }

  setColumns(columns.slice())

  //处理traget
  let index = target.findIndex(isExist)
  target[index].isAble = !target[index].isAble
  setButtonInfo(target.slice())
  console.log(target)
  console.log("=========");
  console.log(columns);

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
              <Row gutter={[0,18]}>
                <Col span={2}>事业部</Col>
                <Col span={4}><Selectcolumns options={options}/></Col>
                <Col span={2} offset={1}>一级业务分类</Col>
                <Col span={4}><Selectcolumns options={options}/></Col>
                <Col span={2} offset={1}>二级业务分类</Col>
                <Col span={4}><Selectcolumns options={options}/></Col>
              </Row>
              <Row gutter={[0,18]}>
                <Col span={2}>品牌</Col>
                <Col span={4}><Selectcolumns options={options}/></Col>
                <Col span={2} offset={1}>厂商</Col>
                <Col span={4}><Selectcolumns options={options}/></Col>
                <Col span={2} offset={1}>数据统计周期</Col>
                <Col span={5}><RangePicker disabledDate={disabledDate} /></Col>
              </Row>
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
                <Col span={22}><ButtonGenerator buttonInfo={buttonInfo} buttonCallBack={onbuttonCallBack}/></Col>
              </Row>



              <Row gutter={[0,18]}>
                <Col span={2}><h3>商品维度</h3></Col>
                <Col span={22}><ButtonGenerator buttonInfo={dimension} buttonCallBack={onDimensionCallBack}/></Col>
             
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
                <Col span={22}><ButtonGenerator buttonInfo={target} buttonCallBack={onTargetCallBack}/></Col>

                
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
              { <Tables columns={columns}/> }
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




