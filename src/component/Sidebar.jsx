import React from "react";
import { Layout, Menu } from 'antd';

const { SubMenu } = Menu;

export default class Sidebar extends React.Component {

    render(){
        let temp ={};
        let tree ={};
        for(let i in this.props.data){
            temp[this.props.data[i].id]=this.props.data[i]
        }

        for(let i in temp){
            if(temp[i].parent_id){
                if(!temp[temp[i].parent_id].children){
                    temp[temp[i].parent_id].children= new Object();
                }
                temp[temp[i].parent_id].children[temp[i].id] = temp[i];
            }else{

            }
        }
        return
    }

}














// export default function Sidebar({data}){
//     console.log(data)
//     return data.map((element,index) =>{
//         console.log(element.children)
//         if(element.children.length != 0){
//             console.log(element.id)
//             console.log(element.name)
//             data=element.children
//             return(
//                 <SubMenu
//                     key={element.id}
//                     title={element.name}
//                     >
//                     {data=element.children}
//                     {Sidebar(data = {data})}
//                 </SubMenu>
//             )
//         }else{
//             console.log(element.id)
//             console.log(element.name)
//             return <Menu.Item key={element.id}>{element.name}</Menu.Item>
//             // return <h2>{element.name}</h2>
//         }
//     });
// }
// export default class Sidebar extends React.Component {
//     list = [
//         {
//             name: '1',
//             children: [
//                 {
//                     name: '1-1'
//                 },
//                 {
//                     name: '1-2',
//                     children: [
//                         {
//                             name: '1-2-1'
//                         }
//                     ]
//                 },
//                 {
//                     name: '1-3'
//                 }
//             ]
//         },
//         {
//             name: '2',
//             children: [
//                 {
//                     name: '2-1'
//                 }
//             ]
//         }
//     ]
//
//     render() {
//         const list: any = this.props.children || [];
//         return (
//             <div className="item">
//                 {
//                     list.map((item, index) => {
//                         return <React.Fragment key={index}>
//                             <h3>{item.name}</h3>
//                             {
//                                 // 当该节点还有children时，则递归调用本身
//                                 item.children && item.children.length ?
//                                     <Sidebar>{item.children}</Sidebar> : null
//                             }
//                         </React.Fragment>
//                     })
//                 }
//             </div>
//         )
//     }
// }