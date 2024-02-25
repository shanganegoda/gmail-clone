import React from 'react'
import './Header.css'
import { Avatar, IconButton } from '@mui/material'
import { Apps, ArrowDropDown, Menu, Notifications } from '@mui/icons-material'
import { Search } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from './features/userSlice'
import { auth } from './firebase';

function Header() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        })     
    }

    return (
        <div className='header'>
            <div className='header_left'>
                <IconButton>
                    <Menu />
                </IconButton>
                <img src='https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png' />
            </div>
            <div className='header_middle'>
                <Search />
                <input placeholder='Search mail' type='text'></input>
                <ArrowDropDown />
            </div>
            <div className='header_right'>
                <IconButton>
                    <Apps />
                </IconButton>
                <IconButton>
                    <Notifications />
                </IconButton>
                    <Avatar className='avatar' onClick={signOut} src={user?.photoUrl}/>      
            </div>
        </div>
    )
}

export default Header
