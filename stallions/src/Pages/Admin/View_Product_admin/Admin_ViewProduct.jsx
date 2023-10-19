import React, { useEffect, useState } from 'react'
import './Admin_ViewProduct.css'
import axios from 'axios'
import Navbarf2 from '../../../Components/Navbarf2/Navbarf2'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PreviewIcon from '@mui/icons-material/Preview';
import { Link } from 'react-router-dom';

export default function Admin_ViewProduct() {

  const [all, setall] = useState(true)


  const [ViewProduct, setViewProduct] = useState([])
  // const [filterprodut, setfilterprodut] = useState([])

  const [filterData, setfilterData] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/view_product_api').then((response) => {
      setViewProduct(response.data.data)
      console.log(response.data);
    }).catch((error) => {

    })
  }, [])

  const getGender = (gender) => {
    console.log(gender);
    const data = ViewProduct.filter((data, key) => {
      return data.gender == gender
    })
    console.log(data);
    // setViewProduct(data)
    setfilterData(data)
  }

  const deletee = (deleteid) => {

    axios.delete(`http://127.0.0.1:8000/api/delete_product_api/${deleteid}`).then((response) => {
      console.log(response);
      window.location.reload()
    })
  }

  return (
    <>
      <div className='view-admin'>
        <Navbarf2></Navbarf2>
      </div>
      <div className='demmy_1'>
      <ul className="nice_scrolls">
        <li><a className='head-view-admi' onClick={() => { setall(true) }}>ALL PRODUCTS</a></li>
        <li><a className='head-view-admi' onClick={() => { getGender("Men"); setall(false) }}>MEN</a></li>
        <li><a className='head-view-admi' onClick={() => { getGender("Boys"); setall(false) }}>BOYS</a></li>
        <li><a className='head-view-admi' onClick={() => { getGender("Girls"); setall(false) }}>GIRLS</a></li>
        <li><a className='head-view-admi' onClick={() => { getGender("Women"); setall(false) }}>WOMEN</a></li>
      </ul>


      {all ?
        ViewProduct.map((data, key) => (
          <>
            <div className="card card-outer">
              <center>
                <div className="card-content" ><img src={`/clothes/${data.image}`} alt="" style={{ height: '180px', width: '180px' }} /></div>
                <div className="card-content ptitle-name" style={{ fontSize: '20px', fontWeight: '700', marginTop: '5px' }}>{data.productname} </div>
                <div className="card-content ptitle-price"><CurrencyRupeeIcon fontSize='1px' /> {data.price}</div>
                <div className="card-content">Category : {data.category}</div>
                <div className="card-content" style={{ textTransform: 'capitalize' }}>Size : {data.size}</div>
                <div className='buttons'>
                  <Link to={`/single_view/${data.id}`} className="viewadmin"><PreviewIcon /></Link>
                  <Link to={`/edit_product/${data.id}`} className="editt"><EditIcon /></Link>
                  <button onClick={() => { deletee(data.id) }} className="detelee"><DeleteIcon /></button>
                </div>
              </center>
            </div>
          </>
        ))
        :
        filterData[0] ?

          filterData.map((data, key) => (
            <>
              <div className="card card-outer">
                <center>
                  <div className="card-content" ><img src={`/clothes/${data.image}`} alt="" style={{ height: '180px', width: '180px' }} /></div>
                  <div className="card-content ptitle-name" style={{ fontSize: '20px', fontWeight: '700', marginTop: '5px' }}>{data.productname} </div>
                  <div className="card-content ptitle-price"><CurrencyRupeeIcon fontSize='1px' /> {data.price}</div>
                  <div className="card-content">Category : {data.category}</div>
                  <div className="card-content" style={{ textTransform: 'capitalize' }}>Size : {data.size}</div>
                  <div className='buttons'>
                    <Link to={`/single_view/${data.id}`} className="viewadmin"><PreviewIcon /></Link>
                    <Link to={`/edit_product/${data.id}`} className="editt"><EditIcon /></Link>
                    <button className="detelee" onClick={() => { deletee(data.id) }}><DeleteIcon /></button>
                  </div>
                </center>
              </div>
            </>
          ))
          :
          <div className='filter_admin_no'>No Products found</div>
      }
      </div>

    </>

  )
}
