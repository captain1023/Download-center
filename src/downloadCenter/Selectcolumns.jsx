import React from "react";
import 'antd/dist/antd.css';
import '../downloadCenter/downloadCenterCss/index.css';
import { Select, Row, Col } from 'antd';
import moment from "moment";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

const { Option } = Select;

function disabledDate(current) {
    // Can not select days before today and today
    return current && current > moment().endOf("day");
}

let clickResult=[

    ];

function handleChange(value,name) {
    for (let i = 0; i < clickResult.length; i += 1) {
        if (clickResult[i].selectName == name) {
            clickResult[i].selectValue = value
            return
        }
    }
    clickResult.push({selectName:name,selectValue:value})
    console.log(clickResult);
}

export default class Selectcolumns extends React.Component {

    render(){
        let renderInfo=[];
        this.props.options.map((element,index) =>{
                switch(element.code_type){
                    case 0:
                        renderInfo[index] = [
                            <Col span={8} key={index}>
                                <Row>
                                    <Col span={8}> <h3>{element.name}</h3></Col>
                                    <Col span={16}><Select key={element.name}
                                                           showSearch
                                                           placeholder={"请选择"+element.name}
                                                           style={{ width: "100%" }}
                                                           onChange={(value)=>handleChange(value,element.name,)}>
                                        {element.values.map((item,index) => {
                                            return <Option value={item} key={item}>{ item }</Option>
                                        })}
                                    </Select></Col>
                                </Row>
                            </Col>
                        ]
                        break;
                    case 1:
                        renderInfo[index] = [
                            <Col span={8} key={index}>
                                <Row>
                                    <Col span={8}> <h3>{element.name}</h3></Col>
                                    <Col span={16}><Select key={element.name}
                                                           mode="multiple"
                                                           showSearch
                                                           placeholder={"请选择"+element.name}
                                                           style={{ width: "100%" }}
                                                           onChange={(value)=>handleChange(value,element.name,)}>
                                        {element.values.map((item,index) => {
                                            return <Option value={item} key={index}>{ item }</Option>
                                        })}
                                    </Select></Col>
                                </Row>
                            </Col>
                        ]
                        break;
                    case 2:
                        renderInfo[index] = [
                            <Col span={8} key={index}>
                                <Row>
                                    <Col span={8}> <h3>{element.name}</h3></Col>
                                    <Col span={16}><RangePicker disabledDate={disabledDate} /></Col>
                                </Row>
                            </Col>
                        ]
                        break;
                    case 3:
                        renderInfo[index] = [
                            <Col span={8} key={index}>
                                <Row>
                                    <Col span={8}> <h3>{element.name}</h3></Col>
                                    <Col span={16}><Select key={element.name}
                                                           placeholder={"请选择"+element.name}
                                                           style={{ width: "100%" }}
                                                           onChange={(value)=>handleChange(value,element.name,)}>
                                        {element.values.map((item,index) => {
                                            return <Option value={item} key={index}>{ item }</Option>
                                        })}
                                    </Select></Col>
                                </Row>
                            </Col>
                        ]
                        break;
                    case 4:
                        renderInfo[index] = [
                            <Col span={8} key={index}>
                                <Row>
                                    <Col span={8}> <h3>{element.name}</h3></Col>
                                    <Col span={16}><Select key={element.name}
                                                           mode="multiple"
                                                           showSearch={false}
                                                           placeholder={"请选择"+element.name}
                                                           style={{ width: "100%" }}
                                                           onChange={(value)=>handleChange(value,element.name,)}>
                                        {element.values.map((item,index) => {
                                            return <Option value={item} key={index}>{ item }</Option>
                                        })}
                                    </Select></Col>
                                </Row>
                            </Col>
                        ]
                        break;
                    default:
                        console.log(`Sorry, there is a fetal error`);
            }
        });

        return(
            <div>
                <Row gutter={[16,8]}>
                    {renderInfo}
                </Row>
            </div>
        )
    }
}