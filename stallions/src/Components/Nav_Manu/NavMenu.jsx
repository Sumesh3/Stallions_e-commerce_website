import React from 'react'
import './NavMenu.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Person from '@mui/icons-material/Person';
import SwapHoriz from '@mui/icons-material/SwapHoriz';
import Store from '@mui/icons-material/Store';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import PreviewIcon from '@mui/icons-material/Preview';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Search_list from '../Navbarf2/Search_list';

export default function NavMenu() {
    let user = localStorage.getItem("email")
    console.log(user);
    const navigate = useNavigate()
    const clears = () => {
        localStorage.clear()
        navigate('/')
    }

    let data = localStorage.getItem("role")

    return (
        <>
            {data == "user" ?
                <div className='col-lg-12 col-md-12  menu_dropdown dropdown'>
                    <button className='menu_dropbtn dropbtn'><MenuIcon /></button>
                    <div className='menu_dropdown-content dropdown-content'>
                        <a href="/shop"><Store />   Shop</a>
                        <a href="/wishlist"><FavoriteIcon></FavoriteIcon>   Wishlist</a>
                        <a href="/cart"><ShoppingCartIcon />  Cart</a>
                        <a href="/changepassword"><ManageAccountsIcon />   Change Password</a>
                        {user ? <a onClick={clears}> <LogoutIcon />  LOG OUT</a> : <a href="/registration"><Person />     Register</a>}
                    </div>
                </div>
                : data == "Admin" ?
                    <div className='col-lg-12 col-md-12  menu_dropdown dropdown'>
                        <button className='menu_dropbtn dropbtn'><MenuIcon /></button>
                        <div className='menu_dropdown-content dropdown-content'>
                            <a href="/addproduct"><AddIcon />   Add Product</a>
                            <a href="/adminviewproduct"><PreviewIcon />   View Product</a>
                            <a href="/changepassword"><ManageAccountsIcon />   Change Password</a>
                            {user ? <a onClick={clears}> <LogoutIcon />  LOG OUT</a> : <a href="/registration"><Person />     Register</a>}
                        </div>
                    </div>
                    :
                    <div className='col-lg-12 col-md-12  menu_dropdown dropdown'>
                        <button className='menu_dropbtn dropbtn'><MenuIcon /></button>
                        <div className='menu_dropdown-content dropdown-content'>
                            <a href="/shop"><Store />   Shop</a>
                            {user ? <a onClick={clears}> <LogoutIcon />  LOG OUT</a> : <a href="/registration"><Person />     Register</a>}
                        </div>
                    </div>
            }
        </>
    )
}
