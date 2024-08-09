import React from 'react'
// import * as Icon from 'react-bootstrap-icons'


const CardsComponent = () => {
    return (
        // <div className='container-fluid'>
        //     <div className="row row-cols-1 row-cols-md-4 g-4 text-center">

        //         <div className="col">
        //             <div className="card">
        //                 <p className='mt-4'><Icon.CarFrontFill/></p>
        //                 <div className="card-body">
        //                     <h5 className="card-title">Free Shiping</h5>
        //                     <p className="card-text mt-3">Lorem ipsum dolor sit amet</p>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="col">
        //             <div className="card">
        //                 <p className='mt-4'><Icon.CreditCardFill/></p>
        //                 <div className="card-body">
        //                     <h5 className="card-title">Safe Payment</h5>
        //                     <p className="card-text mt-3">Lorem ipsum dolor sit amet</p>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="col">
        //             <div className="card">
        //                 <p className='mt-4'><Icon.ShieldShaded/></p>
        //                 <div className="card-body">
        //                     <h5 className="card-title">Secure Payment</h5>
        //                     <p className="card-text mt-3">Lorem ipsum dolor sit amet</p>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="col">
        //             <div className="card">
        //                 <p className='mt-4'><Icon.Headphones/></p>
        //                 <div className="card-body">
        //                     <h5 className="card-title">Back Guarantee</h5>
        //                     <p className="card-text mt-3">Lorem ipsum dolor sit amet</p>
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        // </div>

        <div className='container'>
            <div className='row'>

               
                <div className='col-sm-3 mb-3 mb-sm-0'>
                    <div class="card text-center" style={{width: "18rem;", backgroundColor:'#fdefe6'}}>
                        <div class="card-body">
                            <span><i class="bi bi-car-front-fill mt-4"></i></span>
                            <h5 class="card-title mt-4">Free Shiping</h5>
                            <p class="card-text mt-4">Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>

                <div className='col-sm-3 mb-3 mb-sm-0'>
                    <div class="card text-center" style={{width: "18rem;", backgroundColor:'#ceebe9'}}>
                        <div class="card-body">
                            <i class="bi bi-credit-card-fill mt-4"></i>
                            <h5 class="card-title mt-4">Safe Payment</h5>
                            <p class="card-text mt-4">Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>

                <div className='col-sm-3 mb-3 mb-sm-0'>
                    <div class="card text-center" style={{width: "18rem;", backgroundColor:'#e2f2b2'}}>
                        <div class="card-body">
                            <i class="bi bi-shield-shaded mt-4"></i>
                            <h5 class="card-title mt-4">Secure Payment</h5>
                            <p class="card-text mt-4">Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>

                <div className='col-sm-3 mb-3 mb-sm-0'>
                    <div class="card text-center" style={{width: "18rem;", backgroundColor:'#d6e5fb'}}>
                        <div class="card-body">
                            <i class="bi bi-headphones mt-4"></i>
                            <h5 class="card-title mt-4">Back Guarantee</h5>
                            <p class="card-text mt-4">Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
               

            </div>
        </div>


    )
}

export default CardsComponent
