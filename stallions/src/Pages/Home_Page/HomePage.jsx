import React from 'react'
import './HomePage.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link, useNavigate } from 'react-router-dom';

export default function HomePage() {

    let user = localStorage.getItem("email")



    return (
        <>

            <div className='main_hom test img-responsive'>
                <div className='hom_sub'>
                    <img className='img_hom' src="Assets\Images\frond_page5.jpg" width={'100%'} height={'100%'} alt="" />
                    <div className="hom_text">
                        <h6 className='head_hom1'>Summer Collection</h6>
                        <h2 className='head_hom2'>Winter Collections 2023</h2>
                        <p className='head_hom3'>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                            commitment to exceptional quality.</p>
                        <>
                            {
                                user ?
                                    <Link to={'/shop'} className='home_button_p'>
                                        SHOP NOW</Link>
                                    :
                                    <Link to={'/login'} className='home_button_p'>
                                        SHOP NOW</Link>

                            }
                        </>

                    </div>
                </div>
            </div>


            <div className=''>

                <div className="main_home_picn">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-md-12 col-sm-12">
                        <div className="picture_home_m">
                            <div className='home_pic_sa1'>
                                <img className='home_pic_cont' src="Assets\Images\banner-1.jpg" alt="" />
                                <div className='hom_cont_11'>Clothing Collections</div>
                                {
                                    user ?
                                        <a href="/shop" className='hom_shop_btn1'>Shop Now</a>
                                        :
                                        <a href="/login" className='hom_shop_btn1'>Shop Now</a>
                                }
                            </div>
                            <div className='home_pic_sa2'>
                                <div className='hom_cont_12'>Winter Collections</div>
                                {
                                    user ?
                                        <a href="/shop" className='hom_shop_btn2'>Shop Now</a>
                                        :
                                        <a href="/login" className='hom_shop_btn2'>Shop Now</a>
                                }
                                <img className='home_pic_cont' src="Assets\Images\banner-2.jpg" alt="" />

                            </div>
                            <div className='home_pic_sa3'>
                                <img className='home_pic_cont' src="Assets\Images\banner-3.jpg" alt="" />
                                <div className='hom_cont_11'>New Arrival T-Shirt</div>
                                {
                                    user ?
                                        <a href="/shop" className='hom_shop_btn1'>Shop Now</a>
                                        :
                                        <a href="/login" className='hom_shop_btn1'>Shop Now</a>
                                }
                            </div>
                            <div className='home_pic_sa4'>
                                <div className='hom_cont_12'>Modern Churidar</div>
                                {
                                    user ?
                                        <a href="/shop" className='hom_shop_btn2'>Shop Now</a>
                                        :
                                        <a href="/login" className='hom_shop_btn2'>Shop Now</a>
                                }
                                <img className='home_pic_cont' src="Assets\Images\image_zoom.jpeg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>




            </div>


            <section className="product ">
                <div className="container">
                    <div className="row seller12">
                        <div className="col-lg-12">
                            <ul className="filter__controls">
                                <li>Best Sellers</li>
                                <li>New Arrivals</li>
                                <li>Hot Sales</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row product__filter">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                    <ul className="product__hover">
                                        <li><a><img src="Assets/Images/product-9.jpg" alt="" /></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>T-shirt</h6>
                                    <br />
                                    <a className="add-cart"><CurrencyRupeeIcon fontSize='1px' /> 499</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                    <ul className="product__hover">
                                        <li><a><img src="Assets/Images/product-2.jpg" alt="" /></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>T-shirt</h6>
                                    <br />
                                    <a className="add-cart"><CurrencyRupeeIcon fontSize='1px' /> 499</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                    <ul className="product__hover">
                                        <li><a><img src="Assets/Images/product-12.jpg" alt="" /></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>T-shirt</h6>
                                    <br />
                                    <a className="add-cart"><CurrencyRupeeIcon fontSize='1px' /> 499</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                    <ul className="product__hover">
                                        <li><a><img src="Assets/Images/product-5.jpg" alt="" /></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>T-shirt</h6>
                                    <br />
                                    <a className="add-cart"><CurrencyRupeeIcon fontSize='1px' /> 499</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                    <ul className="product__hover">
                                        <li><a><img src="Assets/Images/product-8.jpg" alt="" /></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>T-shirt</h6>
                                    <br />
                                    <a className="add-cart"><CurrencyRupeeIcon fontSize='1px' /> 499</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                    <ul className="product__hover">
                                        <li><a><img src="Assets/Images/product-4.jpg" alt="" /></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>T-shirt</h6>
                                    <br />
                                    <a className="add-cart"><CurrencyRupeeIcon fontSize='1px' /> 499</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                    <ul className="product__hover">
                                        <li><a><img src="Assets/Images/product-9.jpg" alt="" /></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>T-shirt</h6>
                                    <br />
                                    <a className="add-cart"><CurrencyRupeeIcon fontSize='1px' /> 499</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                    <ul className="product__hover">
                                        <li><a><img src="Assets/Images/product-2.jpg" alt="" /></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>T-shirt</h6>
                                    <br />
                                    <a className="add-cart"><CurrencyRupeeIcon fontSize='1px' /> 499</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="latest ">
                <div className="container blog_cnd">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Latest News</span>
                                <h2>Fashion New Trends</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <img className="blog__item__pic set-bg" src='Assets/Images/blog-6.jpg' style={{ width: '100%' }} />
                                <div className="blog__item__text">
                                    <span> 16 February 2023</span>
                                    <h5>What Curling Irons Are The Best Ones</h5>
                                    <a>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <img className="blog__item__pic set-bg" src='Assets/Images/blog-2.jpg' style={{ width: '100%' }} />
                                <div className="blog__item__text">
                                    <span> 21 February 2023</span>
                                    <h5>Eternity Bands Do Last Forever</h5>
                                    <a>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <img className="blog__item__pic set-bg" src='Assets/Images/blog-9.jpg' style={{ width: '100%' }} />
                                <div className="blog__item__text">
                                    <span>28 February 2023</span>
                                    <h5>The Health Benefits Of Sweater</h5>
                                    <a>Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}