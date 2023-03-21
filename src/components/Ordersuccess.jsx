import React from 'react'
import {
    Link
  } from "react-router-dom";

const Ordersuccess = () => {
  return (
    <div className='container signup my-3'>
        <h2 className='text-center'>E-Shopper</h2>
        <div className="col-5 d-flex justify-content-center mx-auto my-4 form_container ">
            <form action="" className='d-flex flex-column mx-auto text-center'>
                <h3 className='text-center'>Order #21131 has been Completed</h3>
                <i className="bi bi-check-circle-fill check_icon"></i>
                <p>Your Order will be delivered in 2-4 days</p>
                <Link className='btn btn-primary btn_link' to="/mern-ecommerce-app">Continue Shopping</Link>
            </form>

        </div>
      
    </div>
  )
}

export default Ordersuccess
