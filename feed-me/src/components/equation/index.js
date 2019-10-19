import React from 'react';
import {Card, Input} from 'antd';
import Mathjs from 'mathjs';
import './index.css';

const Eqlist = ({list}) => (
    <div className="list">
        {
            list.map((item, i) => 
            <Card style={{ width: 300 }}>
                <p>{item}</p>
          </Card>,
        )}
    </div>
);

export default class Equation extends React.Component {
    state = {
        eqlist: []
    }

    onEnter = (eq) => {
        let {eqlist} = this.state;
        let newlist = [...eqlist, eq];
        this.setState({
            eqlist: newlist
        })
    }

    render() {
        return <div className="input">
            <Input size="large" placeholder="Equation" 
                onPressEnter={this.onEnter}/>
            <Eqlist list={this.state.eqlist}/>
            
        </div>;
    }
}