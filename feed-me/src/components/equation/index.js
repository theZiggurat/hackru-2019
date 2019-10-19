import React from 'react';
import {Input} from 'antd';
import Mathjs from 'mathjs';

export default class Equation extends React.Component {
    state = {

    }

    render() {
        return <div className="input">
            <Input size="large" placeholder="Equation"/>
        </div>;
    }
}