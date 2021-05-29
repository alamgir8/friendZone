import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import logo from './../../../img/support.png'
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Chat, Notifications } from '@material-ui/icons';
import HeaderOption from '../HeaderOption/HeaderOption';

const Header = () => {
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
                <HeaderOption Icon={Chat} title="Messaging"/>
                <HeaderOption Icon={Notifications} title="Notifications"/>
                <HeaderOption avatar="https://i.ibb.co/sJtStzv/Miftahul-Islam-image.jpg" title="Me" />
            </div>
        </div>
    );
};

export default Header;