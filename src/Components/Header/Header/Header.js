import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import logo from './../../../img/support.png'
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Chat, Notifications } from '@material-ui/icons';
import { AiFillSetting } from "react-icons/ai";
import { IoMdHelpCircle, IoMdLogOut } from "react-icons/io";
import HeaderOption from '../HeaderOption/HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../../features/userSlice';
import { auth } from '../../Firebase/Firebase';
import { Dropdown, DropdownButton} from 'react-bootstrap';

const Header = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const logoutUser = () => {
        dispatch(logout());
        auth.signOut()
    }
    return (
        <div className="header">
            <div className="header-left">
                <img src={logo} alt="logo"/>
                
                <div className="header-search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header-right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Zone"/>
                <HeaderOption Icon={Chat} title="Message"/>
                <HeaderOption Icon={Notifications} title="Notifications"/>
                <DropdownButton title='Profile'>
                    <Dropdown.ItemText>
                        <Avatar src={user?.photoUrl} className="header-avatar mx-auto">
                            {user?.email[0]}
                        </Avatar></Dropdown.ItemText>
                    <Dropdown.ItemText className='text-center my-2'>{user?.displayName}</Dropdown.ItemText>
                    <Dropdown.Item as="button"><AiFillSetting/> Setting & Privacy</Dropdown.Item>
                    <Dropdown.Item as="button"> <IoMdHelpCircle/> Help & Support</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={logoutUser} ><IoMdLogOut/>  Log Out</Dropdown.Item>
                </DropdownButton>
            </div>
                    
        </div>
    );
};

export default Header;