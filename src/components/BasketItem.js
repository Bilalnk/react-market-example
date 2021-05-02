import React, {useState} from 'react';
import {moneyFormat} from "../Helpers"

function BasketItem({item, product}) {
    return (
        <div>
            <li className="basket-item">
                {product.title} <span> X {moneyFormat(item.amount)}</span>{/*<img src={product.image}/>*/}
            </li>

            <style jsx>{`
                .basket-item{
                    padding-bottom: 10px;
                    font-size: 17px;
                   
                }
                
                 .basket-item span{
                    color: #999;
                    font-size: 14px;
                 }
                 
                 .basket-item img{
                       height: 50px;
                       display: flex;
                       justify-content: flex-end
                 }
            `}
            </style>
        </div>
    );
}

export default BasketItem;


