import React, { useCallback, useEffect,  useMemo,  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state';

const Cart = () => {
    const [ quantity, setQuantity ] = useState(0);

    const incQuantity = useCallback(()=> setQuantity(quantity+1),[quantity])
    const decQuantity = useCallback(()=> setQuantity(quantity-1),[quantity])

    const cartItems = useSelector(state=>state.cart.products)
    const cartBill = useSelector(state=>state.cartBill.cart_bill)
    const dispatch = useDispatch()
    const { removeFromCart, calculateBill, fetchCart } = bindActionCreators(actionCreators, dispatch)

    const finalCart = useMemo(()=>cartItems,[cartItems])

    const removeFromCart1 = (id) => {
        removeFromCart(id)
        fetchCart()
    }

    useEffect(()=>{
        calculateBill(cartItems)
        fetchCart()
    },[cartItems])
  return (
    <div className=' '>
        <div className="row cart ">
            <div className="cart_items col-md-8 d-flex flex-column ">
                {!cartItems.length && <h2>No items in cart</h2>}
            {cartItems && cartItems.map((product)=>{
             return   <div key={product._id} className='cart_item'>
                    <div className='cart_item1 d-flex flex-row justify-content-start align-items-center'>
                    <img  src={product.image} alt="Product"/>
                    <div className='mx-2'>
                        <h5 className='mb-0'>{product.name}</h5>
                        <p>{product.category}</p>
                        <p>${product.price}</p>
                    </div>
                    </div>
                    <div className='w-25 d-flex justify-content-between'>
                        <div className='opacity-0'>
                        <button className="btn" onClick={decQuantity}>-</button>
                        <span className='pt-1'>{quantity}</span>
                        <button className="btn" onClick={incQuantity}>+</button>
                        </div>
                    <i className="bi bi-x-circle" onClick={()=>removeFromCart1(product._id)}></i>
                    </div>
                </div>
            })}
            </div>
            {cartItems.length && <div className=" cart_bill col-md-4 border-1 border-dark ">
                <h2>Order Total</h2>
                <div className='d-flex justify-content-between'>
                <input type="text" placeholder='Promo Code' className='px-2 ' /><button className="btn btn-primary">Apply</button>
                </div>
                <div className='d-flex justify-content-between'>
                <p>Items</p><p>${cartBill.items_price}</p>
                </div>
                <div className='d-flex justify-content-between'>
                <p>Shipping</p><p>${cartBill.shipping}</p>
                </div>
                <div className='d-flex justify-content-between'>
                <p>Discount</p><p>-{cartBill.discount_in_percent}%</p>
                </div>
                <div className='d-flex justify-content-between'>
                <p>Total</p><p>${cartBill.total}</p>
                </div>
                <Link className='btn_link' to="/checkout"><button className="btn btn-primary col-12">Pay Now</button></Link>
            </div>}
        </div>

    </div>
  )
}

export default Cart
