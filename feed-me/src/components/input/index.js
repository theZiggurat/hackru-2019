import React from 'react';
import {Input} from 'antd';
import 'antd/dist/antd.css';
import './index.css'
import Context from '../../context';

const {Search} = Input;

export default class Fields extends React.Component {

    state = {

    }

    onEnter = (value) => {
        let vals = value.split(":");
        console.log(vals);
        Context.addField(vals[0], vals[1]);
    }
    

    render() {
        return <div className="input">
            <Search size="large" placeholder="Input"
                onSearch={this.onEnter}/>
        </div>;
    }
}