import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import "./CartBox.css"

const CartBox = ({ qty1, qty2, qty3 }) => {
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalPrice(qty1 * 100 + qty2 * 200 + qty3 * 300);

    }, [qty1, qty2, qty3])


    return (
        <div className='cartBox'>
            <h3>Cart</h3>
            <div className='allProducts'>
                <div className='productCard'>
                    <p>Product-1</p>
                    <p>{qty1} × 100</p>
                </div>
                <div className='productCard'>
                    <p>Product-2</p>
                    <p>{qty2} × 200</p>
                </div>
                <div className='productCard'>
                    <p>Product-3</p>
                    <p>{qty3} × 300</p>
                </div>
                <div className='totalPrice productCard'>
                    <p>Total:</p>
                    <p>{totalPrice}</p>
                </div>
            </div>
        </div>
    )
}

export default CartBox