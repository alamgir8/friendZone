import React from 'react';
import "./InputOption.css";

function InputOption({Icon, title, color}) {
    return (
        <div className="inputOption">
            <span className='d-flex align-items-center justify-content-center'>
                <span className='h4 mt-1'><Icon style={{ color: color}}/></span>
                <span className='mx-2'>{title}</span>
            </span>
        </div>

    );
}

export default InputOption;