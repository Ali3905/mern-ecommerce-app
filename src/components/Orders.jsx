import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state';

const Orders = () => {

    const orders = useSelector(state=>state.orders.orders)
    const dispatch = useDispatch()
    const { order } = bindActionCreators(actionCreators, dispatch)
  
    useEffect(()=>{
        order()
    },[])
  return (
    <div className=' '>
        <div className="row cart ">
            <div className="cart_items col-md-8 d-flex flex-column ">
                {!orders.length && <h2>No orders yet</h2>}
        {orders && orders.map((ele, i)=>{
                    return <div key={i}>{ele.items.map((product, it)=>{
                        return   <div key={product._id} className='cart_item'>
                               <div className='d-flex flex-row justify-content-start '>
                               <img  src={product.image} alt="Product"/>
                               <div className='mb-0 mx-2'>
                                   <h5 className='mb-0'>{product.name}</h5>
                                   <p>{product.category}</p>
                                   <p>${product.price}</p>
                               </div>
                               </div>
                           </div>
                       })}
                       <div className="d-flex flex-row justify-content-between w-75 m-auto order_details">
                        <div className="left">
                            <h3>Billing Details</h3>
                            <div className='d-flex justify-content-between'>
                            <strong>Items Price:</strong><span>{ele.bill.items_price}$</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                            <strong>Shipping:</strong><span>{ele.bill.shipping}$</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                            <strong>Discount:</strong><span>-{ele.bill.discount_in_percent}%</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                            <strong>Total:</strong><span>{ele.bill.total}$</span>
                            </div>
                        </div>
                        <div className="right">
                            <h3>Billing Details</h3>
                            <div className='d-flex justify-content-between'>
                            <strong>Name:</strong><span>{ele.address.name}</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                            <strong>Email:</strong><span>{ele.address.email}</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                            <strong>Phone:</strong><span>{ele.address.phone}</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                            <strong>Address:</strong><span>{ele.address.address}</span>
                            </div>
                        </div>
                       </div>
                       </div>
                     
                })}
            
            </div>
        </div>

    </div>
  )
}

export default Orders


