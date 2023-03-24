import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';


const Home = () => {
    const products = useSelector(state=> state.products.products)

    const dispatch = useDispatch()
    const { addToCart, cart, fetchCart } = bindActionCreators(actionCreators, dispatch)

    const navigate = useNavigate()


    const notify = async(id) => {
        if(localStorage.getItem("token")){
        await addToCart(id)
        fetchCart()
        toast.success('Added to cart', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        }else{
            navigate("/login")
        }
    };

    const handle_buy = () => {
        if (localStorage.getItem("token")) {
            navigate("/checkout")
        } else {
            navigate("/login")
        }
    }
    useEffect(()=>{
        cart();

        if(localStorage.getItem("token")){
            fetchCart()
        }
        return () => {
            cart()
        }
    },[cart, fetchCart])
  
   
  return (
 
    <div>
    <ToastContainer position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"/>
    <ToastContainer />
    <div className='product_container row'>
        {products.map((product,i)=>{
        return <div key={product._id} className="col-xl-3 col-lg-4 col-md-6 col-sm-8" >
        <div className="card product" >
            <Link to={`/details/:${product._id}`}><img src={product.image} className="card-img-top" alt="..."/></Link>
            <div className="card-body">
                <p>{product.category}</p>
                <h5 className="card-title"><Link to={`/details/${product._id}`}>{product.name}</Link></h5>
                <p>${product.price} <span className='float-end' >Rating {[...Array(product.rating)].map((ele, i)=>{return <i key={i} className="bi bi-star-fill star"></i>})}</span></p>
                <button className="btn btn-primary text-light" onClick={handle_buy}>Buy Now</button>
                <button className="btn btn-primary mx-2" onClick={()=>notify(product._id)}>Add to cart</button>
            </div>
        </div>
        </div>

        })}
         
    </div>
    </div>
  )
}

export default Home
