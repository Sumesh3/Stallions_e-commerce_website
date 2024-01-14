import React, { useEffect, useState } from 'react'
import './PaymentSuccessful.css'
import Navbarf2 from '../../Components/Navbarf2/Navbarf2'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function PaymentSuccessful() {

    const [Ordernumber, setOrdernumber] = useState([])

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/generate_order_number/${id}`).then((response) => {
            setOrdernumber(response.data.order_number)
            console.log(response.data.order_number);
        }).catch((error) => {
            console.log(error);
        })
    }, [id])

    setTimeout(function () {
        document.getElementById('curtain-container').classList.add('curtain-open');
        setTimeout(function () {
            document.getElementById('curtain-container').classList.add('truck-move');
        }, 1000);
        setTimeout(function () {
            document.getElementById('success-message').style.opacity = 1;
        }, 3100); 
    }, 10);

    return (
        <>
            <div className='successful_nav'>
                <Navbarf2></Navbarf2>
            </div>
            <div id="curtain-container">
                <div id="curtain"></div>
                
                <div id="truck"></div>
            </div>
            <div id="success-message">
                <div className='successful_main'>
                    <div className="container successful_container">
                        <h1 className='successful_h1'>Order Successfully Placed</h1>
                        <p>Thank you for your purchase!</p>
                        <p>Order ID: <span>{Ordernumber}</span></p>
                        <a className='successful_a' href="/shop">Continue Shopping</a>
                    </div>
                </div>
            </div>
        </>
    )
}
