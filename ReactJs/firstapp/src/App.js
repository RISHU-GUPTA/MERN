import React, { Component } from 'react';
//import {Header} from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//Day-1
// export const App=()=> {
//     var title='ram';
//     return(
//         <div>
//         <Header name={title}/>
//         </div>
//     )
// }


//Day-2
class App extends Component {
    constructor(props) {
        super(props);
        this.conter=0;
        this.state = { count:this.conter };
    }
    increment(){
        this.conter++;
        this.setState({count:this.conter})
    }
    render() {
        return (
            <div>
            <div>I am a smart comonent {this.props.title}</div>
            <button onClick={this.increment.bind(this)}>Click to count</button>
            <p>{this.state.count}</p>
            </div>
        );
    }
}

export default App;
