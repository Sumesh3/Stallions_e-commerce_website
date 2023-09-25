import React from 'react'
import './Cart.css'
import Navbarf2 from '../../Components/Navbarf2/Navbarf2'
import DeleteIcon from '@mui/icons-material/Delete';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export default function Cart() {
    return (
        <>
            <div className='cart-nav'>
                <Navbarf2></Navbarf2>
            </div>
            <div className='cart-body'>
                <h1 className='text-center mb-4 container-h1 mt-3'>Your Shopping Cart</h1>
                <div className="cart-container">
                    <div className="cart-item">
                        <img src="/Assets/Images/product-4.jpg" alt="" />
                        <div className="item-details">
                            <h2 className='cart-pname'>Product 1</h2>
                            <p className="price"><CurrencyRupeeIcon fontSize='10px' />19.99</p>
                            <div className="quantity-container">
                                <input type="number" defaultValue={1} min={1} className="quantity" />
                                <button className="remove-button"><DeleteIcon /> Remove</button>
                            </div>
                        </div>
                    </div>
                    <div className="cart-item">
                        <img src="/Assets/Images/product-4.jpg" alt="" />
                        <div className="item-details">
                            <h2 className='cart-pname'>Product 2</h2>
                            <p className="price"><CurrencyRupeeIcon fontSize='10px' />19.99</p>
                            <div className="quantity-container">
                                <input type="number" defaultValue={1} min={1} className="quantity" />
                                <button className="remove-button"><DeleteIcon /> Remove</button>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6 offset-md-7">
                            <h4 className='font-weight-bold'>Order Summary</h4>
                            <p>Subtotal :<CurrencyRupeeIcon fontSize='10px' />39.98</p>
                            <p>Tax :<CurrencyRupeeIcon fontSize='10px' />7.196</p>
                            <p className="total-price">Total :<CurrencyRupeeIcon fontSize='10px' />47.176</p>
                            <button className="btn checkout-btn btn-block">Proceed to Checkout</button>
                            <a href="/shop" class="continue-shopping">Continue Shopping</a>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </>
    )
}
