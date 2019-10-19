import React from 'react';
import './index.css';
import Fields from '../input';
import Equation from '../equation';
import Result from '../result';

export default class Controller extends React.Component {
  state = {
    result: ""
  }

  updateResult = (r) => {
    this.setState({
        result: r
    });
    console.log(r);
  }

  render() {
    return <div className="App">
      <Fields></Fields>
      <Equation resultUpdate={this.updateResult}/>
      <Result result={this.state.result}></Result>
    </div>
  }
}
