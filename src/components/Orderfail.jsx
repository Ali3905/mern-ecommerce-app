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
                <h3 className='text-center'>Order has been Failed</h3>
                <i className="bi bi-emoji-frown-fill sad_icon"></i>
                <p>Your Order has been Failed due to some error</p>
                <button className='btn btn-primary btn_link'><Link className='btn_link' to="/">Back to home</Link></button>
            </form>

        </div>
      
    </div>
  )
}

export default Ordersuccess