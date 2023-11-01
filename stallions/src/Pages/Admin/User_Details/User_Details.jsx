import React, { useEffect, useState } from 'react'
import './User_Details.css'
import Navbarf2 from '../../../Components/Navbarf2/Navbarf2'
import axios from 'axios'

export default function User_Details() {

    const [userDetails, getUserDetails] = useState([])

    const [filterUser, getFilterUser] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/view_user_api').then((response) => {
            getUserDetails(response.data.data)
        })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    console.log(userDetails);

    useEffect(() => {
        const data = userDetails.filter((data, key) => {
            return data.role === "user"
        })
        getFilterUser(data)
    }, [userDetails])

    const deletee = (deleteid) => {

        axios.delete(`http://127.0.0.1:8000/api/delete_user_api/${deleteid}`).then((response) => {
            console.log(response);
            window.location.reload()
        })
    }

    return (
        <>
            <div className='admin-user-nav'>
                <Navbarf2></Navbarf2>
            </div>
            <div className="container admin-view-user">
                <table className="table table-admin table-bordered" border={1} cellPadding={20} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>Sl.No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <>
                        {
                            filterUser.map((data, key) => (
                                <>
                                    <tbody>
                                        <tr>
                                            <td>{key + 1}</td>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td>{data.number}</td>
                                            <td>
                                                <center>
                                                    <button className="btn btn-danger text-dark" onClick={() => { deletee(data.id) }}>Delete</button>
                                                </center>
                                            </td>
                                        </tr>
                                    </tbody>
                                </>
                            ))
                        }
                    </>
                </table>
            </div>
        </>
    )
}
