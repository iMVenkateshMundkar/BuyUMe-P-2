import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "./ProductsBox.css"

const ProductsBox = ({ qty1, setQty1, qty2, setQty2, qty3, setQty3 }) => {
    const handleQtyChange = (index, value) => {
        switch (index) {
            case 1:
                if (value === -1) {
                    if (qty1 > 0) {
                        setQty1(prv => {
                            prv--;
                            return prv
                        });
                    }
                }
                else if (value === 1) {
                    setQty1(prv => {
                        prv++;
                        return prv
                    });
                }
                break;
            case 2:
                if (value === -1) {
                    if (qty2 > 0) {
                        setQty2(prv => {
                            prv--;
                            return prv
                        });
                    }
                }
                else if (value === 1) {
                    setQty2(prv => {
                        prv++;
                        return prv
                    });
                }
                break;
            case 3:
                if (value === -1) {
                    if (qty3 > 0) {
                        setQty3(prv => {
                            prv--;
                            return prv
                        });
                    }
                }
                else if (value === 1) {
                    setQty3(prv => {
                        prv++;
                        return prv
                    });
                }
                break;

            default:
                break;
        }
    }

    return (
        <div className='productsBox'>
            <h3>Products</h3>
            <div className='allProducts'>
                <div className='productCard'>
                    <p>Product-1</p>
                    <p>100</p>
                    <div className='qtyChange'>
                        <p onClick={() => handleQtyChange(1, -1)}>-</p>
                        <p>{qty1}</p>
                        <p onClick={() => handleQtyChange(1, 1)}>+</p>
                    </div>
                </div>
                <div className='productCard'>
                    <p>Product-2</p>
                    <p>200</p>
                    <div className='qtyChange'>
                        <p onClick={() => handleQtyChange(2, -1)}>-</p>
                        <p>{qty2}</p>
                        <p onClick={() => handleQtyChange(2, 1)}>+</p>
                    </div>
                </div>
                <div className='productCard'>
                    <p>Product-3</p>
                    <p>300</p>
                    <div className='qtyChange'>
                        <p onClick={() => handleQtyChange(3, -1)}>-</p>
                        <p>{qty3}</p>
                        <p onClick={() => handleQtyChange(3, 1)}>+</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsBox