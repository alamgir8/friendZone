import React from 'react';
import './FeedOption.css'

const FeedOption = ({Icon, title, color}) => {
    return (
        <div className='feedOption'>
            <Icon style={{color : color}}/>
            <h6>{title}</h6>
        </div>
    );
};

export default FeedOption;