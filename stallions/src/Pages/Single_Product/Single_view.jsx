import React, { useEffect, useState } from 'react'
import './Single_view.css'
import Navbarf2 from '../../Components/Navbarf2/Navbarf2'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Single_view() {

    const {id} = useParams()

    const [ViewSinglePr, setViewSinglePr] = useState({})

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/single_product_APTView/${id}`).then((response) => {
            setViewSinglePr(response.data)
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [id])

    return (
        <>
            <div className='sinle_pr_nav'>
            <Navbarf2></Navbarf2>
            <img className='search_img' src="/stallions_logo.png" alt="" />
            <img className='search_img2' src="/stallions_name.png" alt="" />
            </div>
            <div className='card single_view_body'>
                <div className="single_view_container">
                    <img className="single_img" src={`/clothes/${ViewSinglePr.image}`} alt="" />
                    <h2 className='single_prd_mne'>{ViewSinglePr.productname}</h2>
                    <p className='single_details'>{ViewSinglePr.price}</p>
                    <div className='single__pr_details'>
                        <p>Category : {ViewSinglePr.category}</p>
                        <p>Mandate : {ViewSinglePr.mandate}</p>
                        <p>Color : <span style={{height:"10px", width:"10px", borderRadius:"100%", backgroundColor:`#${ViewSinglePr.color}`, color:`#${ViewSinglePr.color}`}}>-----</span></p>
                        <p>Size : {ViewSinglePr.size}</p>
                        <p>Gender : {ViewSinglePr.gender}</p>
                        <p>Occasion : {ViewSinglePr.occasion}</p>
                    </div>
                    
                </div>
            </div><br/>
        </>
    )
}
