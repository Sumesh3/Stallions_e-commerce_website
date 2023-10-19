import React from 'react'
import './Edit_Product.css'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import Navbarf2 from '../../../Components/Navbarf2/Navbarf2'

export default function Edit_Product() {

    const { id } = useParams()

    const [ViewSinglePr, setViewSinglePr] = useState({})

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/single_product_APTView/${id}`).then((response) => {
            setViewSinglePr(response.data)
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [id])

    const editProducts = (event) => {
        const name = event.target.name
        const value = event.target.value
        setViewSinglePr({ ViewSinglePr, [name]: value })
    }
    console.log(ViewSinglePr);

    const update = () => {
        axios.put(`http://127.0.0.1:8000/api/update_single_product_api/${id}`, ViewSinglePr).then((response) => {
            window.location.reload()
        })
    }

    return (
        <>
            <div className='sinle_pr_nav'>
                <Navbarf2></Navbarf2>
                <img className='search_img' src="/stallions_logo.png" alt="" />
                <img className='search_img2' src="/stallions_name.png" alt="" />
            </div>
            <form>
                <div className='card single_view_body'>
                    <div className="single_view_container1">
                        <img className="single_img" src={`/clothes/${ViewSinglePr.image}`} name='image' onChange={editProducts} />
                        <h2 className='single_prd_mne'><input type="text" value={ViewSinglePr.productname} name='productname' onChange={editProducts} /></h2>
                        <p className='single_details'><input type="text" value={ViewSinglePr.price} name='price' onChange={editProducts} /></p>
                        <div className='single__pr_details'>
                            <p>Category : <input type="text" value={ViewSinglePr.category} name='category' onChange={editProducts} /></p>
                            <p>Mandate : <input type="text" value={ViewSinglePr.mandate} name='mandate' onChange={editProducts} /></p>
                            <p>Size : <input type="text" value={ViewSinglePr.size} name='size' onChange={editProducts} /></p>
                            <p>Gender : <input type="text" value={ViewSinglePr.gender} name='gender' onChange={editProducts} /></p>
                            <p>Occasion : <input type="text" value={ViewSinglePr.occasion} name='occasion' onChange={editProducts} /></p>
                        </div>
                        <center>
                            <button className='edit_pr_s' onClick={update} type='submit'>Submit</button>
                        </center>
                    </div>
                </div><br />
            </form>
        </>
    )
}
