import React from 'react'
import './ChangePassword.css'
import Navbarf2 from '../../../Components/Navbarf2/Navbarf2'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

export default function ChangePassword() {

    const navigate = useNavigate()

    const userid = localStorage.getItem('login_id')
    const [changePass, setchangePass] = useState({
        userid: userid
    })

    const passwords = (event) => {
        const name = event.target.name
        const value = event.target.value
        setchangePass({ ...changePass, [name]: value })
    }
    console.log(changePass);


    const updatepass = () => {
        axios.put(`http://127.0.0.1:8000/api/password_change_api/${userid}`, changePass).then((response) => {
            console.log(response)
            navigate('/')

        })
            .catch((error) => {
                toast.error(error.response.data.error, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                console.log(error);
            })
    }


    return (
        <>
            <div className='changepass_nav'>
                <Navbarf2></Navbarf2>
            </div>
            <ToastContainer></ToastContainer>
            <div className='container'>
                <center>
                    <div className="changepass_main">
                        <div className="changepass_section">
                            <h2 className='changepass_headding'>Change Password</h2><br></br>
                            <input className="changepass-input" type="password" placeholder="Current Password" name='currentpass' onChange={passwords} />
                            <input className="changepass-input" type="password" placeholder="New Password" name='newpass' onChange={passwords} />
                            <input className="changepass-input" type="password" placeholder="Confirm New Password" name='updatepass' onChange={passwords} />
                            <button className="changepass_button" onClick={updatepass}>Save Password</button>
                        </div>
                    </div>
                </center>
            </div>
        </>
    )
}
