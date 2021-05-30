import React from 'react';
import './FeedOption.css'

const FeedOption = ({Icon, title, color}) => {
    return (
        <div className='feedOption'>
            <span className='h6 d-flex align-items-center justify-content-center'>
                <Icon style={{color : color}}/>
                <span className='mx-2'>{title}</span>
            </span>
        </div>
    );
};

export default FeedOption;