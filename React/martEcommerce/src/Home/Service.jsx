import React from 'react'
import { serviceData } from '../Images/products'

const Service = () => {
  return (
    <div className='container mt-4 mb-4'>
      <div className='row g-2'>
        {
          serviceData.map((item) => (
            // <div className='col-sm-6 col-lg-4 col-xl-3 mb-3' key={items.bg}>
            //   <div className="card text-center" style={{ backgroundColor: items.bg }} key={items.id}>
            //     <div className="card-body">
            //       <span className='bg-light p-2 rounded-circle text-center'>{items.icon}</span>
            //       <h5 className="card-title m-4">{items.title}</h5>
            //       <p className="card-text m-4">{items.subtitle}</p>
            //     </div>
            //   </div>
            // </div>

            <div className='col-sm-6 col-lg-4 col-xl-3 text-center' key={item.title}>
            <div className="card" style= {{background:`${item.bg}`}}>
              <div className="card-body">
                <i className={`mt-3 ${item.icon}`}></i>
                <h5 className="card-title mt-4">{item.title}</h5>
                <p className="card-text mt-4 mb-4">{item.subtitle}</p>
              </div>
            </div>
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default Service
