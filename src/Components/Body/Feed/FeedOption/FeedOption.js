import React from 'react';
import './FeedOption.css'

const FeedOption = ({Icon, title, color}) => {
    return (
        <div className='feedOption'>
            <Icon style={{color : color}}/>
            <h4>{title}</h4>
        </div>
    );
};

export default FeedOption;