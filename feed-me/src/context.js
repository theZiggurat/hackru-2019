import {parser} from 'mathjs';

class _Context {
    constructor() {
        this.parser = parser();
        this.equation = "";
        this.fields = {};
    }

    setEquation(equation) {
        this.equation = equation;
    }

    addField(key, val){
        let value = Number(val);
        if(value === NaN) return;
        this.parser.set(key, value);
    }

    evaluate() {
        return this.parser.evaluate(this.equation);
    }
}

const Context = new _Context;
export default Context;