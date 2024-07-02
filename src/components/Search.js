import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsCard from "../components/ProductsCard";
import { useEffect } from "react";
import { fetchAllProducts } from "../store/slices/productSlice";

const Search = () => {
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchAllProducts("https://dummyjson.com/products/category/smartphones")
    );
  }, [dispatch]);
  const [val, setVal] = useState("");
  const click = () => {
    dispatch(
      fetchAllProducts("https://dummyjson.com/products/search?q=" + val)
    );
  };
  const change = (event) => {
    setVal(event.target.value);
  };
  return (
    <>
      <section id="home">
        <div className="container">
          <div>
            <h4>
              <label>Enter a Category: </label>
              <input
                className="txt-primary"
                type="text"
                onChange={change}
                value={val}
                aria-label="Enter a Category"
              />
              <button type="button" onClick={click} className="btn btn-primary">
                Search
              </button>
            </h4>
          </div>
          <div className="home_content">
            {products.data &&
              products.data.products &&
              products.data.products.map((item) => (
                <ProductsCard key={item.id} {...item} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
