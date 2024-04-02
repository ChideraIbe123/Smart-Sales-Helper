import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/slices/cartSlice';


const ProductsCard = (props) => {

    const {rating, title } = props;

    const [isAdded, setIsAdded] = useState(false);

const imagespath = props.images? props.images[0]:'';
    const dispatch = useDispatch();
    
    const handleAddToCart = () => {

        // here, we cannot directly pass the `props` as it is, if we need to access the same value within the child component. So, we've to pass it as a different prop like this- `{...props}`
        const item = { ...props };
        dispatch(addItem(item));

        setIsAdded(true);

        setTimeout(() => {
            setIsAdded(false);
        }, 3000);
    };


    return (
        <>
            <div className="product_card">
                <figure>
                    <img src={imagespath} alt="item-img" />
                </figure>
                <strong className="rating">{rating}</strong>
                <h4 className="title">{title}</h4>
                <h4 className="title">{props.category}</h4>
                <h3 className="price">$ { props.price?props.price.toLocaleString():0}</h3>
                <button
                    type="button"
                    className={`btn ${isAdded ? 'added' : ''}`}
                    onClick={handleAddToCart}
                >
                    {isAdded ? 'Added' : 'Add to cart'}
                </button>
            </div>
        </>
    );
};

export default ProductsCard;