import React, { useEffect, useState } from 'react'
import './ViewBookedProducts.css'
import axios from 'axios'
import Navbarf2 from '../../../Components/Navbarf2/Navbarf2'

export default function ViewBookedProducts() {

    const [Ordered, getOrdered] = useState([])


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/admin_view_orders_api').then((response) => {
            getOrdered(response.data.data)
        })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    console.log(Ordered);

    return (
        <>
            <div className='admin-user-nav2'>
                <Navbarf2></Navbarf2>
            </div>
            <div className="container approve_busses">
                <>
                    {
                        Ordered[0] == null ?
                            <div className='cycle_load'>
                                <span class="loader_cy"></span>
                                <div class="text_cycle">No Pending Request</div>
                            </div>
                            :
                            <table className="approve_bus_table">
                                <thead>
                                    <tr>
                                        <th>Sl.No</th>
                                        <th>Image</th>
                                        <th>User Email</th>
                                        <th>Product Details</th>
                                    </tr>
                                </thead>
                                <>
                                    {
                                        Ordered.map((data, key) => (
                                            <>
                                                <tbody>
                                                    <tr>
                                                        <td >{key + 1}</td>
                                                        <td ><div className='bus_img23' style={{ backgroundImage: `url(/clothes/media/${data.image})` }}></div></td>
                                                        <td>{data.email}</td>
                                                        <td style={{ textAlign: 'left' }}>
                                                            <tr className='approve_bus_tr'>
                                                                <td>User Name</td>
                                                                <td>: {data.name}</td>
                                                            </tr>
                                                            <tr className='approve_bus_tr'>
                                                                <td>Product Number</td>
                                                                <td>: {data.productname}</td>
                                                            </tr>
                                                            <tr className='approve_bus_tr'>
                                                                <td>Price</td>
                                                                <td>: {(parseFloat(data.price) - parseFloat(data.price) * 0.01)*parseFloat(data.quantity)}</td>
                                                            </tr>
                                                            <tr className='approve_bus_tr'>
                                                                <td>Quantity</td>
                                                                <td>: {data.quantity}</td>
                                                            </tr>
                                                            <tr className='approve_bus_tr'>
                                                                <td>Size</td>
                                                                <td>: {data.size}</td>
                                                            </tr>
                                                            <tr className='approve_bus_tr'>
                                                                <td>Colour</td>
                                                                <td>: <span style={{height:"10px", width:"10px", borderRadius:"100%", backgroundColor:`#${data.color}`, color:`#${data.color}`}}>------</span></td>
                                                            </tr>
                                                            <tr className='approve_bus_tr'>
                                                                <td>Category</td>
                                                                <td>: {data.category}</td>
                                                            </tr>
                                                            <tr className='approve_bus_tr'>
                                                                <td>Gender</td>
                                                                <td>: {data.gender}</td>
                                                            </tr>
                                                            <tr className='approve_bus_tr'>
                                                                <td>Payment Type</td>
                                                                <td>: {data.pyment_type}</td>
                                                            </tr>
                                                            
                                                        </td>


                                                    </tr>
                                                </tbody>
                                            </>
                                        ))
                                    }
                                </>
                            </table>
                    }
                </>
            </div>
        </>
    )
}
