import React from 'react'
import './NewPassword.css'
import Navbarf2 from '../../../Components/Navbarf2/Navbarf2'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function NewPassword() {

    const navigate = useNavigate()

    const [newpasswords, getnewpasswords] = useState({})
    const newpassword = (event) => {
        const name = event.target.name
        const value = event.target.value
        getnewpasswords({ ...newpasswords, [name]: value })

    }

    const savepassword = (e) => {
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/Update_Password_API", newpasswords).then((response) => {
            console.log(response)
            Swal.fire(
                'Password updated successfully',
                '',
                'success'
            ).then(() => {
                navigate('/')
            })
        })
            .catch((err) => {
                toast.error(err.response.data.error, {
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
            <div className='newpass_nav'>
                <Navbarf2></Navbarf2>
            </div>
            <div className='container'>
                <center>
                    <div class="newpass_main">
                        <h1 className='change_head'>Change Password</h1>
                        <center>
                            <input class="textnewpass" type="password" name='pass' placeholder="New Password" onChange={newpassword}></input>
                            <input class="textnewpass" type="password" name='cpass' placeholder="Confirm New Password" onChange={newpassword}></input>
                        </center>
                        <center>
                            <button class="newpass_submit" onClick={savepassword}>Save Password</button><br></br><br></br>
                        </center>
                    </div>
                </center>
            </div>
        </>
    )
}
