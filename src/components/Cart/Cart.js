import React, {useContext} from "react";
import { Context } from "../../context/CartContext";

const Cart = ()=>{
    const {cart, unidades, total} = useContext(Context)

    return(
        <>
        <div className="text-center mt-4">
                  <h1>El total del carrito es {total} y tenes {unidades} productos</h1>
            {cart.map((item)=>
                <div>
                    <h2>Nombre:{item.nombre}</h2>
                    <h2>Precio:{item.precio}</h2>
                    <h2>Cantidad:{item.cantidad}</h2>
                    <h2>Subtotal:{item.subtotal}</h2>
                    <button>{item.id}</button>
                </div>
                )}
        </div>
        </>
    )
}

export default Cart