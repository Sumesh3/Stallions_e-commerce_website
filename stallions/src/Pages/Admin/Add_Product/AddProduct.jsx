import React, { useState } from 'react'
import './AddProduct.css'
import axios from 'axios'
import Navbarf2 from '../../../Components/Navbarf2/Navbarf2'

export default function AddProduct() {
    const [product, getproduct] = useState({})
    const [file, setFile] = useState("")

    const addDetails = (event) => {
        const name = event.target.name
        const value = event.target.value
        getproduct({ ...product, [name]: value })
    }

    const Confirm = () => {
        const data = new FormData()
        data.append("image", file)
        data.append("productname", product.productname)
        data.append("price", product.price)
        data.append("category", product.category)
        data.append("mandate", product.mandate)
        data.append("color", product.color)
        data.append("size", product.size)
        data.append("gender", product.gender)
        data.append("occasion", product.occasion)
        axios.post("http://127.0.0.1:8000/api/add_product_api", data).then((response) => {
            console.log(response);
        })
            .catch((error) => {

            })
    }


    return (
        <>
            <div className='add-admin'>
                <Navbarf2></Navbarf2>
            </div>
            <div className="container mt-5 prdmain">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card cardss">
                            <div className="card-header cardh text-center">
                                Add Product
                            </div>
                            <div className="card-body cardd">


                                <form>
                                    <div className="form-group">
                                        <label className='form-name'>Product Name</label>
                                        <input type="text" className="form-control" name='productname' onChange={addDetails} />
                                    </div>
                                    <div className="form-group">
                                        <label className='form-name'>Price</label>
                                        <input type="text" inputMode='numeric' className="form-control" name='price' onChange={addDetails} />
                                    </div>
                                    <div className="form-group ">
                                        <label className='form-name'>Category</label><br />
                                        <div className='container category-grid'>
                                            <div className='child category-child'>
                                                <input type="radio" name='category' value={'Shirt'} onChange={addDetails} />  <label className='gender-view'>Shirt</label>
                                            </div>
                                            <div className='child category-child'>
                                                <input type="radio" name='category' value={'T-Shirt'} onChange={addDetails} />  <label className='gender-view'>T-Shirt</label>
                                            </div>
                                            <div className='child category-child'>
                                                <input type="radio" name='category' value={'Sweater'} onChange={addDetails} />  <label className='gender-view'>Sweater</label>
                                            </div>
                                            <div className='child category-child'>
                                                <input type="radio" name='category' value={'Trousers'} onChange={addDetails} />  <label className='gender-view'>Trousers</label>
                                            </div>
                                            <div className='child category-child'>
                                                <input type="radio" name='category' value={'Jacket'} onChange={addDetails} />  <label className='gender-view'>Jacket</label><br />
                                            </div>
                                            <div className='child category-child'>
                                                <input type="radio" name='category' value={'Coat'} onChange={addDetails} />  <label className='gender-view'>Coat</label>
                                            </div>
                                            <div className='child category-child'>
                                                <input type="radio" name='category' value={'Underwear'} onChange={addDetails} />  <label className='gender-view'>Underwear</label>
                                            </div>
                                            <div className='child category-child'>
                                                <input type="radio" name='category' value={'Swimsuit'} onChange={addDetails} />  <label className='gender-view'>Swimsuit</label><br />
                                            </div>
                                            <div className='child category-child'>
                                                <input type="radio" name='category' value={'Blouse'} onChange={addDetails} />  <label className='gender-view'>Blouse</label>
                                            </div>
                                            <div className='child category-child'>
                                                <input type="radio" name='category' value={'Cardigan'} onChange={addDetails} />  <label className='gender-view'>Cardigan</label>
                                            </div>
                                            <div className='child category-child'>
                                                <input type="radio" name='category' value={'Jeans'} onChange={addDetails} />  <label className='gender-view'>Jeans</label>
                                            </div>
                                            <div className='child category-child'>
                                                <input type="radio" name='category' value={'Skirt'} onChange={addDetails} />  <label className='gender-view'>Skirt</label>
                                            </div>
                                            <div className='child category-child'>
                                                <input type="radio" name='category' value={'Suit'} onChange={addDetails} />  <label className='gender-view'>Suit</label><br />
                                            </div>
                                            <div className='child category-child'>
                                                <input type="radio" name='category' value={'Sportswear'} onChange={addDetails} />  <label className='gender-view'>Sportswear</label>
                                            </div>
                                            <div className='child category-child'>
                                                <input type="radio" name='category' value={'Leggins'} onChange={addDetails} />  <label className='gender-view'>Leggins</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className='form-name'>Gender</label><br />
                                        <input className='gender-views' type="radio" name='gender' value={'Men'} onChange={addDetails} />  <label className='gender-view'>Men</label>
                                        <input type="radio" name='gender' value={'Boys'} onChange={addDetails} />  <label className='gender-view'>Boys</label>
                                        <input type="radio" name='gender' value={'Girls'} onChange={addDetails} />  <label className='gender-view'>Girls</label>
                                        <input type="radio" name='gender' value={'Women'} onChange={addDetails} />  <label className='gender-view'>Women</label>
                                    </div>

                                    <div className="form-group">
                                        <label className='form-name'>Occasion</label><br />
                                        <input className='gender-views' type="radio" name='occasion' value={'Casual'} onChange={addDetails} />  <label className='gender-view'>Casual</label>
                                        <input type="radio" name='occasion' value={'Formal'} onChange={addDetails} />  <label className='gender-view'>Formal</label>
                                        <input type="radio" name='occasion' value={'Party'} onChange={addDetails} />  <label className='gender-view'>Party</label>
                                        <input type="radio" name='occasion' value={'Ethnic'} onChange={addDetails} />  <label className='gender-view'>Ethnic</label>
                                    </div>

                                    <div className="form-group">
                                        <label className='form-name'>Manfacturing Date</label>
                                        <input type="date" className="form-control" name='mandate' onChange={addDetails} />
                                    </div>
                                    <div className="form-group">
                                        <label className='form-name'>Colour</label>


                                        <div class="card-body ">
                                            <div class="shop__sidebar__colour">
                                                <label class="c-1" for="sp-1" style={{ borderWidth: product.color == 'FF0000' ? '3px' : '' }}>
                                                    <input name='color' value={'FF0000'} type="radio" id="sp-1" onChange={addDetails} />
                                                </label>
                                                <label class="c-2" for="sp-2" style={{ borderWidth: product.color == 'FFA500' ? '3px' : '' }}>
                                                    <input name='color' value={'FFA500'} type="radio" id="sp-2" onChange={addDetails} />
                                                </label>
                                                <label class="c-3" for="sp-3" style={{ borderWidth: product.color == 'FFFF00' ? '3px' : '' }}>
                                                    <input name='color' value={'FFFF00'} type="radio" id="sp-3" onChange={addDetails} />
                                                </label>
                                                <label class="c-4" for="sp-4" style={{ borderWidth: product.color == '00FF00' ? '3px' : '' }}>
                                                    <input name='color' value={'00FF00'} type="radio" id="sp-4" onChange={addDetails} />
                                                </label>
                                                <label class="c-5" for="sp-5" style={{ borderWidth: product.color == '0000FF' ? '3px' : '' }}>
                                                    <input name='color' value={'0000FF'} type="radio" id="sp-5" onChange={addDetails} />
                                                </label>
                                                <label class="c-6" for="sp-6" style={{ borderWidth: product.color == '4B0082' ? '3px' : '' }}>
                                                    <input name='color' value={'4B0082'} type="radio" id="sp-6" onChange={addDetails} />
                                                </label>
                                                <label class="c-7" for="sp-7" style={{ borderWidth: product.color == 'EE82EE' ? '3px' : '' }}>
                                                    <input name='color' value={'EE82EE'} type="radio" id="sp-7" onChange={addDetails} />
                                                </label>
                                                <label class="c-8" for="sp-8" style={{ borderWidth: product.color == '000000' ? '3px' : '' }}>
                                                    <input name='color' value={'000000'} type="radio" id="sp-8" onChange={addDetails} />
                                                </label>
                                                <label class="c-9" for="sp-9" style={{ borderWidth: product.color == 'ffffff' ? '3px' : '' }}>
                                                    <input name='color' value={'ffffff'} type="radio" id="sp-9" onChange={addDetails} />
                                                </label>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="form-group">
                                        <label className='form-name'>Size</label>


                                        <div class="card-body">
                                            <div class="shop__size">
                                                <label for="xs" style={{ borderWidth: product.size == 'xs' ? '2px' : '' }}>xs
                                                    <input name='size' value={'xs'} type="radio" id="xs" onChange={addDetails} />
                                                </label>
                                                <label for="sm" style={{ borderWidth: product.size == 's' ? '2px' : '' }}>s
                                                    <input name='size' value={'s'} type="radio" id="sm" onChange={addDetails} />
                                                </label>
                                                <label for="md" style={{ borderWidth: product.size == 'm' ? '2px' : '' }}>m
                                                    <input name='size' value={'m'} type="radio" id="md" onChange={addDetails} />
                                                </label>
                                                <label for="xl" style={{ borderWidth: product.size == 'xl' ? '2px' : '' }}>xl
                                                    <input name='size' value={'xl'} type="radio" id="xl" onChange={addDetails} />
                                                </label>
                                                <label for="2xl" style={{ borderWidth: product.size == '2xl' ? '2px' : '' }}>2xl
                                                    <input name='size' value={'2xl'} type="radio" id="2xl" onChange={addDetails} />
                                                </label>
                                                <label for="xxl" style={{ borderWidth: product.size == 'xxl' ? '2px' : '' }}>xxl
                                                    <input name='size' value={'xxl'} type="radio" id="xxl" onChange={addDetails} />
                                                </label>
                                                <label for="3xl" style={{ borderWidth: product.size == '3xl' ? '2px' : '' }}>3xl
                                                    <input name='size' value={'3xl'} type="radio" id="3xl" onChange={addDetails} />
                                                </label>
                                                <label for="4xl" style={{ borderWidth: product.size == '4xl' ? '2px' : '' }}>4xl
                                                    <input name='size' value={'4xl'} type="radio" id="4xl" onChange={addDetails} />
                                                </label>
                                            </div>
                                        </div>


                                    </div>

                                    <div className="form-group">
                                        <label className='form-name'>Product Image</label>
                                        <input type='file' className="form-control" onChange={(event) => { setFile(event.target.files[0]) }} />
                                    </div><br />

                                    <center>
                                        <button type="submit" className="btn btn-primary btn-block" onClick={Confirm}>Confirm</button>
                                    </center>

                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}
