import React from 'react';

import './Button.css'

const _ = (props) => {
    return ( 
        <button
            onClick={e => props.click && props.click(props.label)} 
            className={`
            button
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}
        `}>
            {props.label}
        </button>
     );
}
 
export default _;