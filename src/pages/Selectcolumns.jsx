import React from "react"
import 'antd/dist/antd.css';
import '../index.css';
import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

export default class Selectcolumns extends React.Component {

    render(){
        return(
            <div>
                <Select showSearch defaultValue={this.props.options[0]} style={{ width: 180 }} onChange={handleChange}>
                {
                    this.props.options.map((element,index) =>{
                        return <Option value={element} key={index}>{ element }</Option>
                    })
                }
                </Select>
            </div>
        )
    }
}