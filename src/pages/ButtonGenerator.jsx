import React from "react"
import 'antd/dist/antd.css';
import '../index.css';
import { Button } from 'antd';
import { Row, Col} from 'antd';

export default class ButtonGenerator extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            visibleState : null
        };
    }
    render(){
        return(
            <div>
                <Row>
                    {
                        this.props.buttonInfo.map((element,index) =>{
                            return <Col span={3}><Button block="true" value={element.value} key={index} type={element.isAble ? "primary":""} onClick={()=>{element.isAble=!element.isAble; this.forceUpdate()}}>{element.title}</Button></Col>
                        })
                    }
                </Row>
            </div>
        )
    }
}