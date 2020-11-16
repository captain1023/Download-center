import React from "react"
import 'antd/dist/antd.css';
import '../index.css';
import { Table } from 'antd';

export default class Tables extends React.Component {

    constructor(props){
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        const column = [];

        this.setState({
            column : column
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.setState(this.props.columns);
    }

    render(){
        return(
           <div>
               <Table columns={this.props.columns} dataSource={this.props.datasource}/>
           </div>
        )
    }
}

