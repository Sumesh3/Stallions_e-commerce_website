import React from 'react'
import './Navbarf2.css'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



export default function Navbarf2() {

  let data = localStorage.getItem("role")


  return (
    <>

      {data == "user" ?
        <div class="col-lg-12 col-md-6  header_main header">
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

              <a href="#"><li className='header_li search'><SearchIcon /></li></a>
              <a href="#"><li className='header_li fav'><FavoriteIcon /></li></a>
              <a href="/cart"><li className='header_li cart'><ShoppingCartIcon /></li></a>

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
                  <a className='dropbtn header_a' href='#'>Manage Product</a>
                  <div class="dropdown-content-nav dropdown-content">
                    <a className='header_d' href='/addproduct'>Add Product</a>
                    <a className='header_d' href='/adminviewproduct'>View Product</a>
                  </div>
                </li>
                <li className='header_li'><a className='header_a' href='/userdetails'>User Details</a></li>
              </ul>
              <ul className='header_ul ul_sec'>
                <a href="#"><li className='header_li search'><SearchIcon /></li></a>
                <a href="#"><li className='header_li fav'><FavoriteIcon /></li></a>
                <a href="/cart"><li className='header_li cart'><ShoppingCartIcon /></li></a>
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
                <a href="#"><li className='header_li search'><SearchIcon /></li></a>
                <a href="#"><li className='header_li fav'><FavoriteIcon /></li></a>
                <a href="/cart"><li className='header_li cart'><ShoppingCartIcon /></li></a>
              </ul>

            </div>
          </div>
      }
    </>
  )
}
