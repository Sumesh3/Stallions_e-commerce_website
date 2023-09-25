import React from 'react'
import './Wishlist.css'

export default function Wishlist() {
    return (
        <>
            <div>
                <header className="bg-light p-3">
                    <div className="container d-flex justify-content-between align-items-center">
                        <a href="#" className="navbar-brand">Logo</a>
                        <div className="d-flex align-items-center">
                            <input type="text" className="form-control search-input mr-2" placeholder="Search" />
                            <a href="#"><i className="fas fa-shopping-cart fa-lg mr-3" /></a>
                            <a href="#"><i className="fas fa-heart fa-lg" /></a>
                        </div>
                    </div>
                </header>

                <div className="container mt-4">
                    <div className="row">
                        <main className="col-md-9">
                            <div className="row">
                                {/* Product cards go here */}
                                <div className="col-md-4 mb-4">
                                    <div className="card product-card">
                                        <img src="/Assets/Images/product-4.jpg" className="card-img-top" alt="Product Image" />
                                        <div className="card-body">
                                            <h5 className="card-title product-title">Product Title</h5>
                                            <p className="card-text product-price">$50.00</p>
                                            <button className="btn btn-add-to-wishlist">Add to Wishlist</button>
                                            <button className="btn btn-add-to-cart">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="card product-card">
                                        <img src="/Assets/Images/product-4.jpg" className="card-img-top" alt="Product Image" />
                                        <div className="card-body">
                                            <h5 className="card-title product-title">Product Title</h5>
                                            <p className="card-text product-price">$50.00</p>
                                            <button className="btn btn-add-to-wishlist">Add to Wishlist</button>
                                            <button className="btn btn-add-to-cart">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>


                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Wishlist</h2>
                            <div className="row" id="wishlist-container">
                                {/* Wishlist items go here */}
                                <div className="col-md-3">
                                    <div className="wishlist-item">
                                        <img src="/Assets/Images/product-4.jpg" alt="Wishlist Product Image" className="img-fluid" />
                                        <h5 className="product-title mt-3">Product Title</h5>
                                        <p className="product-price">$50.00</p>
                                        <span className="remove-from-wishlist">Remove</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
