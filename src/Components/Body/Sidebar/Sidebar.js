import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import './Sidebar.css';

const Sidebar = () => {
    const user = useSelector(selectUser)
    const recentItem = (topic) => (
        <div className="sidebar-recentItem">
            <span className="sidebar-hash">#</span>
            <span>{topic}</span>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <img src="https://i.ibb.co/TKTfGG6/linked-In-bg.png" alt="" />
                <Avatar src={user?.photoUrl} className="sidebar-avatar">
                    {user?.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <p>Who viewed you</p>
                    <p className="sidebar-statNumber">1,458</p>
                </div>
                <div className="sidebar-stat">
                    <p>Views on post</p>
                    <p className="sidebar-statNumber">1,027</p>
                </div>
            </div>
            <div className="sidebar-bottom">
                <p>Recent</p>
                {recentItem("recatjs")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("developer")}
            </div>
        </div>
    );
};

export default Sidebar;