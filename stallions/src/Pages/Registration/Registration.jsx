import React, { useState } from 'react'
import './Registration.css'
import axios from 'axios'
import Navbarf2 from '../../Components/Navbarf2/Navbarf2'
import { ToastContainer, toast } from 'react-toastify'

export default function Registration() {

    const [error, setError] = useState({})

    const [input, getInputs] = useState({
        name: "", email: "", number: "", password: ""
    })

    const addDetails = (event) => {
        const name = event.target.name
        const value = event.target.value
        getInputs({ ...input, [name]: value })
    }
    console.log(input);

    const validate = (value) => {
        let error = {}
        let validName = /^([a-zA-z. ]{0,40})?$/
        let validEmail = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})([a-z]{2,3})?$/;
        let validNumber = /^([0-9]{0,10})?$/

        if (!value.name) {
            error.name = 'Enter Your Name'
        }
        else if (!validName.test(value.name)) {
            error.name = 'Enter the valid Name'
        }

        if (!value.email) {
            error.email = 'Enter Your Email'
        }
        else if (!validEmail.test(value.email)) {
            error.email = 'Enter the valid E-mail address'
        }

        if (!value.number) {
            error.number = 'Enter Your Phonenumber'
        }
        else if (!validNumber.test(value.number)) {
            error.number = 'Enter the valid Phonenumber'
        }

        return error

    }

    const submit = (event) => {
        event.preventDefault()
        setError(validate(input))
        if (Object.keys(error).length === 0) {
            axios.post("http://127.0.0.1:8000/api/registration_api", input).then((response) => {
                console.log(response.data.message)
                toast.success(response.data.message, {
                    position: "bottom-center",
                    autoClose: 1800,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                });
            }).catch((error) => {
                console.log(error.response.data.message);
                toast.error(error.response.data.message, {
                    position: "bottom-center",
                    autoClose: 800,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                });
            })
        }
    }



    return (
        <>
            <div className='register_navfix'>
                <Navbarf2></Navbarf2>
            </div>
            <ToastContainer/>
            <div className='register_div'>
                <div className='registration-container col-lg-12 col-md-12 col-sm-12'>
                    <div className='registration-head'>Create Account</div>
                    <form>
                        <div className="registration-box">
                            <div className='registration-name'>Your Name *</div>
                            <input className='registration-text' type="text" name='name' onChange={addDetails} style={{ borderWidth: error.name ? '1.33px' : '', borderColor: error.name ? 'red' : '' }} onClick={() => { setError({ ...error, name: '' }) }}/>
                            <span className='reg_span'>{error.name}</span>
                        </div>


                        <div className="registration-box">
                            <div className='registration-name'>E-mail *</div>
                            <input className='registration-text' type="email" name='email' onChange={addDetails} style={{ borderWidth: error.email ? '1.33px' : '', borderColor: error.email ? 'red' : '' }} onClick={() => { setError({ ...error, email: '' }) }}/>
                            <span className='reg_span'>{error.email}</span>
                        </div>

                        <div className="registration-box">
                            <div className='registration-name'>Phone Number *</div>
                            <input className='registration-text' type="text" name="number" onChange={addDetails} style={{ borderWidth: error.number ? '1.33px' : '', borderColor: error.number ? 'red' : '' }} onClick={() => { setError({ ...error, number: '' }) }}/>
                            <span className='reg_span'>{error.number}</span>
                        </div>

                        <div className="registration-box">
                            <div className='registration-name'>Password *</div>
                            <input className='registration-text' type="password" name="password" onChange={addDetails} />
                            <span className='reg_span'></span>
                        </div>

                        <p>Password must be at least 6 characters</p>
                        <br></br>
                        <center>
                            <button className='registration-continue' onClick={submit}>Continue</button>
                        </center>
                        <hr></hr>
                        <div className='registration-sign'>
                            <center>
                                <p>Already have an account ?  <a className='registration-ang' href="/login">Sign in</a></p>
                            </center>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
