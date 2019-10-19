import React from 'react';
import './index.css';
import {Card} from 'antd';

export default class Result extends React.Component {
    render() {
        return <div className="result">
            {/* {this.props.result} */}
            <center>
            <Card size="small" title="Result" style={{width: "300px"}}>
                <p>{this.props.result}</p>
            </Card>
            </center>
        </div>
    }
}