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
import NavMenu from '../Nav_Manu/NavMenu';
import { useNavigate } from 'react-router-dom';

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

  // let user = localStorage.getItem("email")
  // console.log(user);
  // const navigate = useNavigate()
  // const clears = () => {
  //   localStorage.clear()
  //   navigate('/')
  // }


  return (
    <>
      {data == "user" ?
        <div class="col-lg-12 col-md-12  header_main header">
          <div className='header_menu'>
            <ul className='header_ul'>
              <li className='header_li'>
                <img className='header_img' src="stallions_name.png" alt="" />
                <img className='header_img2' src="stallions_logo.png" alt="" />
              </li>
            </ul>
            <div className='header_one'>
              <ul className='header_ul'>
                <li className='header_li'><a className='header_a' href='/'>Home</a></li>
                <li className='header_li'><a className='header_a' href='/shop'>Shop</a></li>
                <li className='header_li'><a className='header_a' href='#'>About Us</a></li>
                <li className='header_li '><a className='header_a' href='#'>Contacts</a></li>
                <li className='header_li '><a className='header_a' href='/orderedproducts'>Orders</a></li>
              </ul>
              <ul className='header_ul ul_sec '>
                <div className='header_second'>
                  <a href="/wishlist" className='fav_pp'><li className='header_li fav'><FavoriteIcon /></li></a>
                  <a href="/cart">
                    <li className='header_li cart'>
                      <IconButton aria-label="cart">
                        <StyledBadge badgeContent={viewCart.length} color="secondary">
                          <ShoppingCartIcon />
                        </StyledBadge>
                      </IconButton>
                    </li>
                  </a>
                  <a className='search_pp'><li className='header_li search'><Search_list></Search_list></li></a>
                  {/* {user ? <a onClick={clears}>   LOG OUT</a> : <a href="/registration">    Register</a>} */}
                </div>
              </ul>
            </div>
            <div className="burgers">
              <NavMenu></NavMenu>
              <div className='search_head_pp'>
                <Search_list></Search_list>
              </div>
            </div>
          </div>
        </div >
        : data == "Admin" ?
          <div class="col-lg-12 col-md-12  header_main header">
            <div className='header_menu'>
              <ul className='header_ul'>
                <li className='header_li'>
                  <img className='header_img' src="stallions_name.png" alt="" />
                  <img className='header_img2' src="stallions_logo.png" alt="" />
                </li>
              </ul>
              <div className='header_one'>
                <ul className='header_ul'>
                  <li className='header_li'><a className='header_a' href='/'>Home</a></li>
                  <li className='header_li'><a className='header_a' href='/addproduct'>Add Product</a></li>
                  <li className='header_li'><a className='header_a' href='/adminviewproduct'>View Product</a></li>
                  <li className='header_li '><a className='header_a' href='/userdetails'>User Details</a></li>
                </ul>
                <ul className='header_ul ul_sec '>
                  <div className='header_second'>
                    {/* <a href="/wishlist" className='fav_pp'><li className='header_li fav'><FavoriteIcon /></li></a> */}
                    {/* <a href="/cart">
                      <li className='header_li cart'>
                        <IconButton aria-label="cart">
                          <StyledBadge badgeContent={viewCart.length} color="secondary">
                            <ShoppingCartIcon />
                          </StyledBadge>
                        </IconButton>
                      </li>
                    </a> */}
                    {/* <a className='search_pp'><li className='header_li search'><Search_list></Search_list></li></a> */}
                  </div>
                </ul>
              </div>
              <div className="burgers">
                <NavMenu></NavMenu>
                <div className='search_head_pp'>
                  <Search_list></Search_list>
                </div>
              </div>
            </div>
          </div >
          :
          <div class="col-lg-12 col-md-12  header_main header">
            <div className='header_menu'>
              <ul className='header_ul'>
                <li className='header_li'>
                  <img className='header_img' src="stallions_name.png" alt="" />
                  <img className='header_img2' src="stallions_logo.png" alt="" />
                </li>
              </ul>
              <div className='header_one'>
                <ul className='header_ul'>
                  <li className='header_li'><a className='header_a' href='/'>Home</a></li>
                  <li className='header_li'><a className='header_a' href='#'>About Us</a></li>
                  <li className='header_li '><a className='header_a' href='#'>Contacts</a></li>
                </ul>
                <ul className='header_ul ul_sec '>
                  <li className='header_lii '><a className='header_a' href='/registration'>Register</a></li>
                </ul>
                {/* <ul className='header_ul ul_sec '>
                  <div className='header_second'>
                    <a href="/wishlist" className='fav_pp'><li className='header_li fav'><FavoriteIcon /></li></a>
                    <a href="/cart">
                      <li className='header_li cart'>
                        <IconButton aria-label="cart">
                          <StyledBadge badgeContent={viewCart.length} color="secondary">
                            <ShoppingCartIcon />
                          </StyledBadge>
                        </IconButton>
                      </li>
                    </a>
                    <a className='search_pp'><li className='header_li search'><Search_list></Search_list></li></a>
                  </div>
                </ul> */}
              </div>
              <div className="burgers">
                <NavMenu></NavMenu>
                <div className='search_head_pp'>
                  <Search_list></Search_list>
                </div>
              </div>
            </div>
          </div >
      }
    </>
  )
}
