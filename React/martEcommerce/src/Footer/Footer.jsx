import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className='container pt-3'>
                <div className='row'>

                    <div className='col-md-3'>
                        <h4><i className="bi bi-bag-fill"></i> Mart</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga molestiae eligendi maiores ratione corporis assumenda, consequuntur dolor voluptas vero numquam quos laborum deserunt? Ducimus, similique.</p>
                    </div>

                    <div className='col-md-3'>
                        <h5 className='ms-4 ms-md-0'>About Us</h5>
                        <ul>
                            <li>Carrers</li>
                            <li>Our Store</li>
                            <li>Our Cares</li>
                            <li>Term and Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    <div className='col-md-3'>
                        <h5>Coutomer Care</h5>
                        <ul>
                            <li>Help Center</li>
                            <li>How to Buy</li>
                            <li>Track Your Order</li>
                            <li>Corporate & Bulk Purchasing</li>
                            <li>Return & Refunds</li>
                        </ul>
                    </div>

                    <div className='col-md-3'>
                        <h5>Contact US</h5>
                        <ul>
                            <li>Venkateshwara PG, Brookflied, Bangalore, Karnataka</li>
                            <li>Email : suraj28j@gmail.com</li>
                            <li>Phone : +91 8115188825</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
