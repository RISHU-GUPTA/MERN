import React from 'react';
import {Header} from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
export const App=()=> {
    var title='ram';
    return(
        <div>
        <Header name={title}/>
        </div>
    )
}