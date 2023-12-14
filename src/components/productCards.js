"use client"
import React, { useState, useEffect } from 'react';

function ProductCards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        if (data && data.products) {
          setProducts(data.products);
        } else {
          console.error("Invalid data format: products not found");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product Cards</h1>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '8px', width: '200px' }}>
              <img src={product.thumbnail} alt={product.title} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              {/* Display other product details as needed */}
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}

export default ProductCards;
