
import './Bottle.css'
const Bottle = ({bottle, handleAddToCart}) => {
    const {name, img, price} = bottle
    return (
        <div className="bottle">
            <h4>bottle: {name}</h4>
            <img className='bottle-img' src={img} alt="" />
            <p>price: {price}</p>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;