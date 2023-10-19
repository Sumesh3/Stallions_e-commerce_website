import React from 'react'
import './EditAddress.css'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';


export default function EditAddress() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [viewAddress, setviewAddress] = useState({})
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


    const editAddress = (event) => {
        const name = event.target.name
        const value = event.target.value
        setviewAddress({ ...viewAddress, [name]: value })
    }

    const id = viewAddress.id
    const update = () => {
        axios.put(`http://127.0.0.1:8000/api/update_address_api/${id}`, viewAddress).then((response) => {
            window.location.reload()
        })
    }

    return (
        <>
            <div>
                <div className='edit_add_btn' onClick={handleOpen} ><EditIcon fontSize='small' /></div>
                <Modal
                    open={open}
                >
                    <div>
                        <div className='modal'>
                            <div className="container edit_container">
                                <div className="row">
                                    <div className="col-md-6 offset-md-3">
                                        <div className="card edit_card-add-form">
                                            <div className="edit_card-headers bg-primary text-white">
                                                <h5 className="m-3 address-form-n">Address Form</h5>
                                            </div>
                                            <div className="card-body">
                                                <form>
                                                    <div className="edit_form-groups col-md-5">
                                                        <label>Name</label>
                                                        <input type="text" className="edit_address_input_form" name='name' value={viewAddress.name} onChange={editAddress} />
                                                    </div>
                                                    <div className="edit_form-groups col-md-5">
                                                        <label>Number</label>
                                                        <input type="text" className="edit_address_input_form" name='number' placeholder="Enter Phone number" value={viewAddress.number} onChange={editAddress} />
                                                    </div>
                                                    <div className="edit_form-groups col-md-5">
                                                        <label>Pincode</label>
                                                        <input type="text" className="edit_address_input_form" name='pincode' placeholder="Enter Pincode" value={viewAddress.pincode} onChange={editAddress} />
                                                    </div>

                                                    <div className="edit_form-groups col-md-5">
                                                        <label>Locality</label>
                                                        <input type="text" className="edit_address_input_form" name='locality' placeholder="Enter Locality" value={viewAddress.locality} onChange={editAddress} />
                                                    </div>

                                                    <div className="edit_form-group">
                                                        <label>Address</label>
                                                        <input type="text" className="edit_address_input_form" name='address' placeholder="Enter Address" value={viewAddress.address} onChange={editAddress} />
                                                    </div>

                                                    <div className="edit_form-groups col-md-5">
                                                        <label>City</label>
                                                        <input type="text" className="edit_address_input_form" name='city' placeholder="Enter City" value={viewAddress.city} onChange={editAddress} />
                                                    </div>

                                                    <div className="edit_form-groups col-md-5">
                                                        <label>State</label>
                                                        <input type="text" className="edit_address_input_form" name='state' placeholder="Enter State" value={viewAddress.state} onChange={editAddress} />
                                                    </div>
                                                    <div className="edit_form-group">
                                                        <label>Landmark</label>
                                                        <input type="text" name='landmark' className="edit_address_input_form" placeholder="Landmark (optional)" value={viewAddress.landmark} onChange={editAddress} />
                                                    </div>
                                                    <div className="edit_form-group edit_form_alt">
                                                        <label>Alternate phone</label>
                                                        <input type="text" name='altnumber' className="edit_address_input_form" placeholder="Alternate phone (optional)" value={viewAddress.altnumber} onChange={editAddress} />
                                                    </div>
                                                    <br />
                                                    <center>
                                                        <button type="submit" className="btn btn-primary" onClick={update}>Submit</button>
                                                    </center>
                                                    <button className='close_button_add' onClick={handleClose}>x</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div><br /><br />
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>


        </>
    )
}
