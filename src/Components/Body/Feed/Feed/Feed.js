import React, { useEffect, useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import './Feed.css'
import FeedOption from '../FeedOption/FeedOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventIcon from '@material-ui/icons/Event';
import MoodIcon from '@material-ui/icons/Mood';
import Post from '../Post/Post';
import firebase from 'firebase'
import { db } from '../../../Firebase/Firebase';

const Feed = () => {
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => (
            setPosts(
                snapshot.docs.map((doc) => (
                {
                    id : doc.id,
                    data : doc.data()
                }
            )))
        ))
    }, [])

    const sendPosts = (e) => {
        e.preventDefault()

        db.collection("posts").add({
            name : 'Alamgir',
            description : 'Web-Developer',
            message : input,
            photoUrl : '',
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
    }

    return (
        <div className="feed">
            <div className="feed-container">
                <div className="feed-input">
                    <CreateIcon/>
                    <form>

                        <input onChange={(e) => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPosts} type='submit'>Send</button>

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

            {
                posts.map(({id, data : {name, description, message, photoUrl}}) => (
                    <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                    />
                ))
            }
           

        </div>
    );
};

export default Feed;