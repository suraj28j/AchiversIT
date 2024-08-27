import React, { useState, useEffect } from 'react'

const About = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        let data = await fetch(`https://fakestoreapi.com/products?limit=5`)
        let res = await data.json();
        console.log(res);
        setProducts(res)
    }

    return (
        <div className='container'>
            <div className='row'>
                <h2 className='text-center mt-4'>About Us</h2>
                <hr className='mt-2' />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, ipsa, omnis molestiae similique consequatur dolores consequuntur quae, tempora obcaecati eum saepe. Consequatur, libero! Inventore tempore commodi quasi officia maxime quis! Consequatur voluptates voluptatibus laboriosam in ut! Corrupti quos quia, consequatur mollitia repudiandae cum, harum id, amet ipsam inventore ipsum eum! Saepe quia quae ut dolorum optio. Dicta magni, repellat sit cum magnam, nobis officia totam quia molestiae rerum iusto rem? Impedit inventore sed nisi voluptatum perspiciatis, mollitia nam exercitationem incidunt saepe assumenda alias blanditiis possimus aliquid ullam, laborum, quidem dolores eum aut ipsa minus! Eum atque quod consequuntur quis esse corporis est unde, vero earum! Vero qui dolore sed cum voluptatibus officia consectetur labore illum sit fuga nobis, at velit cupiditate, perferendis odit. Adipisci porro, excepturi facere itaque eveniet cum error modi pariatur numquam accusantium cumque. Itaque dolorem debitis autem mollitia! Est voluptate vitae minima delectus inventore corporis facere officia commodi accusamus deserunt omnis reprehenderit illum harum vel, fugiat amet mollitia sint atque? Voluptas nulla dolor est reprehenderit eius nobis, officia, eum sed perspiciatis itaque architecto animi adipisci ut vitae facere quis non commodi, esse tempore laudantium blanditiis ea? Facilis quibusdam ullam officiis saepe et ipsa maxime eaque eveniet non?</p>
                <div className='row mt-2'>
                    <h4 className='text-center mt-4'>Our Products</h4>
                    {
                        products.map((item)=>(
                            <div className='col text-center mt-4'>
                                <img src={item.image} alt={item.id} className='img-fluid' style={{height:'7rem'}}></img>
                                <p className='mt-2'>{item.category}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default About
