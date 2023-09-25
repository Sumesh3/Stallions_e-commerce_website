import React, { useEffect, useState } from 'react'
import './Admin_ViewProduct.css'
import axios from 'axios'
import Navbarf2 from '../../../Components/Navbarf2/Navbarf2'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PreviewIcon from '@mui/icons-material/Preview';

export default function Admin_ViewProduct() {

  const [ViewProduct, setViewProduct] = useState([])

  const [filterData, setfilterData] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/view_product_api').then((response) => {
      setViewProduct(response.data.data)
      console.log(response.data);
    }).catch((error) => {

    })
  }, [])

  const getGender = (gender)=>{
    console.log(gender);
    const data = ViewProduct.filter((data, key)=>{
      return data.gender == gender
    })
    console.log(data);
    // setViewProduct(data)
    setfilterData(data)
  }

  


  return (
    <>
      <div className='view-admin'>
        <Navbarf2></Navbarf2>
      </div>
      <label className='head-view-admin'>ALL PRODUCTS</label>
      <label className='head-view-admin' onClick={()=>{getGender("Men")}}>MEN</label>
      <label className='head-view-admin' onClick={()=>{getGender("Boys")}}>BOYS</label>
      <label className='head-view-admin' onClick={()=>{getGender("Girls")}}>GIRLS</label>
      <label className='head-view-admin' onClick={()=>{getGender("Women")}}>WOMEN</label>

      
      {filterData[0]?
      
        filterData.map((data, key) => (
          <>
            <div className="card card-outer">
              <center>
                <div className="card-content" ><img src={`/clothes/${data.image}`} alt="" style={{ height: '180px' }} /></div>
                <div className="card-content ptitle-name" style={{ fontSize: '20px', fontWeight: '700', marginTop: '5px' }}>{data.productname} </div>
                <div className="card-content ptitle-price"><CurrencyRupeeIcon fontSize='1px' /> {data.price}</div>
                <div className="card-content">Category : {data.category}</div>
                <div className="card-content" style={{ textTransform: 'capitalize' }}>Size : {data.size}</div>
                <div className='buttons'>
                  <button className="viewadmin"><PreviewIcon /></button>
                  <button className="editt"><EditIcon /></button>
                  <button className="detelee"><DeleteIcon /></button>
                </div>
              </center>
            </div>
          </>
        ))
      
      
      :
      
        
        ViewProduct.map((data, key) => (
          
          
          <>
            <div className="card card-outer">
              <center>
                <div className="card-content" ><img src={`/clothes/${data.image}`} alt="" style={{ height: '180px' }} /></div>
                <div className="card-content ptitle-name" style={{ fontSize: '20px', fontWeight: '700', marginTop: '5px' }}>{data.productname} </div>
                <div className="card-content ptitle-price"><CurrencyRupeeIcon fontSize='1px' /> {data.price}</div>
                <div className="card-content">Category : {data.category}</div>
                <div className="card-content" style={{ textTransform: 'capitalize' }}>Size : {data.size}</div>
                <div className='buttons'>
                  <button className="viewadmin"><PreviewIcon /></button>
                  <button className="editt"><EditIcon /></button>
                  <button className="detelee"><DeleteIcon /></button>
                </div>
              </center>
            </div>
          </>
        ))
      }
    </>
  )
}
