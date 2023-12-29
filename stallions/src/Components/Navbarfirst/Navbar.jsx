import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import Navbarf2 from '../Navbarf2/Navbarf2'
import NavMenu from '../Nav_Manu/NavMenu'

export default function Navbar() {
  let user = localStorage.getItem("email")

  const navigate = useNavigate()
  const clears = ()=>{
    localStorage.clear()
    navigate('/')
  }


  return (
    <>
    <div className='aaaa'>
      <div className='col-lg-12 col-md-12  header_n header'>
        <div className='row'>
          <div className='header__top__left col-lg-6 col-md-7'>
            <p className='head-text'>Free shipping, 30-day return or refund guarantee.</p>
          </div>
          <div className='header__top__right col-lg-6 col-md-5'>
            {user != null ? <a onClick={clears} className='sign-in'>SIGN OUT</a> :  <a href='/login' className='sign-in'>SIGN IN</a>}
          </div>
        </div>
      </div>
      <Navbarf2></Navbarf2>
      </div>
      {/* <NavMenu></NavMenu> */}
    </>
  )
}
