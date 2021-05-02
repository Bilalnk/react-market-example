import React, {useState} from 'react';
import {moneyFormat} from "../Helpers"

function Product({product, basket, setBasket, total, money}) {


    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)

        if (checkBasket) {
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -= 1

        if (currentBasket.amount === 0) {
            setBasket([...basketWithoutCurrent])
        } else {
            setBasket([...basketWithoutCurrent, currentBasket])
        }
    }

    return (
        <>
            <div className="product">
                <img src={product.image} alt="sdsd"/>
                <h6> {product.title}</h6>
                <div className="price"> $ {moneyFormat(product.price)}</div>
                <div className="actions">
                    <button className="sell-btn" disabled={!basketItem} onClick={removeBasket}> -</button>
                    <span className="amount">{basketItem && basketItem.amount || 0}</span>
                    <button className="buy-btn" disabled={total + product.price > money} onClick={addBasket}> +</button>
                </div>
                <style jsx>{`
                    .product{
                    padding: 10px;
                    background: #fff;
                    border: 1px solid #ddd;
                    margin-bottom: 20px;
                    width: 24%;
                    }
                    
                    .product img {
                    width: 100%
                    width: 208.4px;
                    height: 208.4px;
                    }
                    
                    .product h6 {
                        font-size: 20px;
                        margin-bottom: 10px
                    }
                    .product .actions {
                        display: flex;
                        align-items: center;
                        margin-top: 15px;
                    }
                    
                    .product .price{
                    font-size: 20px;
                    color: green;
                    text-align: center;
                    }
                    
                    .actions button{
                        height: 40px;
                        padding: 0 15px;
                        flex:1;
                        font-size: 30px;
                        cursor: pointer;
                    }
                    
                     .actions button[disabled]{
                        opacity: 0.5;
                        cursor: not-allowed
                     }
                    
                    .actions .buy-btn{
                        background: #149b14;
                     
                        color: white;
                        border-radius: 0 4px 4px 0;
                    }
                    
                     .actions .sell-btn{
                        background: #ef1e1ec7;
                        
                        color: white;
                        border-radius: 4px 0 0 4px;
                    }
                    
                    .actions .amount{
                       width: 40px;
                       text-align: center;
                       border: 1px solid green;
                       height: 40px;
                       margin: 0 8px 0 8px;
                       border-radius: 50%;
                       display: flex;
                       justify-content: center;
                       align-items: center;
                       font-size: 17px;
                       font-weight: bold;
                       color: #555
                    }
                `}


                </style>

            </div>
        </>
    );
}

export default Product;



