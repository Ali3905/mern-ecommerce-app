import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

const ProductDetails = () => {
  let { id } = useParams()
  const items = useSelector(state=>state.products.products).find(e=>e._id === id)

  const item = useMemo(()=> items, [items] )

  const dispatch = useDispatch()
  const { addToCart, } = bindActionCreators(actionCreators, dispatch)


  const navigate = useNavigate();
  const notify = async(id) => {
    if(localStorage.getItem("token")){
    await addToCart(id)
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

    <nav aria-label="breadcrumb" className='bread'>
  <ol className="breadcrumb br">
    <li className="breadcrumb-item"><a href="/">Home</a></li>
    <li className="breadcrumb-item active" aria-current="page">Details</li>
  </ol>
</nav>


   {item && <div className='row details_container d-flex '>
        <div className='col-md-2 col-sm-5 p-2 d-flex '>

           <div className="d-flex flex-md-column sm_container">
            <img className="sm" src={`${item.images[0]}`} alt="Product" />
            <img className="sm" src={`${item.images[1]}`} alt="Product" />
            <img className="sm" src={`${item.images[2]}`} alt="Product" /> 
          </div>  
        </div>
        <div className='col-md-6 col-sm-2 md'>
            <img src={`${item.image}`} alt="Product" />
        </div>
        <div className='col-md-4 det'>
            <h5>{item.category}</h5>
            <h2>{item.name}</h2>
            <h5>Price ${item.price}</h5>
            <h5>Color</h5>
            <div className='my-2'>
              <div className="btn-group" role="group" aria-label="Basic radio toggle button group">

              <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" />
              <label className="btn btn-success color-label mx-2" htmlFor="btnradio1"><i className="bi bi-check-lg"></i></label>

              <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
              <label className="btn btn-danger color-label mx-2" htmlFor="btnradio2"><i className="bi bi-check-lg"></i></label>

              <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
              <label className="btn btn-primary color-label mx-2" htmlFor="btnradio3"><i className="bi bi-check-lg"></i></label>
            </div>

            </div>

            <h5>Size</h5>
            <div className='my-2'>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" className="btn-check" name="size" id="btnradio4" autoComplete="off" />
              <label className="btn btn-outline-primary" htmlFor="btnradio4">S</label>

              <input type="radio" className="btn-check" name="size" id="btnradio5" autoComplete="off"/>
              <label className="btn btn-outline-primary" htmlFor="btnradio5">M</label>

              <input type="radio" className="btn-check" name="size" id="btnradio6" autoComplete="off"/>
              <label className="btn btn-outline-primary" htmlFor="btnradio6">L</label>
            </div>

            </div>
            <button className="btn btn-primary" onClick={handle_buy}>Buy Now</button>
            <button className='btn btn-primary mx-2' onClick={()=>notify(item)}><i className="bi bi-cart-plus"></i>  Add to Cart</button>
            <h5>Details</h5>
            <ul>
                <li>Metal Covering</li>
                <li>Colors Available</li>
                <li>Colors Available</li>
                <li>All over Pakistan</li>
            </ul>
        </div>
      
    </div>}
    </>
  )
}

export default ProductDetails
