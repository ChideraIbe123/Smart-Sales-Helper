import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../store/slices/cartSlice';
const Header = () => {

    const { cartItems } = useSelector((state) => state.cart);

    const dispatch = useDispatch();


    const handleOpenCart = (open) => {
        dispatch(toggleCart(open));
    };

    const cartQuantity = cartItems.length;


    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="navbar">
                       <div>
                        <div>
                        <a  activeClassName="active" href='/'><h4>Redux Shopping Cart</h4></a>
                        
 </div></div>
 <div><a  activeClassName="active" href='/Search'>Click To Search Catalog By ID</a></div>
                        <div className="nav_menu">
                            <div
                                title="Cart"
                                className="cart_icon"
                                onClick={() => handleOpenCart(true)}
                            >
                                <img src="/images/bag-icon.png" alt="bag-iconnew" />
                                <span className="badge">{cartQuantity}</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;