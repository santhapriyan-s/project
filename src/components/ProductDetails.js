import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (product) {
      document.title = `${product.name} - Product Details`; // Set the browser tab title
    } else {
      document.title = "Product Not Found"; // Fallback title if no product is found
    }

    // Cleanup: Reset the title when leaving the component
    return () => {
      document.title = "Your App Name"; // Replace with your app's default title
    };
  }, [product]);

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleBuyNow = () => {
    navigate("/checkout", { state: { product } }); // Navigate to Checkout with product data
  };

  return (
    <div className="product-details-container">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Price: Rs.{product.price}</p>
      <p>{product.description}</p>
      <button onClick={handleBuyNow} className="buy-now-btn bg-green-500 text-white px-4 py-2 rounded">
        Buy Now
      </button>
    </div>
  );
};

export default ProductDetails;
