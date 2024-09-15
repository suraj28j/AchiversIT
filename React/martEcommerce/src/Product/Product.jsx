import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import cover from '../Images/cover.jpg'
import { products } from '../Images/products'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/productAction/ProductAction'
import { toast } from 'react-toastify'

const Product = () => {

  const dispatch = useDispatch()

  const { id } = useParams();
  // console.log(id);
  const [product, setProduct] = useState({});
  const [like, setLike] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getProduct();
    window.scrollTo(0, 0)
  }, [id])

  const getProduct = () => {

    // For getting single product
    const getItem = products.find((item) => {
      return item.id === id
    })
    // console.log(getItem);
    setProduct(getItem)
    setReviews(getItem.reviews)

    // getting products for releted single product
    const likeItem = products.filter((item) => {
      return item.category === getItem.category && item.id !== getItem.id;
    })
    setLike(likeItem)
  }

  const buttonHandler = (e) => {
    e.preventDefault();
    toast.success("Added Successfully");
  }

  // const toastMsg = () => {
  //     toast.success("Added Successfully")
  // }

 

  return (
    <>
      <div className='position-relative'>
        <img src={cover} alt='cover' className='w-100' style={{ height: '25vh', filter: 'brightness(40%)' }} />
        <h4 className='text-light position-absolute top-50 start-50 translate-middle '>{product.productName}</h4>
      </div>
      <div className='container'>
        <div className='row mt-4'>
          <div className='col-md-6'>
            <img src={product.imgUrl} alt={product.productName} className='img-fluid' />
          </div>
          <div className='col-md-6'>
            <h3>{product.productName}</h3>
            <div className='mt-4 mb-4'>
              <i class="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
              <i class="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
              <i class="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
              <i class="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
              <i class="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
              <span className='ms-4 text-secondary'>{product.avgRating}</span>
            </div>
            <div className='d-flex'>
              <h5>$ {product.price}</h5>
              <p className='ms-4'>category:{product.category}</p>
            </div>
            <p>{product.shortDesc}</p>
            <form className='mt-4' onSubmit={buttonHandler}>
              <input className='form-control' type='text' style={{ width: '100px' }}></input>
              <button className='btn mt-3' type='submit' style={{ backgroundColor: '#0f3460', color: 'white' }}
              onClick={()=>{dispatch(addToCart(product));}}
              >Add To Cart</button>
            </form>
          </div>
        </div>

        {/* Description */}
        <div className='row mt-3 mb-4'>
          <h6>Description
            <Link className='text-decoration-none' data-bs-toggle="collapse" data-bs-target="#Example">
              <span className='ms-4 text-secondary'>Reviews ({reviews.length})</span>
            </Link>
          </h6>

          <div className="collapse" id="Example">
            {
              reviews.map((item) => (
                <div className='mt-2 mb-3'>
                  <p>Jhon Doe
                    <br />
                    <span className='text-warning'>{item.rating} (rating)</span>
                    <br />
                    {item.text}</p>
                </div>
              ))
            }
          </div>
          <p>{product.description}</p>
        </div>
      </div>

      {/* You might also like */}
      <div className='container mt-4 mb-4'>
        <div className='row g-2 d-flex justify-content-center'>
          <h2 className='mt-4'>You might also like</h2>
          {
            like.map((item) => (
              <div className='col-md-4'>
                <div className='card' style={{ height: '100%' }}>
                  <div className='card-body'>
                    <Link to={`/product/${item.id}`}>
                      <div className='card-img-top d-flex justify-content-center'>
                        <img src={item.imgUrl} alt={item.productName} className='img-fluid w-75' />
                      </div>
                    </Link>
                    <div className='card-title'>
                      <h6>{item.productName}</h6>
                    </div>
                    <div className='card-subtitle'>
                      <span className='d-flex mt-4 mb-4'>
                        <i class="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                        <i class="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                        <i class="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                        <i class="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                        <i class="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                      </span>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <h5>$ {item.price}</h5>
                      <button
                        style={{ border: '0px', borderRadius: '50%', width: '40px', height: '40px', paddingBottom: '4px', fontSize: '150%' }}
                      >+</button>
                    </div>
                  </div>

                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Product
