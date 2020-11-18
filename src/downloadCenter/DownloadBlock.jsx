import React from "react"
import 'antd/dist/antd.css';
import '../downloadCenter/downloadCenterCss/index.css';

import { Button, Row, Col } from 'antd';

function handleClick(value){
    console.log(value);
}

export default class DownloadBlock extends React.Component {

    render(){
        return(
            <div>
                <Row gutter={[15,0]}>
                    {
                        this.props.buttonInfo.map((element,index) =>{
                            return <Col span={24/this.props.buttonInfo.length}>
                                <Button className="bigbutton"
                                        block="true" value={element.title}
                                        onClick={()=>handleClick(element.value)}>
                                    <h2>{element.title}<br/>{element.describe}</h2>
                                </Button>
                            </Col>
                        })
                    }
                </Row>
            </div>
        )
    }
}