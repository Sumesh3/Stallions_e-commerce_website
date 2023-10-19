import React from 'react'
import './Wishlist.css'
import Navbarf2 from '../../Components/Navbarf2/Navbarf2'
import DeleteIcon from '@mui/icons-material/Delete';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function Wishlist() {

    const [viewWishlist, setviewWishlist] = useState([])
    const id = localStorage.getItem('login_id')

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/view_wishlist_api/${id}`).then((response) => {
            setviewWishlist(response.data.data)
            console.log(response.data.data);
        }).catch((error) => {

        })
    }, [])
    console.log(viewWishlist);

    const deletee = (deleteid) => {

        axios.delete(`http://127.0.0.1:8000/api/delete_wishlist_product_api/${deleteid}`).then((response) => {
            console.log(response);
            const deleted = viewWishlist.filter((details)=>{
                return details.id != deleteid
            })
            setviewWishlist(deleted)
        
        })
    }

    const productCart = (productid) => {
        const data = {
            userid: localStorage.getItem('login_id'),
            productid: productid,
            quantity: 1
        }

        axios.post('http://127.0.0.1:8000/api/add_cart_api', data).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error.response.data.message);
        })

    }

    return (
        <>
            <div className='wishlist-nav'>
                <Navbarf2 />
            </div>
            <div className="container mt-5"><br />
                <h4 class="text-center mb-3">My Wishlist</h4>

                {
                    viewWishlist.map((data, key) => (
                        <>
                            <div className="wishlist-item row">
                                <div className="col-md-2">
                                    <img src={`/clothes/media/${data.image}`} alt="" />
                                </div>
                                <div className="col-md-3 d-flex align-items-center ">
                                    <div>
                                        <h4>{data.productname}</h4>
                                        <p className="mb-0"><CurrencyRupeeIcon fontSize='1px' />{data.price}</p>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex">
                                    <button className="btn-add-to-cart" onClick={() => { productCart(data.productid) }}><AddShoppingCartIcon /></button>
                                    <button className="delete_wishlist" onClick={() => { deletee(data.id) }}><DeleteIcon /></button>
                                </div>
                            </div>
                        </>
                    ))
                }<br /> <br />

            </div>
        </>
    )
}
