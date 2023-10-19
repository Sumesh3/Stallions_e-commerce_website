import React from 'react'
import './UPIpayment.css'
import Navbarf2 from '../../Components/Navbarf2/Navbarf2'
import { useSelector } from 'react-redux'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function UPIpayment() {

    const amount = useSelector(state => state.GrandTotal.finalAmount)
    const holdername = useSelector(state => state.GrandTotal.HolderName)
    const final_amount = sessionStorage.getItem('amount')

    const navigate = useNavigate()

    const payment = (event) => {
        event.preventDefault()
        const data = {
            userid: localStorage.getItem('login_id'),
            grandtotal: amount,
            pyment_status: 1,
            name: holdername
        }

        axios.post('http://127.0.0.1:8000/api/final_pyment_api', data).then((response) => {
            console.log(response.data.data);
            navigate(`/paymentsuccessful/${response.data.data.id}`)
        }).catch((error) => {
            console.log(error);
        })
    }


    return (
        <>
            <div className='upi-nav'>
                <Navbarf2></Navbarf2>
            </div>
            <div className='upi-main'>
                <div className="container-upi">
                    <h1 className='upi-head'>Enter UPI Details</h1>

                    <label className='upi_label'>UPI ID:</label>
                    <div className='upi_verity'>
                        <input type="text" className='upi_text' /><button className='verify_button'>Verify</button>
                    </div>
                    <br />
                    <button type="button" className='upi_submit' onClick={payment}>PAY <CurrencyRupeeIcon fontSize='small' />{final_amount}</button>

                </div>
            </div>
        </>
    )
}
