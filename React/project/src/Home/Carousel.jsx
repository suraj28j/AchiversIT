import React from 'react'
import sofa from '../Images/hero-img.png'
import phone from '../Images/phone-08.png'
import wireless from '../Images/wireless-01.png'
import watch from '../Images/watch-07.png'


const Carousel = () => {
  return (
    <div className='carousel slide' data-bs-ride="carousel">
      <div className='carousel-inner d-flex align-items-center' data-bs-interval='1000' style={{height:'75vh'}}>

        <div className='carousel-item active'>
          <div className='row ms-4 me-4'>
            <div className='col-md-1'></div>
            <div className='col-md-5 d-flex align-items-center'>
              <div>
              <h1>50% Off For Your First Shopping</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
              <button style={{border:'0px'}}>Visit Collections</button>
              </div>
            </div>
            <div className='col-md-1'></div>
            <div className='col-md-4 d-flex justify-content-center'>
              <img src={sofa} alt='sofa' className='img-fluid'/>
            </div>
            <div className='col-md-1'></div>
          </div>
        </div>

        <div className='carousel-item'>
          <div className='row ms-4 me-4'>
          <div className='col-md-1'></div>
            <div className='col-md-5  d-flex align-items-center'>
              <div>
              <h1>50% Off For Your First Shopping</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
              <button style={{border:'0px'}}>Visit Collections</button>
              </div>
            </div>
            <div className='col-md-1'></div>
            <div className='col-md-4 d-flex justify-content-center'>
              <img src={phone} alt='phone' className='img-fluid' />
            </div>
            <div className='col-md-1'></div>
          </div>
        </div>

        <div className='carousel-item'>
          <div className='row ms-4 me-4'>
          <div className='col-md-1'></div>
            <div className='col-md-5 d-flex align-items-center'>
              <div>
              <h1>50% Off For Your First Shopping</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
              <button style={{border:'0px'}}>Visit Collections</button>
              </div>
            </div>
            <div className='col-md-1'></div>
            <div className='col-md-4 d-flex justify-content-center'>
              <img src={wireless} alt='wireless' className='img-fluid' />
            </div>
            <div className='col-md-1'></div>
          </div>
        </div>

        <div className='carousel-item'>
          <div className='row ms-4 me-4'>
          <div className='col-md-1'></div>
            <div className='col-md-5  d-flex align-items-center'>
              <div>
              <h1>50% Off For Your First Shopping</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
              <button style={{border:'0px'}}>Visit Collections</button>
              </div>
            </div>
            <div className='col-md-1'></div>
            <div className='col-md-4 d-flex justify-content-center align-items-center'>
              <img src={watch} alt='watch'className='h-75'/>
            </div>
            <div className='col-md-1'></div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Carousel
