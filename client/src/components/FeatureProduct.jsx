import React, { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';

const ProductPage = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/products"); 
        console.log("response: ", response);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center mt-10"><CircularProgress /></div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-2 text-center">Feature Product</h1>
      <p className="text-1xl  mb-5 text-center">Street Art Salvia irony wolf actully lamo meh fp jeans shorts</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Product Image */}
            <img
              src={product.image_url || "https://via.placeholder.com/150"}
              alt={product.title}
              className="w-full h-40 object-cover mb-4 rounded"
            />

            {/* Product Title */}
            <h3 className="text-lg font-bold mb-2">{product.title}</h3>

            {/* Product Description */}
            <p className="text-gray-600 text-sm mb-2">
              {product.description || "No description available"}
            </p>

            {/* Price and Discount */}
            <div className="flex items-center space-x-2">
              {product.price && (
                <span className="text-green-600 font-bold">
                  ${parseFloat(product.price).toFixed(2)}
                </span>
              )}
              {product.discount_price && (
                <span className="text-red-500 line-through">
                  ${parseFloat(product.discount_price).toFixed(2)}
                </span>
              )}
            </div>

            {/* Badge */}
            {product.badge && (
              <span className="mt-2 inline-block bg-green-500 text-white text-xs px-2 py-1 rounded">
                {product.badge}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
