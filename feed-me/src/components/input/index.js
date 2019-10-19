import React from 'react';
import {Input} from 'antd';
import 'antd/dist/antd.css';
import './index.css'

export default class Fields extends React.Component {

    state = {

    }

    render() {
        return <div className="input">
            <Input size="large" placeholder="Input"/>
        </div>;
    }
}