import React, {useState} from 'react';
import {moneyFormat} from "../Helpers"
import {useEffect} from 'react';

function Header({money, total}) {

    return (
        <>
            {total > 0 && money - total !== 0 && (

                    <div className="header"> Harcayacak $ <span>{moneyFormat(money - total)} </span> kaldı
                </div>
            )}
            {total === 0 && (
                <div className="header">
                    Harcayacak <span> $ {moneyFormat(money - total)} </span>'ın var
                </div>
            )}
            {money - total === 0 && (
                <div className="header">Paranız Bitti :(</div>
            )}

            <style jsx>{`
            .header{
                background: green;
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 24px;
                letter-spacing: 1px;
                position: sticky;
                top: 0;
                z-index: 1;
                opacity: 0.97;
            }
             .header span{
                margin: 0 10px;
                font-weight: bold;
                cursor: pointer;
             }
            `}</style>

        </>
    );
}

export default Header;



