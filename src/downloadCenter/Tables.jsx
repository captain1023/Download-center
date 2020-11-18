import React from "react"
import 'antd/dist/antd.css';
import '../downloadCenter/downloadCenterCss/index.css';
import { Table } from 'antd';

export default class Tables extends React.Component {

    constructor(props){
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        let column = [];
        column = [...this.props.columns];
        this.setState({
            column : column
        })
    }



    render(){
        return(
           <div>
               <Table columns={this.props.columns} dataSource={this.props.datasource}/>
           </div>
        )
    }
}
