
import './App.css';
import Header from './components/Header';
    import {useState, useEffect} from 'react';
import products from './Products.json'
import Product from "./components/Product"
import Basket from "./components/Basket"

function App() {

    const [money, setMoney] = useState(1000000);
    const [basket, setBasket] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
          setTotal(basket.reduce((acc, item) => {
              return acc +(item.amount* (products.find(product => product.id === item.id).price))
          }, 0))

    }, [basket]);

    const resetBasket = () =>{
        setBasket([])
    }


    return (
    <>
      <Header money = {money} total ={total}></Header>
        <div className="container products">
            {products.map(product => (
            <Product key= {product.id} total = { total} money = {money} basket ={basket} setBasket={setBasket} product={product}></Product>
        ))}
        </div>

        {total > 0 && (
            <Basket resetBasket ={resetBasket} products = {products} basket={basket} total={total}> </Basket>
        )}
    </>
  );
}

export default App;
