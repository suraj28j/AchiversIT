import React from 'react'
import { discoutProducts } from '../Images/products'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import {addToCart} from '../redux/productAction/ProductAction'

const BigDiscount = () => {
    const dispatch = useDispatch();
    
    let buttonHandler = () => {
        toast.success("Added Successfully")
      }
    return (
        <div style={{ backgroundColor: '#f6f9fc' }}>
            <div className='container mt-4 mb-4 d-flex justify-content-center'>
                <div className='row mt-4'>
                    <h2 className='text-center mt-4'>Big Discount</h2>
                    <div className='col-md-1'></div>
                    <div className='col-md-10'>
                        <div className='row g-2'>
                        {
                        discoutProducts.map((items) => (
                            <div className='col-sm-6 col-lg-3 col-xl-4 ' key={items.id}>
                                <div className='card' style={{ height: "100%" }}>
                                    <div className='d-flex justify-content-between p-2'>
                                        <span className='p-2' style={{ backgroundColor: '#0f3460', color: 'white', borderRadius: '5px' }}>{items.discount}% off</span>
                                        <i className="bi bi-heart-fill"></i>
                                    </div>
                                    <div className='card-body'>
                                        <Link to={`/product/${items.id}`}>
                                        <div className='card-img-top d-flex justify-content-center'>
                                            <img src={items.imgUrl} className="img-fluid" alt={items.id} />
                                        </div>
                                        </Link>
                                    </div>
                                    <div className='card-title ms-4 me-4'>
                                        <h6 className="card-title">{items.productName}</h6>
                                        <span className='d-flex mt-4 mb-4'>
                                            <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                                            <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                                            <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                                            <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                                            <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                                        </span>
                                    </div>
                                    <div className='d-flex justify-content-between ms-4 me-4 mb-4'>
                                        <h5>$ {items.price}</h5>
                                        <button
                                            style={{ border: '0px', borderRadius: '50%', width: '40px', height: '40px', paddingBottom: '4px', fontSize: '150%' }}
                                            onClick={()=>{dispatch(addToCart(items));buttonHandler()}}
                                        >+</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                </div>
            </div>
        </div>
    )
}

export default BigDiscount
