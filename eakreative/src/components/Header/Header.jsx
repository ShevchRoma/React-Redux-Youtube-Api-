import React from 'react'
import './header.scss';
import {FaBars} from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai";
import {MdNotifications,MdApps} from 'react-icons/md';

const Header = () => {
    return (
        <div className="header">
        <div className="header__logo">
            <FaBars className="header__menu" size={26} />
            
            <img 
            src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
            alt=""
            className="header__logo logo" />
            <p className="header__text">KreaTube</p>
            </div>
         <div className="header__form">
            <form><input type="text" placeholder="Search"/>
            <button type="submit">
                <AiOutlineSearch size={22}/>
            </button>
            </form>
            </div>

            <div className="header__icons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/afxgzodyqw17htju1wj0" alt="avatar" className="header__icons-image"/>
            </div>

        </div>
    )
}

export default Header
