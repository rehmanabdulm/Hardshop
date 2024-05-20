import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";"./CheckoutProduct";
import Subtotal from "./Subtotal.1.js";

function Checkout() {
    return (
        <div className="checkout">
        <div className="checkout__left">
            <img src="" alt="" className="checkout__ad" />
            <div>
                <h2 className="checkout__title">
                    Your Shopping Basket
                </h2>
                <CheckoutProduct />
            </div>
        </div>

        <div className="checkout__right">
            <Subtotal />
        </div>
        </div>
    )
}

export default Checkout