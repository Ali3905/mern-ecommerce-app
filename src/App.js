import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Login from './components/Login';
import SignUp from './components/Signup'
import Ordersuccess from './components/Ordersuccess';
import Orderfail from './components/Orderfail';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Checkout from './components/Checkout';
import Orders from './components/Orders';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';

function App() {

  const dispatch = useDispatch()
  const { cart} = bindActionCreators(actionCreators, dispatch)

  useEffect(()=>{
    cart()
  },[])
  
  return (
    <>
      <Router basename="/mern-ecommerce-app">
    <Navbar/>
        <Routes>
          <Route exact path='/mern-ecommerce-app' element={<Home />}/>
          <Route exact path='/details/:id' element={<ProductDetails/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<SignUp/>}/>
          <Route exact path='/ordersuccess' element={<Ordersuccess/>}/>
          <Route exact path='/orderfail' element={<Orderfail/>}/>
          <Route exact path='/checkout' element={<Checkout/>}/>
          <Route exact path='/orders' element={<Orders />}/>
        </Routes>
    <Footer/>
      </Router>
      </>
  );
}

export default App;
