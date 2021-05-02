import React, {useState} from 'react';
import BasketItem from "./BasketItem"
import {moneyFormat} from "../Helpers"

function Basket({basket, products, total, resetBasket}) {
    return (
        <>
            <div className="basket-container container">

                <h3> DETAY </h3>
                <ul>
                    {basket.map(item => (
                        <BasketItem key={item.id} product = {products.find(p => p.id === item.id)} item={item}></BasketItem>
                    ))}
                </ul>

                <div className="total">
                    Toplam: ${moneyFormat(total)}
                </div>

                <button className="basket-reset-btn" onClick={resetBasket}> Sıfırla </button>
            </div>

            <style jsx>
                {`
                    .basket-container{
                    padding: 20px;
                    background: #fff;
                    border: 1px solid #ddd
                    }
                    
                    .basket-container{
                        font-size: 20px;
                        margin-bottom: 15px;
                    }
                    
                     .basket-container .total{
                        border-top: 1px solid #ddd;
                        padding-top: 10px;
                        margin-top: 10px;
                        font-size: 18px;
                        font-weight: bold;
                        text-align: right;
                        color: #149b14;
                        
                     }
                     
                     .basket-reset-btn{
                        background: green;
                        color: white;
                        height: 40px;
                        font-size: 17px;
                        padding: 0 20px;
                        font-size: 16px;
                        font-weight: 500;
                        cursor: pointer;
                     }
                `}
            </style>

        </>
    );
}

export default Basket;
