import React, {useState} from "react";

const Context = React.createContext()

const CartFuncion = ({children}) =>{
    const [cart, setCart] = useState([])
    const [unidades, setUnidades] = useState(0)
    const [total, setTotal] = useState(0)

    const onAdd = (producto, cantidad) =>{
        const itemExiste=cart.find(item=>item.id===producto.id)
        if(!itemExiste){
            setCart([...cart, {id:producto.id, nombre:producto.productName, precio:producto.productPrice, cantidad:cantidad, subtotal:(producto.productPrice*cantidad)}])
            setTotal(total+(producto.productPrice*cantidad))
            setUnidades(unidades+1)
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
        }
    } 
    
    return <Context.Provider value={{cart, unidades, total, onAdd}}>
        {children}
    </Context.Provider>

    }


export {CartFuncion, Context}