import React, { useContext } from 'react'
import './Payment_type.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import upi_icon from './upi_icon.svg'
import qr_scan from './qr_scan.svg'
import credit_card from './credit_card.svg'
import cod from './cod.svg'
import Navbarf2 from '../../Components/Navbarf2/Navbarf2'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GrandTotals, HolderName } from '../Redux/Slice/GrandTotalSlice'
import EditAddress from '../Address/EditAddress'

export default function Payment_type() {

    const dispatch = useDispatch()

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

    const [total, settotal] = useState(0)
    const priceTotal = total + (total * .09)
    const discount = (total + (total * .09)) * .1

    const shippingCharge = priceTotal >= 500 ? 0 : 40

    const grandTotal = shippingCharge - discount + priceTotal

    console.log(grandTotal);
    const convertedAmount = grandTotal.toFixed(2);
    dispatch(GrandTotals(convertedAmount))
    sessionStorage.setItem("amount", convertedAmount)



    useEffect(() => {

        let subtotal = 0
        for (let index = 0; index < viewCart.length; index++) {
            subtotal += parseInt(viewCart[index].total_price)

        }
        settotal(subtotal);

    }, [viewCart])


    const [viewAddress, setviewAddress] = useState([])
    const ida = localStorage.getItem('login_id')

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/view_address_api/${ida}`).then((response) => {
            setviewAddress(response.data.data[0])
            console.log(response.data.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])
    console.log(viewAddress);
    const holdername = viewAddress.name
    dispatch(HolderName(holdername))

    sessionStorage.setItem("holdername", holdername)


    const navigate = useNavigate()

    const payamount = () => {
        if (paytype === 'upi') {
            navigate('/upipayment')
            window.location.reload()
        }

        if (paytype === 'QR_scan') {
            const data = {
                grandTotal: grandTotal
            }
            axios.post("http://127.0.0.1:8000/api/generateqr_api", data).then((response) => {
                console.log(response);
                window.location.reload()
            })
                .catch((error) => {

                })
            navigate('/qrpayment')
            window.location.reload()
        }
        if (paytype === 'debit_card') {
            navigate('/debitcard')
            window.location.reload()
        }

        if (paytype === 'cod') {
            const data = {
                userid: localStorage.getItem('login_id'),
                grandtotal: sessionStorage.getItem('amount'),
                pyment_status: 0,
                name: sessionStorage.getItem('holdername'),
                pyment_type: 'Cash on delivery'
            }
            console.log(data);

            axios.post('http://127.0.0.1:8000/api/final_pyment_api', data).then((response) => {
                console.log(response.data.data.id);
                navigate(`/paymentsuccessful/${response.data.data[0].id}`)
                window.location.reload()
            })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    const [paytype, getpaytype] = useState('')
    const Payment_type = (pymenttype) => {
        getpaytype(pymenttype)
    }
    console.log(paytype);

    return (
        <>
            <div className='payment-nav'>
                <Navbarf2></Navbarf2>
            </div>
            <div className='container bill_body'>
                <div className="iphone ">
                    <header className="checkout">
                        <h1 className='checkout_h1'>Checkout</h1>
                    </header>
                    <form className="form_check">
                        <div>
                            <h2 className='checkout_h2'>Address</h2>
                            <div className="card card-address">
                                <address className='pay_address'>
                                    {viewAddress.name}<br />
                                    {viewAddress.address}<br />
                                    {viewAddress.locality}, {viewAddress.pincode}<br />
                                    {viewAddress.city}, {viewAddress.state}<br />
                                    {viewAddress.number}
                                    <div className='address_edit_pay'><EditAddress></EditAddress></div>

                                </address>
                            </div>
                        </div>
                        <fieldset className='pyment_method'>
                            <legend className='pyment_method_sub'>Payment Method</legend>
                            <div className="form__radios">
                                <div className="form__radio">
                                    <label>
                                        <img className="icons" src={upi_icon} />
                                        UPI
                                    </label>
                                    <input className='pay_type_input' name="payment-method" type="radio" onClick={() => { Payment_type("upi") }} />
                                </div>
                                <div className="form__radio">
                                    <label>
                                        <img className="icons" src={qr_scan} />QR Scanner
                                    </label>
                                    <input className='pay_type_input' name="payment-method" type="radio" onClick={() => { Payment_type("QR_scan") }} />
                                </div>
                                <div className="form__radio">
                                    <label>
                                        <img className="icons" src={credit_card} />
                                        Credit / Debit / ATM Card
                                    </label>
                                    <input className='pay_type_input' name="payment-method" type="radio" onClick={() => { Payment_type("debit_card") }} />
                                </div>
                                <div className="form__radio">
                                    <label>
                                        <img className="icons" src={cod} />
                                        Cash on Delivery
                                    </label>
                                    <input className='pay_type_input' name="payment-method" type="radio" onClick={() => { Payment_type("cod") }} />
                                </div>
                            </div>
                        </fieldset>
                        <div>
                            <h2>Shopping Bill</h2>
                            <table className='table_bill'>
                                <tbody className='tbody_bill'>
                                    <tr>
                                        <td className='td_bill'>Shipping fee</td>
                                        <td align="right">{priceTotal >= 500 ? 0 : 40}</td>
                                    </tr>
                                    <tr>
                                        <td>Discount 10%</td>
                                        <td align="right">-{discount}</td>
                                    </tr>
                                    <tr>
                                        <td>Price Total</td>
                                        <td align="right">{priceTotal}</td>
                                    </tr>
                                </tbody>
                                <tfoot className='tfoot_bill'>
                                    <tr>
                                        <td>Total</td>
                                        <td align="right">{grandTotal}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div>
                            <center>
                                <button className="button button_bill" onClick={payamount}>
                                    <svg className="icon">
                                        <use xlinkHref="#icon-shopping-bag" />
                                    </svg>Proceed
                                </button>
                            </center>
                        </div>
                    </form>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                    <symbol id="icon-shopping-bag" viewBox="0 0 24 24">
                        <path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z" />
                    </symbol>
                </svg>
            </div>
        </>
    )
}
