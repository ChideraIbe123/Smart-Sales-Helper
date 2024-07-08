import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/slices/cartSlice";
import "./ProductsCards.css";

const ProductsCard = (props) => {
  const { rating, title, id } = props;
  const [isAccepted, setIsAccepted] = useState(false);
  const [isRejected, setIsRejected] = useState(false);

  const dispatch = useDispatch();
  const { acceptedItems, rejectedItems } = useSelector((state) => state.cart);

  useEffect(() => {
    const accepted = acceptedItems.find((item) => item.id === id);
    const rejected = rejectedItems.find((item) => item.id === id);
    setIsAccepted(!!accepted);
    setIsRejected(!!rejected);
  }, [acceptedItems, rejectedItems, id]);

  const handleAddToCart = (status) => {
    const item = { ...props, status };
    if (status === "accepted" && !isAccepted) {
      dispatch(addItem(item));
      setIsAccepted(true);
      setIsRejected(false);
    } else if (status === "rejected" && !isRejected) {
      dispatch(addItem(item));
      setIsRejected(true);
      setIsAccepted(false);
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(removeItem(id));
    setIsAccepted(false);
    setIsRejected(false);
  };

  return (
    <div className="product_card">
      <figure>
        <img src={props.images ? props.images[0] : ""} alt="item-img" />
      </figure>
      <strong className="rating">{rating}</strong>
      <h4 className="title">{title}</h4>
      <h4 className="title">{props.category}</h4>
      <h3 className="price">
        $ {props.price ? props.price.toLocaleString() : 0}
      </h3>
      <div className="button-group">
        <button
          type="button"
          className={`btn ${isAccepted ? "accepted" : ""}`}
          onClick={() => handleAddToCart("accepted")}
        >
          {isAccepted ? "Accepted" : "Accept"}
        </button>
        <button
          type="button"
          className={`btn ${isRejected ? "rejected" : ""}`}
          onClick={() => handleAddToCart("rejected")}
        >
          {isRejected ? "Rejected" : "Reject"}
        </button>
        {(isAccepted || isRejected) && (
          <button
            type="button"
            className="btn remove"
            onClick={handleRemoveFromCart}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductsCard;
