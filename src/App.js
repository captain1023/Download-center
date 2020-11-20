import React from "react";
import Home from "./downloadCenter/Home";
import Mine from "./downloadCenter/Mine";
import Download from "./downloadCenter/Download";
import Setting from "./downloadCenter/Setting";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from "./component/Sidebar";

// let data=[
//     {
//         id:2,
//         parent_id:11,
//         page_name:'首页'
//     },
//     {
//         id:3,
//         parent_id:11,
//         page_name:'运营看板'
//     },
//     {
//         id:4,
//         parent_id:11,
//         page_name:'行业中心'
//     },
//     {
//         id:5,
//         parent_id:4,
//         page_name:'家电3C'
//     },  {
//         id:6,
//         parent_id:4,
//         page_name:'服饰运动'
//     },
//     {
//         id:7,
//         parent_id:11,
//         page_name:'下载任务'
//     },
//     {
//         id:8,
//         parent_id:7,
//         page_name:'创建任务'
//     },
//     {
//         id:9,
//         parent_id:7,
//         page_name:'我的任务'
//     },
//     {
//         id:10,
//         parent_id:8,
//         page_name:'交易数据'
//     },
//     {
//         id:11,
//         parent_id:0,
//         page_name:'有品数据中心'
//     },
//     {
//         id:12,
//         parent_id:8,
//         page_name:'交易数据'
//     },
// ]


// let array=[
//     {"name":"有品数据中心","id":11,"pid":-1},
//     {"name":"首页","id":2,"pid":11},
//     {"name":"运营看板","id":3,"pid":11},
//     {"name":"行业中心","id":4,"pid":11},
//     {"name":"家电3C","id":5,"pid":4},
//     {"name":"服饰运动","id":6,"pid":4},
//     {"name":"下载任务","id":7,"pid":11},
//     {"name":"创建任务","id":8,"pid":7},
//     {"name":"我的任务","id":9,"pid":7},
//     {"name":"交易数据","id":10,"pid":8},
//     {"name":"商品数据","id":12,"pid":8}];

function App() {
  return (
    <div className="App">
    {/*<Sidebar array={array}></Sidebar>*/}
      <Router>
        <Route path="/home" component={Home}></Route>
        <Route path="/mine" component={Mine}></Route>
        <Route path="/download" component={Download}></Route>
        <Route path="/setting/1" component={Setting}></Route>
      </Router>
    </div>
  );
}

export default App;
