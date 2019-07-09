import React, { Component } from 'react';
import Input from '../components/Input';
import Operation from '../components/Operation';
import Output from '../components/Output';
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.fno=0;
        this.sno=0;
        this.res=0;
        this.state = {fno:this.fno ,sno:this.sno,res:this.res};
    }
    first(event){
      this.setState({fno:Number(event.target.value)}) ;
      console.log(event.target.value);
    }
    second(event){
        this.setState({sno:Number(event.target.value)}) ;
    }
     add(){
         let x=this.state.fno+this.state.sno;
         this.setState({res:x});
     }
    render() {
        return (
            <div>
            <Input ifirst={this.first.bind(this)} isecond={this.second.bind(this)}/>
            <Operation add={this.add} />
            <Output result={this.state.res}/>
            </div>
        );
    }
}

export default Calculator;