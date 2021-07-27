import React from 'react';

const Button = ({ symbol, handleClick, color }) => {
    return (
        <div
            className='button-wrapper'
            onClick={() => handleClick(symbol)}
            style={{ backgroundColor: color }}
        >
            {symbol}
        </div>
    );
};

export default Button;