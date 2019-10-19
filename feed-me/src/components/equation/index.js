import React from 'react';
import {Card, Input} from 'antd';
import Mathjs from 'mathjs';
import './index.css';
import EquationCard from './equation';
import Context from '../../context';

const Eqlist = ({list, onClick}) => (
    <div className="list">
        {
            list.map((item, i) => 
            <EquationCard id={i} onClick={onClick}
             content={item}/>
        )}
    </div>
);

const {Search} = Input;

export default class Equation extends React.Component {
    state = {
        eqlist: []
    }

    onEnter = (e) => {
        console.log(e);
        
        let {eqlist} = this.state;
        let newlist = [...eqlist, e];
        this.setState({
            eqlist: newlist
        })
        Context.setEquation(e)
        this.props.resultUpdate(Context.evaluate());
    }

    onClickEquation = (e) => {
        Context.setEquation(e);
    }

    render() {
        return <div className="input">
            <Search size="large" placeholder="Equation" 
                onSearch={value => this.onEnter(value)}/>
            {/* <Eqlist list={this.state.eqlist} onClick={this.onClickEquation}/> */}
            
        </div>
    }
}