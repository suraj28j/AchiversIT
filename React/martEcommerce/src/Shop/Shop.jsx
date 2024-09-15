import React, { useState, useEffect } from 'react'
import cover from '../Images/cover.jpg'
import { products } from '../Images/products'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import {addToCart} from '../redux/productAction/ProductAction'

const Shop = () => {

  const dispatch = useDispatch();

  const [productCategory, setProductCategory] = useState([]);
  const[coverHeading,setCoverHeading] = useState('product')

  useEffect(() => {
    getProduct();
  }, [])

  const getProduct = () => {
    const getData = products.filter((item) => {
      return item.category === 'sofa';
    })
    setProductCategory(getData)
  }

  const LinkButtonHandler = (category) => {
    const getData = products.filter((item) => {
      return item.category === category;
    })
      setProductCategory(getData);
      setCoverHeading(category);
  }

  const onChangeHandler = (e) => {
      console.log(e.target.value);
      let findData = products.filter((item)=>{
        return item.category.match(e.target.value) || item.productName.match(e.target.value)
      })
      setProductCategory(findData)
      // setCoverHeading(findData)
  }

  let buttonHandler = () => {
    toast.success("Added Successfully")
  }

  return (
    <>
      <div className='position-relative'>
        <img src={cover} alt='cover' className='w-100' style={{ height: '25vh', filter: 'brightness(40%)' }} />
        <h4 className='text-light position-absolute top-50 start-50 translate-middle '>{coverHeading}</h4>
      </div>

      <div className='container mt-4 mb-4'>

        <div className='row mb-4'>
          <div className='col-md-4 mb-2'>
            <div class="dropdown">
              <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#0f3460', color: 'white' }}>
                Filter By Category
              </button>
              <ul class="dropdown-menu">
                <li><Link className="dropdown-item" onClick={() => LinkButtonHandler('sofa')}>Sofa</Link></li>
                <li><Link className="dropdown-item" onClick={() => LinkButtonHandler('chair')}>Chair</Link></li>
                <li><Link className="dropdown-item" onClick={() => LinkButtonHandler('watch')}>Watch</Link></li>
                <li><Link className="dropdown-item" onClick={() => LinkButtonHandler('mobile')}>Mobile</Link></li>
                <li><Link className="dropdown-item" onClick={() => LinkButtonHandler('wireless')}>Wireless</Link></li>
              </ul>
            </div>
          </div>
          {/* <div className='col-md-1'></div> */}
          <div className='col-md-8'>
            <form class="">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1" 
                onInput={onChangeHandler}
                />
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
              </div>
            </form>
          </div>
        </div>

        <div className='row g-2 mt-4 d-flex justify-content-center'>
          {
            productCategory.map((item) => (
              <div className='col-md-4'>
                <div className='card' style={{ height: '100%' }}>
                  <div className='card-body'>
                    <Link to={`/product/${item.id}`}>
                      <div className='card-img-top d-flex justify-content-center'>
                        <img src={item.imgUrl} alt={item.productName} className='img-fluid w-75' />
                      </div>
                    </Link>
                  </div>
                  <div className='card-title ms-4 me-4'>
                    <h6>{item.productName}</h6>
                  </div>
                  <div className='card-subtitle ms-4 me-4'>
                    <span className='d-flex mt-4 mb-4'>
                      <i class="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                      <i class="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                      <i class="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                      <i class="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                      <i class="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
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
    </>
  )
}

export default Shop
