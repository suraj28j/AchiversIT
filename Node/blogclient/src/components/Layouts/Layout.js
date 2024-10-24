import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routing from '../../routes/Routing'

const Layout = () => {
  return (
    <div>
      <Header/>
      <Routing/>
      <Footer/>
    </div>
  )
}

export default Layout
