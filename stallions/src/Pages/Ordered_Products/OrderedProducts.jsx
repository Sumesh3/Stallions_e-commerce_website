import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './OrderedProducts.css'
import Navbarf2 from '../../Components/Navbarf2/Navbarf2'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export default function OrderedProducts() {

  const id = localStorage.getItem('login_id')

  const [order, getOrder] = useState([])

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/view_all_orders_api/${id}`).then((response) => {
      getOrder(response.data.data)
      console.log(response.data.data);
    }).catch((error) => {
      console.log(error);
    })
  }, [])
  console.log(order.price);

  return (
    <>
      <div className='order-nav'>
        <Navbarf2></Navbarf2>
      </div>
      <div className='container'>
        <div class="card order_card">
          <div class="gap_order">
            <div class="mx-auto gap_2"> </div>
          </div>
          <div class="order_title mx-auto">My Orders</div>


          {
            order[0] == null ?
              <>
              <div className='empty_order'>Empty</div>
              </>
              :
              order.map((data, key) => (
                
                  < div class= "maintomain" >
                  <div class="row row-main">
                    <div class="col-3">
                      <img class="img-fluid" src={`/clothes/media/${data.image}`} />
                    </div>
                    <div class="col-6">
                      <div class="row d-flex">
                        <p>
                          <b className='product_name_i'>{data.productname}</b>
                        </p>

                      </div>
                      <div class="row d-flex">
                        <p style={{ textTransform: 'uppercase' }}>Size : {data.size}</p>
                        <p style={{ textTransform:'capitalize' }}>Colour : <span style={{height:"10px", width:"10px", borderRadius:"50%", backgroundColor:`#${data.color}`, color:`#${data.color}`}}>-----</span></p>
                        <p >Payment : {data.pyment_type}</p>
                        <p class="text-muted">Delivery on :</p>
                      </div>
                    </div>
                    <div class="col-3 d-flex justify-content-end">
                      <p>
                        <b><CurrencyRupeeIcon fontSize='5px' />{(parseFloat(data.price) - parseFloat(data.price) * 0.01)*parseFloat(data.quantity)}</b><br />
                        <b>Quantity : {data.quantity}</b>
                      </p>

                    </div>
                  </div>
                </div>
        ))
          }


      </div>
    </div >

    </>
  )
}
