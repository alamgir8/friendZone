import React, { useState } from 'react';
import Post from '../Body/Post/Post';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    const sendPost = e => {
        e.preventDefault();
    }

    return (
        <div>
            {posts.map((post) => (
                <Post />
            ))}
            <Post name="Md. Miftahul Islam" description="This is a test" message="Wow this worked"/>
        </div>
    );
};

export default Feed;