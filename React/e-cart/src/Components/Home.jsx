import React, { useEffect, useState } from 'react'
import cover from '../Assets/Images/cover.jpg'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/productAction/ProductAction';
// import { Link } from 'react-router-dom'
const Home = () => {

    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        let data = await fetch(`https://fakestoreapi.com/products`)
        let res = await data.json();
        console.log(res);
        setProducts(res)
    }

    const getMenCollection = async () => {
        let data = await fetch(`https://fakestoreapi.com/products`)
        let res = await data.json();
        const getData = res.filter((item) => {
            return item.category === `men's clothing`
        })
        console.log(getData);
        setProducts(getData);
    }
    const getWomenCollection = async () => {
        let data = await fetch(`https://fakestoreapi.com/products`)
        let res = await data.json();
        const getData = res.filter((item) => {
            return item.category === `women's clothing`
        })
        setProducts(getData);
    }
    const getJeweleryCollection = async () => {
        let data = await fetch(`https://fakestoreapi.com/products`)
        let res = await data.json();
        const getData = res.filter((item) => {
            return item.category === `jewelery`
        })
        setProducts(getData);
    }
    const getElectronicsCollection = async () => {
        let data = await fetch(`https://fakestoreapi.com/products`)
        let res = await data.json();
        const getData = res.filter((item) => {
            return item.category === `electronics`
        })
        setProducts(getData);
    }
    return (
        <>
            {/* Home Cover and Heading */}
            <img src={cover} alt='cover' className='w-100' style={{ height: '25vh' }} />
            <h3 className='text-center mt-4'>Latest Products</h3>

            {/* Buttons */}
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6 '>

                        <nav class="nav nav-pills flex-column flex-md-row">
                            <button className="flex-sm-fill text-sm-center me-2 mt-1 btn btn-secondary" onClick={getData}>All</button>
                            <button className="flex-sm-fill text-sm-center me-2 mt-1 btn btn-secondary"
                            onClick={getMenCollection}
                            >Men's Clothing</button>
                            <button className="flex-sm-fill text-sm-center me-2 mt-1 btn btn-secondary"
                            onClick={getWomenCollection}
                            >Women's Clothing</button>
                            <button className="flex-sm-fill text-sm-center me-2 mt-1 btn btn-secondary"
                            onClick={getJeweleryCollection}
                            >Jewelary</button>
                            <button className="flex-sm-fill text-sm-center mt-1 btn btn-secondary"
                            onClick={getElectronicsCollection}
                            >Electrinics</button>
                        </nav>

                    </div>
                    <div className='col-md-3'></div>

                </div>

                <div className='row mt-4'>
                    <div className='col-md-1'></div>
                    <div className='col-md-10'>
                        <div className='row d-flex justify-content-center'>
                            {
                                products.map((item) => (
                                    <div className='col-md-4 g-3'>

                                        <div class="card" style={{ height: '24rem' }}>
                                            <div className='d-flex justify-content-center mt-2'>
                                                <img src={item.image} className="img-fluid" alt={item.title} style={{ height: '10rem', width: '15rem' }} />
                                            </div>
                                            <div class="card-body">
                                                <div style={{ overflow: 'hidden', height: '1.5rem' }}>
                                                    <h5 class="card-title">{item.title}</h5>
                                                </div>
                                                <div className='mt-2' style={{ overflow: 'hidden', height: '3rem' }}>
                                                    <p class="card-text" >{item.description}</p>
                                                </div>
                                                <h6 className='mt-4 text-center'>$ {item.price}</h6>
                                                <div className='d-flex justify-content-center mt-4'>
                                                    <button className='btn btn-dark me-3'>Details</button>
                                                    <button className='btn btn-dark'
                                                        onClick={() => dispatch(addToCart(item))}
                                                    >Add to Cart</button>
                                                </div>
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
        </>
    )
}

export default Home
