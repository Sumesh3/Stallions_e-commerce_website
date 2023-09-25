import React, { useState } from 'react'
import Navbar from '../../Components/Navbarfirst/Navbar'
import './Shop.css'
import Search from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function Shop() {

    const [filter, setFilter] = useState({})

    const addFilter = (event) => {
        const name = event.target.name
        const value = event.target.value
        setFilter({ ...filter, [name]: value })
    }
    return (
        <>
            <Navbar></Navbar>
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4 className='shope_head'>Shop</h4>
                                <div className="breadcrumb__links">
                                    <a href="/">Home</a>
                                    <span><KeyboardArrowRightIcon /></span>
                                    <span className='breadcrumb_shop'>Shop</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='shop spad'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className='shop__sidebar'>
                                <div className='shop__sidebar__search'>
                                    <form>
                                        <input className='shop_search_bar' type="text" placeholder="Search..."></input>
                                        <button className='shop_search_button' type="submit"><Search /></button>
                                    </form>
                                </div>
                                <div className='shop__sidebar__accordion'>
                                    <div className='accordion'>
                                        <div className='card'>
                                            <div className="card-heading">
                                                <a data-toggle="collapse" data-target="#collapseOne">Categories<button className='shop_arrow'><KeyboardArrowDownIcon /></button></a>
                                            </div>
                                            <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <div className="shop__sidebar__categories">
                                                        <ul className="nice-scroll">
                                                            <li><a href="#">Men</a></li>
                                                            <li><a href="#">Women</a></li>
                                                            <li><a href="#">Boys</a></li>
                                                            <li><a href="#">Girls</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <div class="card-heading">
                                                <a data-toggle="collapse" data-target="#collapseTwo">Filter Price</a>
                                            </div>
                                            <div id="collapseTwo" class="collapse show" data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <div class="shop__sidebar__price">
                                                        <ul>
                                                            <li><a href="#">0.00 - 499</a></li>
                                                            <li><a href="#">500 - 999</a></li>
                                                            <li><a href="#">1000 - 1499</a></li>
                                                            <li><a href="#">1500 - 1999</a></li>
                                                            <li><a href="#">1999+</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <div class="card-heading">
                                                <a data-toggle="collapse" data-target="#collapseThree">Colors</a>
                                            </div>
                                            <div id="collapseThree" class="collapse show" data-parent="#accordionExample">
                                                <div class="card-body ">
                                                    <div class="shop__sidebar__colour">
                                                        <label class="c-1" for="sp-1" style={{ borderWidth: filter.color == 'FF0000' ? '3px' : '' }}>
                                                            <input name='color' value={'FF0000'} type="radio" id="sp-1" onChange={addFilter} />
                                                        </label>
                                                        <label class="c-2" for="sp-2" style={{ borderWidth: filter.color == 'FFA500' ? '3px' : '' }}>
                                                            <input name='color' value={'FFA500'} type="radio" id="sp-2" onChange={addFilter} />
                                                        </label>
                                                        <label class="c-3" for="sp-3" style={{ borderWidth: filter.color == 'FFFF00' ? '3px' : '' }}>
                                                            <input name='color' value={'FFFF00'} type="radio" id="sp-3" onChange={addFilter} />
                                                        </label>
                                                        <label class="c-4" for="sp-4" style={{ borderWidth: filter.color == '00FF00' ? '3px' : '' }}>
                                                            <input name='color' value={'00FF00'} type="radio" id="sp-4" onChange={addFilter} />
                                                        </label>
                                                        <label class="c-5" for="sp-5" style={{ borderWidth: filter.color == '0000FF' ? '3px' : '' }}>
                                                            <input name='color' value={'0000FF'} type="radio" id="sp-5" onChange={addFilter} />
                                                        </label>
                                                        <label class="c-6" for="sp-6" style={{ borderWidth: filter.color == '4B0082' ? '3px' : '' }}>
                                                            <input name='color' value={'4B0082'} type="radio" id="sp-6" onChange={addFilter} />
                                                        </label>
                                                        <label class="c-7" for="sp-7" style={{ borderWidth: filter.color == 'EE82EE' ? '3px' : '' }}>
                                                            <input name='color' value={'EE82EE'} type="radio" id="sp-7" onChange={addFilter} />
                                                        </label>
                                                        <label class="c-8" for="sp-8" style={{ borderWidth: filter.color == '000000' ? '3px' : '' }}>
                                                            <input name='color' value={'000000'} type="radio" id="sp-8" onChange={addFilter} />
                                                        </label>
                                                        <label class="c-9" for="sp-9" style={{ borderWidth: filter.color == 'ffffff' ? '3px' : '' }}>
                                                            <input name='color' value={'ffffff'} type="radio" id="sp-9" onChange={addFilter} />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <div class="card-heading">
                                                <a data-toggle="collapse" data-target="#collapseTwo">Size</a>
                                            </div>
                                            <div id="collapseTwo" class="collapse show" data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <div class="shop__size">
                                                        <label for="xs" style={{ borderWidth: filter.size == 'xs' ? '2px' : '' }}>xs
                                                            <input name='size' value={'xs'} type="radio" id="xs" onChange={addFilter} />
                                                        </label>
                                                        <label for="sm" style={{ borderWidth: filter.size == 's' ? '2px' : '' }}>s
                                                            <input name='size' value={'s'} type="radio" id="sm" onChange={addFilter} />
                                                        </label>
                                                        <label for="md" style={{ borderWidth: filter.size == 'm' ? '2px' : '' }}>m
                                                            <input name='size' value={'m'} type="radio" id="md" onChange={addFilter} />
                                                        </label>
                                                        <label for="xl" style={{ borderWidth: filter.size == 'xl' ? '2px' : '' }}>xl
                                                            <input name='size' value={'xl'} type="radio" id="xl" onChange={addFilter} />
                                                        </label>
                                                        <label for="2xl" style={{ borderWidth: filter.size == '2xl' ? '2px' : '' }}>2xl
                                                            <input name='size' value={'2xl'} type="radio" id="2xl" onChange={addFilter} />
                                                        </label>
                                                        <label for="xxl" style={{ borderWidth: filter.size == 'xxl' ? '2px' : '' }}>xxl
                                                            <input name='size' value={'xxl'} type="radio" id="xxl" onChange={addFilter} />
                                                        </label>
                                                        <label for="3xl" style={{ borderWidth: filter.size == '3xl' ? '2px' : '' }}>3xl
                                                            <input name='size' value={'3xl'} type="radio" id="3xl" onChange={addFilter} />
                                                        </label>
                                                        <label for="4xl" style={{ borderWidth: filter.size == '4xl' ? '2px' : '' }}>4xl
                                                            <input name='size' value={'4xl'} type="radio" id="4xl" onChange={addFilter} />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>




                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-9">
                            <div class="shop__product__option">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="shop__product__option__left">
                                            <p>Showing 1–12 of 126 results</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="shop__product__option__right">
                                            <p>Sort by Price : </p>
                                            <select className='sop_side_new'>
                                                <option value="">Low To High</option>
                                                <option value="">0 - 999</option>
                                                <option value="">1000 - 2000+</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* PRODUCT VIEW SECTION */}

                            <div className="container mt-4">
                                <div className="row">
                                    <main className="col-md-9">
                                        <div className="row">
                                            {/* Product cards go here */}
                                            <div className="col-md-4 mb-4">
                                                <div className="card product-card">
                                                    <img src="/Assets/Images/product-4.jpg" className="card-img-top" alt="" />
                                                    <div className="card-body">
                                                        <h5 className="card-title product-title">Product Title</h5>
                                                        <p className="card-text product-price">999</p>
                                                        <button className="btn-add-to-wishlist"><FavoriteBorderIcon /></button>
                                                        <button className="btn-add-to-cart"><AddShoppingCartIcon /></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-4">
                                                <div className="card product-card">
                                                    <img src="/Assets/Images/product-4.jpg" className="card-img-top" alt="" />
                                                    <div className="card-body">
                                                        <h5 className="card-title product-title">Product Title</h5>
                                                        <p className="card-text product-price">999</p>
                                                        <button className="btn-add-to-wishlist"><FavoriteBorderIcon /></button>
                                                        <button className="btn-add-to-cart"><AddShoppingCartIcon /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </main>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}
