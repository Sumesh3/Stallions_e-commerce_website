import React, { useEffect, useState } from 'react'
import './Cart.css'
import Navbarf2 from '../../Components/Navbarf2/Navbarf2'
import DeleteIcon from '@mui/icons-material/Delete';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Cart() {

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


    const [editCart, seteditCart] = useState({})
    const [total, settotal] = useState(0)

    const fetchValue = (event) => {
        const name = event.target.name
        const value = event.target.value
        seteditCart({ editCart, [name]: value })
    }

    const cartDetails = (cartid) => {
        axios.put(`http://127.0.0.1:8000/api/update_cart_api/${cartid}`, editCart).then((response) => {
            window.location.reload()
        }).catch((error) => {
            console.log(error);
        })
    }


    const deletee = (deleteid) => {

        axios.delete(`http://127.0.0.1:8000/api/delete_cart_product_api/${deleteid}`).then((response) => {
            console.log(response);
            window.location.reload()
        })
    }

    useEffect(() => {

        let subtotal = 0
        for (let index = 0; index < viewCart.length; index++) {
            subtotal += parseInt(viewCart[index].total_price)

        }
        settotal(subtotal);

    }, [viewCart])

    return (
        <>
            <div className='cart-nav'>
                <Navbarf2></Navbarf2>
            </div>
            <div className='cart-body'>
                <h1 className='text-center mb-4 container-h1 mt-3'>Your Shopping Cart</h1>
            </div><br />
            <div className="cart-container mt-4 mb-5">
                {
                    viewCart.map((data, key) => (
                        <>
                            <div className="cart-item">
                                <img src={`/clothes/media/${data.image}`} alt="" />
                                <div className="item-details">
                                    <h2 className='cart-pname'>{data.productname}</h2>
                                    <p className="price"><CurrencyRupeeIcon fontSize='10px' />{data.total_price}</p>
                                    <div className="quantity-container">
                                        <form action="" onSubmit={() => { cartDetails(data.id) }}>
                                            <input type="number" Value={data.quantity} min={1} className="quantity" name='quantity' onChange={fetchValue} onClick={() => { cartDetails(data.id) }}></input>
                                        </form>

                                        <button className="remove-button" onClick={() => { deletee(data.id) }}><DeleteIcon /> Remove</button>
                                    </div>
                                </div>
                            </div>

                        </>
                    ))
                }

                <div className="row mt-4">
                    <div className="col-md-6 offset-md-7">
                        <h4 className='font-weight-bold'>Order Summary</h4>
                        <p>Subtotal :<CurrencyRupeeIcon fontSize='10px' />{total}</p>
                        <p>Tax :<CurrencyRupeeIcon fontSize='10px' />{total*.09}</p>
                        <p className="total-price">Total :<CurrencyRupeeIcon fontSize='10px' />{total+(total*.09)}</p>
                        <Link to={'/address'}>
                        <button className="btn checkout-btn btn-block">Proceed to Checkout</button>
                        </Link>
                        <a href="/shop" class="continue-shopping">Continue Shopping</a>
                    </div>
                </div>
            </div>




        </>
    )
}
