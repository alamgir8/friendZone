import { Avatar } from '@material-ui/core';
import { VscComment } from "react-icons/vsc";
import { HiThumbUp } from "react-icons/hi";
import { IoMdShareAlt } from "react-icons/io";
import React, {forwardRef} from 'react';
import InputOption from './InputOption';
import './Post.css'

const Post = forwardRef(({ name, description, message, photoURL }, ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post-header">
            <Avatar src={photoURL}>{name[0]}</Avatar>
            <div className="post-info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post-body">
            <p>{message}</p>
        </div>
        <div className="post-buttons">
            <InputOption Icon={HiThumbUp} title="Like" color="gray"/>
            <InputOption Icon={VscComment} title="Comment" color="gray"/>
            <InputOption Icon={IoMdShareAlt} title="Share" color="gray"/>
        </div>
    </div>
);
});

export default Post;