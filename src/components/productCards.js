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
<div  className='bg-[#002e25] w-[100%] flex'>

<slider className="text-white w-[20%] pt-6 px-6 bg-[#d1d5db]">
  <div className='fixed w-[15%]'>
  <div className="flex flex-col gap-2">
  <button className="px-3 py-2 rounded-md bg-[#673ee6] text-white">All</button>
  <button className="px-3 py-2 rounded-md bg-[#673ee6] text-white">Laptop</button>
  <button className="px-3 py-2 rounded-md bg-[#673ee6] text-white">Smartphones</button>
  <button className="px-3 py-2 rounded-md bg-[#673ee6] text-white">Fragrance</button>
  <button className="px-3 py-2 rounded-md bg-[#673ee6] text-white">Skincare</button>
  <button className="px-3 py-2 rounded-md bg-[#673ee6] text-white">Groceries</button>
  <button className="px-3 py-2 rounded-md bg-[#673ee6] text-white">Home decoration</button>
</div>
</div>
</slider>

<div className='w-[80%] grid gap-4 px-6 grid-cols-3'>
  {products.length > 0 ? (
    products.map((product, index) => (
      
      <div className='w-[100%] shadow-2xl mt-6 hover:scale-105' key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px'  , boxSizing: 'border-box' }}>
        <img className='object-fit' src={product.thumbnail} alt={product.title} style={{ width: '100%', height: '250px', marginBottom: '8px' }} />
        <div className='flex flex-col gap-2'>
          <button className='bg-[#008060] hover:bg-[#21b18d] text-white px-2 py-1 rounded-md '>{product.title}</button>
          <button className='bg-[#008060] hover:bg-[#21b18d] text-white rounded-md'>Price: ${product.price}</button>
          <button className='text-justify px-2 py-1 rounded-md text-white'>{product.description}</button>
          <button className='bg-[#008060] hover:bg-[#21b18d] text-white rounded-md'>{product.category}</button>
          <button className='bg-black hover:bg-[#121213] text-white px-2 py-2'>Add  to Cart</button>
        </div>
        {/* Display other product details as needed */}
      </div>
    ))
  ) : (
    <button>No products available</button>
  )}
</div>

    </div>
  );
}

export default ProductCards;
