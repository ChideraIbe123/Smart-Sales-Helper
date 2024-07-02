import React from "react";
import ProductsCard from "./ProductsCard";
import "./History.css";

const History = () => {
  const oldPurchases = [
    {
      id: 1,
      title: "Product 1",
      price: 100,
      date: "2023-01-01",
      rating: 4.5,
      images: ["/path/to/image1.jpg"],
    },
    {
      id: 2,
      title: "Product 2",
      price: 200,
      date: "2023-02-01",
      rating: 4.0,
      images: ["/path/to/image2.jpg"],
    },
  ];

  return (
    <section id="history">
      <div className="history-container">
        <h2>Purchase History</h2>
        <div className="home_content">
          {oldPurchases.map((purchase) => (
            <ProductsCard key={purchase.id} {...purchase} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;
