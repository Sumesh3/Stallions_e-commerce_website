import React, { useEffect, useState } from 'react'
import './PaymentSuccessful.css'
import Navbarf2 from '../../Components/Navbarf2/Navbarf2'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function PaymentSuccessful() {

    const [Ordernumber, setOrdernumber] = useState()

    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/generate_order_number/${id}`).then((response) => {
            setOrdernumber(response.data.order_number)
            console.log(response.data.order_number);
            window.location.reload()
        }).catch((error) => {
            console.log(error);
        })
    },[id])
    return (
        <>
        <div className='successful_nav'>
                <Navbarf2></Navbarf2>
            </div>
            <div className='successful_main'>
                <div className="container successful_container">
                    <h1 className='successful_h1'>Payment Successful</h1>
                    <p>Thank you for your purchase!</p>
                    <p>Order ID: <span id="order-id">{Ordernumber}</span></p>
                    <a className='successful_a' href="/shop">Continue Shopping</a>
                </div>
            </div>
        </>
    )
}
