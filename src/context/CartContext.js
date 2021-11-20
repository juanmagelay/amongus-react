import React, { useState } from "react";
import Swal from 'sweetalert2'

const Context = React.createContext()

const CartFuncion = ({children}) =>{
    const [cart, setCart] = useState([])
    const [unidades, setUnidades] = useState(0)
    const [total, setTotal] = useState(0)

    const onAdd = (producto, cantidad) =>{
        const itemExiste=cart.find(item=>item.id===producto.id)
        if(!itemExiste){
            setCart([...cart, {id:producto.id, nombre:producto.productTitle, precio:producto.productPrice, cantidad:cantidad, subtotal:(producto.productPrice*cantidad)}])
            setTotal(total+(producto.productPrice*cantidad))
            setUnidades(unidades+cantidad)
        } else {
            const cartAux=cart.map((item)=>{
                if(item.id===producto.id){
                    item.cantidad+=cantidad
                    item.subtotal+=(producto.productPrice*cantidad)
                }
                return item
            })
            setCart(cartAux)
            setTotal(total+(producto.productPrice*cantidad))
            setUnidades(unidades+cantidad)
        }
    }
    
    const removeItem = (id) => {
        const myItem = cart.find(item => item.id === id)
        const cartAux = cart.filter(item => item.id !== id) 
        setTotal(total - myItem.subtotal)
        setUnidades(unidades - myItem.cantidad)
        setCart([...cartAux])
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Eliminaste el producto del carrito`,
            showConfirmButton: false,
            timer: 2000
          })
    }
    
    return <Context.Provider value={{cart, unidades, total, onAdd, removeItem}}>
        {children}
    </Context.Provider>

    }


export { CartFuncion, Context }