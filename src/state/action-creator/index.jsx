import axios from "axios"
const host = "https://mern-ecommerce-app-backend-zeta.vercel.app"

export const cart = (item) => {
        return async(dispatch)=>{
        const res = await axios({
            method: "get",
            url: `${host}/api/getItems`,
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
            url: `${host}/api/fetchcart`,
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
            url: `${host}/api/addtocart/${id}`,
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
            url: `${host}/api/deletfromcart/${id}`,
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
        // eslint-disable-next-line
        const res = await axios({
            method: "delete",
            url: `${host}/api/emptycart`,
            headers: {
            authToken: localStorage.getItem("token")           }
            })
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
            url: `${host}/api/getaddresses`,
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
            url: `${host}/api/addaddress`,
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
                url: `${host}/api/removeaddress/${id}`,
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
            url: `${host}/api/addorder`,
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
                url: `${host}/api/getorders`,
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

export const calculateBill = (item) => {
        return (dispatch)=>{
            dispatch({
                type : 'bill',
                payload : item
            })
        }
}