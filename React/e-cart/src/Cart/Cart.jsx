import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, setDecrement } from '../redux/productAction/ProductAction'



const Cart = () => {

    const dispatch = useDispatch();

    const cart_data = useSelector((state) => state.productData.cartData)
    console.log(cart_data);
    //   let totalPrice =0

    let totalPrice = cart_data.reduce((acc, curr) => {
        return acc + curr.price * curr.quantity;
    }, 0)
    


    return (
        <div className='container'>
            <div className='row d-flex justify-content-evenly'>
                <div className='col-md-8 border mt-4 mb-4 bg-light'>
                    <h4 className='ms-4 mt-2'>Item List</h4>
                    {
                        cart_data && cart_data.length ? (
                            cart_data.map((item) => (

                                <div className='row border' style={{ backgroundColor: 'white' }}>
                                    <div className='col-md-3 d-flex justify-content-center align-items-center'>
                                        <img src={item.image} alt={item.title} className='w-50 h-50' />
                                    </div>
                                    <div className='col-md-6'>
                                        <h4 className='mt-4'>{item.title}</h4>
                                    </div>
                                    <div className='col-md-3'>

                                        <div className='d-flex justify-content-between mt-4'>
                                            <button className='ms-1 ps-2 pe-2 pb-1' style={{ border: '0px' }}
                                             onClick={() => dispatch(setDecrement(item.id))}
                                            >-</button>
                                            <p>{item.quantity}</p>
                                            <button className='pb-1' style={{ border: '0px' }}
                                                onClick={() => dispatch(addToCart(item))}
                                            >+</button>
                                        </div>
                                        <div className='d-flex justify-content-center mt-4'>
                                            <h6>{item.quantity} * ${item.price}</h6>
                                        </div>

                                    </div>

                                </div>

                            ))
                        ) : (
                            <div className='d-flex justify-content-center align-items-center' style={{ height: '25vh' }}>
                                <h4>No Items add in cart</h4>
                            </div>
                        )
                    }
                </div>
                <div className='col-md-3 ms-1 mt-4 mb-3 border bg-light h-75' >
                    <h5 className='ms-2 mt-2 mb-3'>Order Summary</h5>
                    <div className='row d-flex justify-content-center' style={{ backgroundColor: '#FFFFFF' }}>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <p>Products ({cart_data.length})</p>
                            <p>${totalPrice.toFixed(2)}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Shipping</p>
                            <p>$ 30</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h6>Total Amount</h6>
                            <h6>$ {(totalPrice + 30).toFixed(2)}</h6>
                        </div>
                        <button className='btn btn-dark w-75 mt-4 mb-4'>Go to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart