import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'


const Bottles = () => {

const [bottles,setBottles] = useState([])

const [cart, setCart] = useState([])


const handleAddToCart = bottle => {
 const newCart = [...cart,bottle]
 setCart(newCart)
}

useEffect(()=>{
    fetch('bottles.json')
    .then(res => res.json())
    .then(data =>setBottles(data))
},[])

    return (
        <div>
            <p>Bottles available: {bottles.length}</p>
            <h3>Cart: {cart.length}</h3>

<div className="bottle-container">
{
    bottles.map(bottle => <Bottle handleAddToCart={handleAddToCart} bottle={bottle} key={bottle.id}></Bottle>)
}

</div>
        </div>
    );
};

export default Bottles;