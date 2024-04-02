import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import ProductsCard from './ProductsCard';
import { useEffect } from "react";
import {fetchAllProducts} from '../store/slices/productSlice'
const Home = () => {
    const { products } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchAllProducts("https://dummyjson.com/products"));
    }, [dispatch]);
    return (
        <>
            <section id="home">
                <div className="container">
                    <div className="home_content">
                        {
                          products.data && products.data.products &&  products.data.products.map((item) => (
                                <ProductsCard key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;