import React from "react"
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { Row, Col} from 'antd';

export default function ButtonGenerator({buttonInfo,buttonCallBack}){

    return(
        <div>
            <Row>
                {

                    buttonInfo && buttonInfo.map((element,index) =>{
                        return <Col span={3}><Button block="true" dataIndex={element.dataIndex} key={index} type={element.isAble ? "primary":""}
                        onClick={()=>{
                            //传回父类column的值
                                buttonCallBack(element)
                            }
                        }

                        >{element.title}</Button></Col>
                    })
                }
            </Row>
        </div>
    )
}
