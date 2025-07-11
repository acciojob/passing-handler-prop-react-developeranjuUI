
import React, { useState } from 'react';
import '../styles/Child.css';

const Selection = ({ applyColor }) => {
    const [ style, setStyle ] = useState({ background: '' });

    const handleClick = () => {
        applyColor(setStyle);
    }

    return (
        <div className='fix-box' style={style} onClick={handleClick}>
            Selection
        </div>
    )
}

export default Selection;