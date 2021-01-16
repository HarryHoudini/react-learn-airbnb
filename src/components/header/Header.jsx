import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';

function Header() {
    return (
        <div className='header'>
            <img className='header__icon' src='https://i.pinimg.com/originals/cf/9d/1a/cf9d1a566053275b76ddc464f6dc24c8.png' alt='' />

            <div className='header__center'>
                <input type="text"/>
                <SearchIcon/>

            </div>

            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon></LanguageIcon>
                <ExpandMoreIcon></ExpandMoreIcon>
                <Avatar/>

            </div>
        </div>
    )
}

export default Header

