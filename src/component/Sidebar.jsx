import React from "react";
import { Layout, Menu } from 'antd';

const { Sider, Header } = Layout;

const SubMenu = Menu.SubMenu;

function arrayToTree(array) {
    let map = {}; //存着每一个层级的引用，以id为key，方便查找
    let result = [];
    for(let i = 0; i < array.length; i++) {
        let obj = array[i];
        let clone = JSON.parse(JSON.stringify(obj));
        //如果需要改字段名，请在这里添加代码进行修改
        console.log(clone)
        if(obj.pid == 11) {
            result.push(clone);
        }
        map[clone.id] = clone;
        if(map[clone.pid]) {
            if(!map[clone.pid].children) map[clone.pid].children = [];
            map[clone.pid].children.push(clone);
        }
    }
    return result;
}


export default class Sidebar extends React.Component {

    componentWillMount() {

    }

    // 递归实现----菜单渲染
    renderMenu = (data) => {
        console.log(data)
        return data.map((item)=>{
            if(item.children){
                return <SubMenu  key={item.id} title={item.name}>
                    { this.renderMenu(item.children) }
                </SubMenu>
            }
            return <Menu.Item key={item.id} title={item.name}>{item.name}</Menu.Item>
        })
    }

    render(){
        let tree = arrayToTree(this.props.array);
        return(
            <React.Fragment>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                            theme = "dark">
                            {this.renderMenu(tree)}
                        </Menu>
                    </Sider>
            </React.Fragment>
        )
    }

}
