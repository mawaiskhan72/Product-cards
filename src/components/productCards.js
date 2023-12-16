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
<div  className='bg-[#002e25]'>



<div className='grid gap-4 px-6 grid-cols-4'>
  {products.length > 0 ? (
    products.map((product, index) => (
      
      <div className='w-[100%] shadow-2xl mt-6 hover:scale-105' key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px'  , boxSizing: 'border-box' }}>
        <img className='object-fit' src={product.thumbnail} alt={product.title} style={{ width: '100%', height: '250px', marginBottom: '8px' }} />
        <div className='flex flex-col gap-2'>
          <button className='bg-[#008060] hover:bg-[#21b18d] text-white px-2 py-1 rounded-md '>{product.title}</button>
          <button className='bg-[#008060] hover:bg-[#21b18d] text-white rounded-md'>Price: ${product.price}</button>
          <p className='text-justify px-2 py-1 rounded-md text-white'>{product.description}</p>
          <button className='bg-[#008060] hover:bg-[#21b18d] text-white rounded-md'>{product.category}</button>
          <button className='bg-black hover:bg-[#121213] text-white px-2 py-2'>Add  to Cart</button>
        </div>
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
