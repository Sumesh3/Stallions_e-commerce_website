import React from 'react'
import './ForgotPassword.css'
import Navbarf2 from '../../Components/Navbarf2/Navbarf2'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function ForgotPassword() {

    const navigate = useNavigate()
    const [forgotpswd, getForgotpswd] = useState({})
    const forgotpassword = (event) => {
        const name = event.target.name
        const value = event.target.value
        getForgotpswd({ ...forgotpswd, [name]: value })

    }
    console.log(forgotpswd);
    const forgot = (e) => {
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/OTP_Verification_API", forgotpswd).then((response) => {
            console.log(response)

            toast.success(response.data.message, {
                icon: '👏',
                position: "bottom-center",
                autoClose: 800,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
            navigate('/otpverification')

        }).catch((err) => {

            toast.error(err.response.data.data, {
                position: "bottom-center",
                autoClose: 800,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
            console.log(err);
        })
    }

    return (
        <>
            <div className='for_nav'>
                <Navbarf2></Navbarf2>
            </div>
            <div class="container forgot_main">
                <h1 className='forgot_head'>Forgot Password</h1>
                <form>
                    <table>
                        <tr>
                            <td className='td_pass'>Email</td>
                            <td className='td_pass'>: <input class="forgot_text" type="email" placeholder="Enter Your Email" name='email' onChange={forgotpassword} /></td>
                        </tr>
                    </table>
                    <center><input class="forgot_submit" type="submit" value="Send" onClick={forgot} /></center><br /><br />
                </form>

            </div>
        </>
    )
}
