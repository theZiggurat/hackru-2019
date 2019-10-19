import React from 'react';
import {Card} from 'antd';
export default class EquationCard extends React.Component {
    render() {
        return <Card>
            <p>{this.props.content}</p>
        </Card>
    }
}