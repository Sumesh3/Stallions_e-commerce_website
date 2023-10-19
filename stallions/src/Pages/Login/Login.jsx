import React, { useState } from 'react'
import './Login.css'
import Navbarf2 from '../../Components/Navbarf2/Navbarf2'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

    const [loginputs, setLoginputs] = useState({
        email: "",
        password: ""
    })

    const [Formerrors, setFormerrors] = useState({})
    console.log(Formerrors);

    const navigate = useNavigate()
    const loginData = (event) => {
        const name = event.target.name
        const value = event.target.value
        setLoginputs({ ...loginputs, [name]: value })
    }

    const validate = (values) => {
        var error = {}
        if (!values.email) {
            error.email = 'Enter username'
        }
        if (!values.password) {
            error.password = 'Enter password'
        }
        return error
    }



    const continew = (event) => {
        event.preventDefault()
        setFormerrors(validate(loginputs))
        if (Object.keys(Formerrors).length === 0) {
            axios.post("http://127.0.0.1:8000/api/login_api", loginputs).then((response) => {
                console.log(response)

                if (response.data.data.role == 'user') {
                    localStorage.setItem("email", response.data.data.email)
                    localStorage.setItem("role", response.data.data.role)
                    localStorage.setItem("user_id", response.data.data.user_id)
                    localStorage.setItem("login_id", response.data.data.login_id)
                    navigate('/')
                }

                if (response.data.data.role == 'Admin') {
                    localStorage.setItem("email", response.data.data.email)
                    localStorage.setItem("role", response.data.data.role)
                    localStorage.setItem("user_id", response.data.data.user_id)
                    localStorage.setItem("login_id", response.data.data.login_id)
                    navigate('/')
                }
            })
                .catch((error) => {
                    toast.error(error.response.data.data, {
                        position: "bottom-center",
                        autoClose: 800,
                        hideProgressBar: true,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                        theme: "colored",
                    });
                    console.log(error);

                })
        }

    }

    return (
        <>
            <div className='login_navfix'>
                <Navbarf2></Navbarf2>
            </div>
            <ToastContainer></ToastContainer>
            <form>
                <div className='container login-container col-lg-12 col-md-12 col-sm-12'>
                    <div className='login-head'>Log in</div>

                    <div className='login-name'>E-mail</div>
                    <input className='login-text' type="text" name='email' onChange={loginData} />

                    <div className='login-name'>Password</div>
                    <input className='login-text' type="password" name='password' onChange={loginData} />
                    <div>
                        <a className='login-forgot' href="/forgotpassword">Forgot Password ?</a>
                    </div>
                    <center>
                        <button className='login-continue' onClick={continew}>Continue</button>
                    </center>
                    <hr></hr>
                    <div className='login-sign'>
                        <center>
                            <p>Don't have an account ?  <a className='login-ang' href="/registration">Sign up</a></p>
                        </center>
                    </div>

                </div>
            </form>
        </>
    )
}
