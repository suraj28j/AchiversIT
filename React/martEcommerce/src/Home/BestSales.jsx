import React from 'react'
import { products } from '../Images/products'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/productAction/ProductAction'
import { toast } from 'react-toastify'


const BestSales = () => {

    const dispatch = useDispatch()

    const bestSales = products.filter((item) => {
        return item.category === 'sofa'
    })

    let buttonHandler = () => {
        toast.success("Added Successfully")
      }

    return (
        <div style={{ backgroundColor: '#f6f9fc' }}>
            <div className='container mt-4 mb-4'>
                <div className='row '>
                    <h2 className='text-center mt-4'>Best Sales</h2>
                    <div className='col-md-1'></div>
                    <div className='col-md-10'>
                        <div className='row g-2 d-flex justify-content-center'>
                        {
                        bestSales.map((item) => (
                            <div className='col-sm-6 col-lg-3 col-xl-4' key={item.id}>
                                <div className='card' style={{ height: '100%' }}>
                                    <div className='card-body'>
                                        <Link to={`/product/${item.id}`}>
                                        <div className='card-img-top d-flex justify-content-center'>
                                            <img src={item.imgUrl} alt={item.productName} className='img-fluid' />
                                        </div>
                                        </Link>
                                    </div>
                                    <div className='card-title ms-4 me-4'>
                                        <h6>{item.productName}</h6>
                                    </div>
                                    <div className='card-subtitle ms-4 me-4'>
                                        <span className='d-flex mt-4 mb-4'>
                                            <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                                            <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                                            <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                                            <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                                            <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                                        </span>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center ms-4 me-4 mb-4'>
                                        <h5>$ {item.price}</h5>
                                        <button
                                            style={{ border: '0px', borderRadius: '50%', width: '45px', height: '45px', paddingBottom: '4px', fontSize: '150%' }}
                                            onClick={()=>{dispatch(addToCart(item));buttonHandler()}}
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

export default BestSales
