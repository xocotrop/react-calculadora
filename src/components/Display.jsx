import React from 'react';

import './Display.css'

const _ = (props) => {
    return ( 
        <div className="display">
            {props.value}
        </div>
     );
}
 
export default _;