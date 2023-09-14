import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLocalStorage, getStoredCart } from "../../Utillities/localStorage";


const Bottles = () => {

const [bottles,setBottles] = useState([])

const [cart, setCart] = useState([])


const handleAddToCart = bottle => {
 const newCart = [...cart,bottle]
 setCart(newCart)
 addToLocalStorage(bottle.id)
}

useEffect(()=>{
    fetch('bottles.json')
    .then(res => res.json())
    .then(data =>setBottles(data))
},[])

//load cart from local storage
useEffect(() => {
    console.log('called the useEffect',bottles.length)
 if(bottles.length > 0) {
    const storedCart =getStoredCart()
 console.log(storedCart)
 }
}, [bottles])

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