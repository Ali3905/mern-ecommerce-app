import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const [newAddress, setNewAddress] = useState(false)
  const [address, setAddress] = useState({
    name:'',
    email: '',
    phone: '',
    address: '',
  })
  const [addressToShip, setAddressToShip] = useState({})

  const cartItems = useSelector(state=>state.cart.products)
  const cartBill = useSelector(state=>state.cartBill.cart_bill)
  const shipping_address = useSelector(state=>state.shipping_address.items)

  const dispatch = useDispatch()
  const { calculateBill, addAddress, addOrder, emptyCart, getAddresses, removeAddress } = bindActionCreators(actionCreators, dispatch)

  const navigate = useNavigate()

const submitCart = (e) =>{
  e.preventDefault()
  setNewAddress(false)
  addAddress(
    {
      name: address.name,
      email: address.email,
      phone: address.phone,
      address: address.address,
  },
  )
}

const checkout = (items) => {
  addOrder({
    items: cartItems,
    bill: cartBill,
    address: addressToShip
  })
  emptyCart()
}

const handl_link = () => {
  if (Object.keys(addressToShip).length === 0) {
    toast.error("Select atleast one address or add a new one", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  } else {
    
    checkout(cartItems)
    navigate("/ordersuccess")
  }
}

const handl_rem_add = (id) => {
  getAddresses()
  removeAddress(id)
}
  useEffect(()=>{
    calculateBill(cartItems)
},[cartItems])

  useEffect(()=>{
    getAddresses()
},[])
  

  return (
    <>
  <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
    <ToastContainer />

  <div className="container mb-5">
  <main>
    <div className="py-5 text-center">
      <h2>Checkout form</h2>
    </div>
  {shipping_address.map((items, i)=>{
  return <div className="card mb-1" key={i}>
  <div className="card-body">
    <div className='d-flex justify-content-between'>
      <p><strong>Name:</strong>  {items.name}</p>
      <i className="bi bi-x-circle" onClick={()=>handl_rem_add(items._id)}></i>
    </div>
    <p className="card-text"><strong>Address:</strong>  {items.address}</p>
    <span className="card-text"><strong>Email:</strong>  {items.email}</span><span><strong>  Phone:</strong> {items.phone}</span>
  </div>
  <div className="form-check">
  <input className="form-radio-input" type="radio" value="" id="flexCheckDefault" name='redio' onClick={()=>setAddressToShip(items)}/>
  <label className="form-radio-label mx-1" htmlFor="flexCheckDefault">
    Use this address
  </label>
</div>
</div>
})
}
    

 <div className="row g-5">
      <div className="col-md-5 col-lg-4 order-md-last d-flex flex-column">
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Products Price</h6>
            </div>
            <span className="text-muted">${cartBill.items_price}</span>
          </li>
         
          <li className="list-group-item d-flex justify-content-between bg-light">
            <div className="text-success">
              <h6 className="my-0">Redeem code</h6>
              <small>EXAMPLECODE</small>
            </div>
          </li>
        
          <li className="list-group-item d-flex justify-content-between bg-light">
            <div className="text-black">
              <h6 className="my-0">Discount</h6>
            </div>
            <span className="text-success">−{cartBill.discount_in_percent}%</span>
          </li>
          <li className="list-group-item d-flex justify-content-between ">
            <span className="text-black">Total (USD)</span>
            <strong>${cartBill.total}</strong>
          </li>
          <li className="list-group-item d-flex justify-content-between ">
        <form className="card p-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Promo code"/>
            <button type="submit" className="btn btn-secondary">Redeem</button>
          </div>
        </form>
          </li>
          <li className="list-group-item d-flex ">
          <button  onClick={handl_link} className='btn_link btn btn-primary mt-1 w-100'>Pay Now</button>
          </li>

        </ul>

      </div>
      {newAddress || shipping_address.length===0?<div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" noValidate="">
          <div className="row g-3">
            <div className="col-sm-12">
              <label htmlFor="firstName" className="form-label">Name</label>
              <input type="text" className="form-control" id="firstName" placeholder="Enter your full name" value={address.name} required="" onChange={(e)=> setAddress({...address, name:e.target.value})}/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="email" className="form-label">Email </label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" value={address.email} onChange={(e)=> setAddress({...address, email:e.target.value})}/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" className="form-control" id="phone" placeholder="+92333-11111111" value={address.phone} onChange={(e)=> setAddress({...address, phone:e.target.value})}/>
              <div className="invalid-feedback">
                Please enter a valid phone number.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" value={address.address} onChange={(e)=> setAddress({...address, address:e.target.value})}/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

          </div>

          <hr className="my-4"/>

          
          <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={submitCart}>Add address</button>
        </form>
      </div>:
      <div className="col-md-7 col-lg-8 ">
        <h4>or</h4>
        <button className="col-md-7 col-lg-8  btn btn-success btn-lg mb-2" onClick={()=>{setNewAddress(true)}}>Create new address</button>
      </div>}
    </div>
  </main>


</div>
    </>
  )
}

export default Checkout
