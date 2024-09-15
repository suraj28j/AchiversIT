import React from 'react'
import Carousel from './Carousel'
import Service from './Service'
import BigDiscount from './BigDiscount'
import NewArrivals from './NewArrivals'
import BestSales from './BestSales';

const Home = () => {
  return (
    <div>
      <Carousel/>
      <Service/>
      <BigDiscount/>
      <NewArrivals/>
      <BestSales/>
    </div>
  )
}

export default Home
