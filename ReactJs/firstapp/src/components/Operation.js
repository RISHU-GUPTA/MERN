import React from 'react';
import Button from './Button';
const Operation = (props) => {
    return (
        <div>
        <Button onClick={props.add} but='+'/>
        <Button but='-'/>
        <Button but='*'/>
        <Button but='/'/>
        </div>
    );
}

export default Operation;