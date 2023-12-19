  "use client"
  import React, { useState, useEffect } from 'react';

function ProductCards() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        if (data && data.products) {
          setProducts(data.products);
          setFilteredProducts(data.products); // Initialize filtered products with all products
        } else {
          console.error("Invalid data format: products not found");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  const sidebar = [
    {
      title: "Smartphone",
      category: "smartphone"
    },
    {
      title: "Laptop",
      category: "laptop"
    },
    {
      title: "Fragrances",
      category: "fragrances"
    },
    {
      title: "Skincare",
      category: "skincare"
    },
    {
      title: "Groceries",
      category: "groceries"
    },
    {
      title: "Home-decoration",
      category: "home-decoration" // Corrected category name
    },
  ];

  const handleCategoryClick = (category) => {
    const filtered = products.filter(product =>
      product.category.toLowerCase() === category.toLowerCase()
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className='bg-[#002e25] w-[100%] flex'>
      {/* Sidebar */}
      <div className="text-white w-[20%] pt-6 px-6 bg-[#d1d5db]">
        <div className='fixed w-[15%]'>
          <div className="flex flex-col gap-2">
            {sidebar.map((item, index) => (
              <button
                key={index}
                className="px-3 py-2 rounded-md bg-[#673ee6] hover:bg-[#6b54b1] text-white"
                onClick={() => handleCategoryClick(item.category)}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Display */}
      <div className='w-[80%] grid gap-4 px-6 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div className='w-[100%] shadow-2xl mt-6 hover:scale-105' key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', boxSizing: 'border-box' }}>
              <img className='object-fit' src={product.thumbnail} alt={product.title} style={{ width: '100%', height: '250px', marginBottom: '8px' }} />
              <div className='flex flex-col gap-2'>
                <button className='bg-[#008060] hover:bg-[#21b18d] text-white px-2 py-1 rounded-md '>{product.title}</button>
                <button className='bg-[#008060] hover:bg-[#21b18d] text-white rounded-md'>Price: ${product.price}</button>
                <button className='text-justify px-2 py-1 rounded-md text-white'>{product.description}</button>
                <button className='bg-[#008060] hover:bg-[#21b18d] text-white rounded-md'>{product.category}</button>
                <button className='bg-black hover:bg-[#121213] text-white px-2 py-2'>Add to Cart</button>
              </div>
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
