import React from 'react'
import './Address.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbarf2 from '../../Components/Navbarf2/Navbarf2'
import { useEffect } from 'react'
import Payment_type from '../Payment/Payment_type'

export default function Address() {
    const userid = localStorage.getItem('login_id')

    const [input, getInputs] = useState({
        userid: userid
    })
    console.log(input);
    const addDetails = (event) => {
        const name = event.target.name
        const value = event.target.value
        getInputs({ ...input, [name]: value })
    }

    const [addressData, getaddressData] = useState({})
    const id = localStorage.getItem('login_id')

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/view_address_api/${id}`).then((response) => {
            getaddressData(response.data.data[0])
            console.log(response.data.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])
    console.log(addressData);

    const navigate = useNavigate()

    const submit = (event) => {
        event.preventDefault();

        axios.post('http://127.0.0.1:8000/api/address_api', input).then((response) => {
            navigate('/paymenttype')
            console.log(response);
            window.location.reload()
        })
            .catch((error) => {
                console.log(error.response.data.message);
            })
    }

    return (
        <>
            {
                addressData.name ?

                    <Payment_type></Payment_type>
                    :
                    <>
                        <div className='addre-nav'>
                            <Navbarf2></Navbarf2>
                        </div><br /><br />
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <div className="card card-add-form">
                                        <div className="address_card-headers bg-primary text-white">
                                            <h5 className="m-3 address-form-n">Address Form</h5>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="address_form-groups col-md-5">
                                                    <label>Name</label>
                                                    <input type="text" className="form-control address_input_form" name='name' placeholder="Enter Name" required onChange={addDetails} />
                                                </div>

                                                <div className="address_form-groups col-md-5">
                                                    <label>Number</label>
                                                    <input type="text" className="form-control address_input_form" name='number' placeholder="Enter Phone number" required onChange={addDetails} />
                                                </div>
                                                <div className="address_form-groups col-md-5">
                                                    <label>Pincode</label>
                                                    <input type="text" className="form-control address_input_form" name='pincode' placeholder="Enter Pincode" required onChange={addDetails} />
                                                </div>

                                                <div className="address_form-groups col-md-5">
                                                    <label>Locality</label>
                                                    <input type="text" className="form-control address_input_form" name='locality' placeholder="Enter Locality" required onChange={addDetails} />
                                                </div>

                                                <div className="address_form-group">
                                                    <label>Address</label>
                                                    <input type="text" className="form-control address_input_form" name='address' placeholder="Enter Address" required onChange={addDetails} />
                                                </div>

                                                <div className="address_form-groups col-md-5">
                                                    <label>City</label>
                                                    <input type="text" className="form-control address_input_form" name='city' placeholder="Enter City" required onChange={addDetails} />
                                                </div>

                                                <div className="address_form-groups col-md-5">
                                                    <label>State</label>
                                                    <input type="text" className="form-control address_input_form" name='state' placeholder="Enter State" required onChange={addDetails} />
                                                </div>
                                                <div className="address_form-group">
                                                    <label>Landmark</label>
                                                    <input type="text" name='landmark' className="form-control address_input_form" placeholder="Landmark (optional)" onChange={addDetails} />
                                                </div>
                                                <div className="address_form-group form_alt">
                                                    <label>Alternate phone</label>
                                                    <input type="text" name='altnumber' className="form-control address_input_form" placeholder="Alternate phone (optional)" onChange={addDetails} />
                                                </div>
                                                <br />
                                                <center>
                                                    <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
                                                </center>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div><br /><br />
                        </div>
                    </>
            }

        </>
    )
}
