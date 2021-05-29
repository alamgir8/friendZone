import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import './Feed.css'
import FeedOption from '../FeedOption/FeedOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventIcon from '@material-ui/icons/Event';
import MoodIcon from '@material-ui/icons/Mood';

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed-container">
                <div className="feed-input">
                    <CreateIcon/>
                    <form>
                        <input type="text"/>
                        <button type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed-input-option">
                    <FeedOption Icon={ImageIcon} title='Photo' color='#70B5F9'/>
                    <FeedOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/>
                    <FeedOption Icon={EventIcon} title='Event' color='#70B5F9'/>
                    <FeedOption Icon={MoodIcon} title='Activity' color='#70B5F9'/>
                </div>
            </div>
        </div>
    );
};

export default Feed;