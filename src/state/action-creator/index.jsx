import axios from "axios"

export const cart = (item) => {
        return async(dispatch)=>{
        const res = await axios({
            method: "get",
            url: "http://localhost:8000/api/getItems",
            })
            dispatch({
                type : 'cart',
                payload : res.data
            })
    }
    
       
}

export const fetchCart = (item) => {
    return async(dispatch)=>{
        const res = await axios({
            method: "get",
            url: "http://localhost:8000/api/fetchcart",
            headers: {
            authToken: localStorage.getItem("token")}
            })
        dispatch({
            type : 'fetch',
            payload : res.data.cart
        })
    }
}

export const addToCart = (id) => {
    return async(dispatch)=>{
        const res = await axios({
            method: "post",
            url: `http://localhost:8000/api/addtocart/${id}`,
            headers: {
            authToken: localStorage.getItem("token")       }
            }) 
            console.log(res.data);
        dispatch({
            type : 'add',
            payload : res.data
        })
    }
}

export const removeFromCart = (id) => {
    return async(dispatch)=>{
        const res = await axios({
            method: "delete",
            url: `http://localhost:8000/api/deletfromcart/${id}`,
            headers: {
            authToken: localStorage.getItem("token")           }
            })
        // console.log(res);
        dispatch({
            type : 'remove',
            payload : res.data
        })
    }
}

export const emptyCart = (item) => {
    return async(dispatch)=>{
        const res = await axios({
            method: "delete",
            url: `http://localhost:8000/api/emptycart`,
            headers: {
            authToken: localStorage.getItem("token")           }
            })
        // console.log(res);
        dispatch({
            type : 'empty',
            payload : item
        })
    }
}

export const getAddresses = (item) => {
    return async(dispatch)=>{
        const res = await axios({
            method: "get",
            url: "http://localhost:8000/api/getaddresses",
            headers: {
            authToken: localStorage.getItem("token")           }
            })
            console.log(res.data);
        dispatch({
            type : 'getAdresses',
            payload : res.data
        })
    }
}

export const addAddress = (item) => {
    return async(dispatch)=>{
        const { name, email, phone, address } = item
        const res = await axios({
            method: 'post',
            url: "http://localhost:8000/api/addaddress",
            data: { name, email, phone, address },
            headers: {
                authToken: localStorage.getItem("token")           }
 
          });
          // console.log(res);
          dispatch({
              type : 'addAdress',
              payload : res.data
            })
        }
}
    
export const removeAddress = (id) => {
        return async(dispatch)=>{
            const res = await axios({
                method: "delete",
                url: `http://localhost:8000/api/removeaddress/${id}`,
                headers: {
                authToken: localStorage.getItem("token")           }
                })
            dispatch({
                type : 'removeAddress',
                payload : res.data
            })
        }
}
    
export const addOrder = (item) => {
        return async(dispatch)=>{
            const { items, bill, address } = item
            const res = await axios({
            method: 'post',
            url: "http://localhost:8000/api/addorder",
            data: { items, bill, address },
            headers: {
                authToken: localStorage.getItem("token")           }
 
          });
          // console.log(res);
          dispatch({
              type : 'addOrder',
              payload : res.data
            })
        }
}

export const order = (item) => {
        return async(dispatch)=>{
            const res = await axios({
                method: "get",
                url: "http://localhost:8000/api/getorders",
                headers: {
                authToken: localStorage.getItem("token")           }
                })
            // console.log(res);
            dispatch({
                type : 'Order',
                payload : res.data
            })
        }
}

export const signup = (item) => {
        return async(dispatch)=>{
        const { name, email, password } = item
        const res = await axios({
            method: 'post',
            url: "http://localhost:8000/api/signup",
            data: { name, email, password },
 
          });
            // console.log(res);
            dispatch({
                type : 'signup',
                payload : res.data
            })
        }
}

// export const login = (item) => {
//     return async(dispatch)=>{
//     const { email, password } = item
//     const res = await axios({
//         method: 'post',
//         url: "http://localhost:8000/api/login",
//         data: { email, password },
//       });
//         // console.log(res);
//         dispatch({
//             type : 'login',
//             payload : res.data
//         })
//     }
// }

// export const getuser = (item) => {
//     return async(dispatch)=>{
//     const res = await axios({
//         method: 'post',
//         url: "http://localhost:8000/api/getcustomer",
//         // data: { email, password },
//       });
//         console.log(res);
//         dispatch({
//             type : 'getuser',
//             payload : res.data
//         })
//     }
// }

export const calculateBill = (item) => {
        return (dispatch)=>{
            dispatch({
                type : 'bill',
                payload : item
            })
        }
}