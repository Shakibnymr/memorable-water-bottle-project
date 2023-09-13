
import './Bottle.css'
const Bottle = ({bottle}) => {
    const {name, img, price} = bottle
    return (
        <div className="bottle">
            <h4>bottle: {name}</h4>
            <img className='bottle-img' src={img} alt="" />
            <p>price: {price}</p>
        </div>
    );
};

export default Bottle;