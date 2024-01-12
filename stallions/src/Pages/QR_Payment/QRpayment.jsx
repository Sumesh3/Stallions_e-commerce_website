import React from 'react'
import './ORpayment.css'
import Navbarf2 from '../../Components/Navbarf2/Navbarf2'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { GrandTotals, HolderName } from '../Redux/Slice/GrandTotalSlice'

export default function QRpayment() {

    // const Dispatch = useDispatch()
    // useEffect(()=>{
    //     Dispatch (GrandTotals(amount))
    //     Dispatch (HolderName(holdername))
    // },[amount])

    // console.log(holdername);


    const navigate = useNavigate()

    const payment = (event) => {
        event.preventDefault()
        const store = {
            userid: localStorage.getItem('login_id'),
            grandtotal: sessionStorage.getItem('amount'),
            pyment_status: 1,
            name: sessionStorage.getItem('holdername'),
            pyment_type: 'Prepaid'
        }
        // console.log(store);

        axios.post('http://127.0.0.1:8000/api/final_pyment_api', store).then((response) => {
            console.log(response.data.data[0].id)
            navigate(`/paymentsuccessful/${response.data.data[0].id}`)
            window.location.reload()
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <>
            <div className='qr-nav'>
                <Navbarf2></Navbarf2>
            </div>
            <div className='qr_body'>
                <div className="qr-container">
                    <img className="qr-code" src="/clothes/media/images/QR/upi_qr.png" alt="" />
                    <h1 className='qr_head'>Scan this QR Code</h1>
                    <p className='qr_cont'>For something special!</p>
                </div>
                <button onClick={payment} className='qr_button'>Done</button>
            </div>

        </>
    )
}
