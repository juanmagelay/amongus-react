import React, {useContext} from "react"
import { Context } from "../../../context/CartContext"

import { NavLink } from 'react-router-dom';

import '../HuNavbar.css';

const HuCartWidget = () => {
    const {unidades} = useContext(Context)

    return (
        <>
        {unidades>0 ?
            <NavLink className="hu-navbar-option pr-1" to='/cart' >
                Mi carrito ({unidades})
                <img
                    alt="Cart"
                    src="../assets/icons/cart.svg"
                    width="30px"
                    height="auto"
                />
            </NavLink>
        :<div></div>}
        </>
    );
}; 

export default HuCartWidget;