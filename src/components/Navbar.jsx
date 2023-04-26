import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

const Navbar = (props) => {
  const cartItems = useSelector(state=> state.cart.products)
  const dispatch = useDispatch()
  const { fetchCart } = bindActionCreators(actionCreators, dispatch)

  const logout = () => {
    localStorage.removeItem("token")
  }

  const location = useLocation()


  useEffect(()=>{
    if(localStorage.getItem("token")){
      fetchCart()
  }},[])
  useEffect(()=>{
    if(!localStorage.getItem("token")){
      localStorage.clear()
  }},[])

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">E-shopper</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active": ""}`} aria-current="page" to="/mern-ecommerce-app">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/cart"?"active": ""}`} to="/cart"><i className="bi bi-cart-plus"></i> Cart  <span className="badge text-bg-secondary">{cartItems && cartItems.length}</span></Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Mobile</a></li>
            <li><a className="dropdown-item" href="/">Watches</a></li>
            <li><Link className="dropdown-item" to="/orders">Sports</Link></li>
          </ul>       
        </li> */}
      </ul>
      <form className="d-flex s_form" role="search">
        <input className="inp_search" type="search" placeholder="Search" aria-label="Search"/>
        <button className="search" type="submit"><i className="bi bi-search"></i></button>
      </form>
      
      <div className="nav-item dropdown mx-2">
          <span className="text-light nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            My Account
          </span>
          <ul className="dropdown-menu">
          {!localStorage.getItem("token")?<div>
           <li><Link className="dropdown-item" to="/login">login</Link></li>
           <li><Link className="dropdown-item" to="/signup">Signup</Link></li>
            </div>: <div><Link className="dropdown-item" onClick={logout} to="/login">Logout</Link>
            <li><Link className="dropdown-item" to="/orders">Orders</Link></li> </div> } 
          </ul>     
        </div>
    </div>
  </div>
      
</nav>
    </>
  )
}

export default Navbar
