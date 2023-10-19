import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const navigate = useNavigate()
  const redShop = () => {
    navigate('/shop')
  }

  return (
    <>
      <div className='col-lg-12 col-md-12 home_main'>
        <img className='home_img' src="Assets\Images\hero-1.jpg" alt="" />
      </div>
      <div>
        <div className='summer'>SUMMER COLLECTIONS</div>
        <div className='summer2'>Winter Collections 2023</div>
        <div className='summer3'>A specialist label creating luxury essential. Ethically crafted with an unwavering commitment to exceptional quality.</div>
        <button className='summer_button' onClick={redShop}>SHOP NOW</button>
      </div>
      <div>
        <img className='home_img2' src="Assets\Images\banner-1.jpg" alt="" />
        <div className='home_clothes'>Clothing Collections 2023</div>
        <a href="/shop" className='home_shope_now'>Shop Now</a>
      </div>
      <div>
        <img className='home_img3' src="Assets\Images\banner-2.jpg" alt="" />
        <div className='home_clothes2'>Winter Clothing Collections</div>
        <a href="/shop" className='home_shope_now2'>Shop Now</a>
      </div>
      <div>
        <img className='home_img4' src="Assets\Images\banner-3.jpg" alt="" />
        <div className='home_clothes3'>New Arrival T-Shirt</div>
        <a href="/shop" className='home_shope_now3'>Shop Now</a>
      </div>
    </>
  )
}
