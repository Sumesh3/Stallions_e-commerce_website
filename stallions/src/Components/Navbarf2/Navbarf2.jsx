import React from 'react'
import './Navbarf2.css'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Search_list from './Search_list';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


export default function Navbarf2() {


  const [viewCart, setviewCart] = useState([])
  const id = localStorage.getItem('login_id')
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/view_cart_api/${id}`).then((response) => {
      setviewCart(response.data.data)
      console.log(response.data.data);
    }).catch((error) => {
      console.log(error);
    })
  }, [])


  let data = localStorage.getItem("role")


  return (
    <>

      {data == "user" ?
        <div class="col-lg-12 col-md-6  header_main header">
          <div className='header_menu'>
            <ul className='header_ul'>
              <li className='header_li'>
                <img className='header_img' src="/stallions_name.png" alt="" />
                <img className='header_img2' src="/stallions_logo.png" alt="" />
              </li>
              <li className='header_li'><a className='header_a' href='/'>Home</a></li>

              <li className='header_li'><a className='header_a' href='/shop'>Shop</a></li>
              <li className="dropdown-nav dropdown">
                <a className='dropbtn header_a' href='#'>Pages</a>
                <div class="dropdown-content-nav dropdown-content">
                  <a className='header_d' href='#'>About Us</a>
                  <a className='header_d' href='#'>Shop Details</a>
                  <a className='header_d' href='#'>Shopping Cart</a>
                  <a className='header_d' href='#'>Check Out</a>
                  <a className='header_d' href='#'>Blog Details</a>
                </div>
              </li>
              <li className='header_li'><a className='header_a' href='#'>Blog</a></li>
              <li className='header_li '><a className='header_a' href='#'>Contacts</a></li>
            </ul>
            <ul className='header_ul ul_sec'>

              
              <a href="/wishlist"><li className='header_li fav'><FavoriteIcon /></li></a>

              <a href="/cart">
                <li className='header_li cart'>
                  <IconButton aria-label="cart" className='cart'>
                    <StyledBadge badgeContent={viewCart.length} color="secondary">
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                </li>
              </a>
              <a><li className='header_li search'><Search_list></Search_list></li></a>

            </ul>

          </div>
        </div>
        : data == "Admin" ?
          <div class="col-lg-12 col-sm-3  header_main header">
            <div className='header_menu col-lg-12 col-sm-6'>
              <ul className='header_ul'>
                <li className='header_li'>
                  <img className='header_img' src="stallions_name.png" alt="" />
                  <img className='header_img2' src="stallions_logo.png" alt="" />
                </li>
                <li className='header_li'><a className='header_a' href='/'>Home</a></li>
                <li className="dropdown-nav dropdown">
                  <a className='dropbtn header_a'>Manage Product</a>
                  <div class="dropdown-content-nav dropdown-content">
                    <a className='header_d' href='/addproduct'>Add Product</a>
                    <a className='header_d' href='/adminviewproduct'>View Product</a>
                  </div>
                </li>
                <li className='header_li'><a className='header_a' href='/userdetails'>User Details</a></li>
              <li className='header_li'><a className='header_a' href='/shop'>Shop</a></li>
              </ul>
              <ul className='header_ul ul_sec'>
                <a href="/wishlist"><li className='header_li fav'><FavoriteIcon /></li></a>
                <a href="/cart">
                  <li className='header_li cart'>
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={viewCart.length} color="secondary">
                        <ShoppingCartIcon />
                      </StyledBadge>
                    </IconButton>
                  </li>
                </a>
                <a><li className='header_li search'><Search_list></Search_list></li></a>
              </ul>

            </div>
          </div>
          :
          <div class="col-lg-12 col-md-12  header_main header">
            <div className='header_menu'>
              <ul className='header_ul'>
                <li className='header_li'>
                  <img className='header_img' src="stallions_name.png" alt="" />
                  <img className='header_img2' src="stallions_logo.png" alt="" />
                </li>
                <li className='header_li'><a className='header_a' href='/'>Home</a></li>

                <li className='header_li'><a className='header_a' href='/shop'>Shop</a></li>
                <li className="dropdown-nav dropdown">
                  <a className='dropbtn header_a' href='#'>Pages</a>
                  <div class="dropdown-content-nav dropdown-content">
                    <a className='header_d' href='#'>About Us</a>
                    <a className='header_d' href='#'>Shop Details</a>
                    <a className='header_d' href='#'>Shopping Cart</a>
                    <a className='header_d' href='#'>Check Out</a>
                    <a className='header_d' href='#'>Blog Details</a>
                  </div>
                </li>
                <li className='header_li'><a className='header_a' href='#'>Blog</a></li>
                <li className='header_li '><a className='header_a' href='#'>Contacts</a></li>
              </ul>
              <ul className='header_ul ul_sec'>
                <a href="/wishlist"><li className='header_li fav'><FavoriteIcon /></li></a>
                <a href="/cart">
                  <li className='header_li cart'>
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={viewCart.length} color="secondary">
                        <ShoppingCartIcon />
                      </StyledBadge>
                    </IconButton>
                  </li>
                </a>
                <a><li className='header_li search'><Search_list></Search_list></li></a>
              </ul>

            </div>
          </div>
      }
    </>
  )
}
