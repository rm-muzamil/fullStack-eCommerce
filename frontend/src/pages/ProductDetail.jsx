import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Initial quantity

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const handleBuyClick = () => {
    const cardNumber = prompt("Enter debit card number:");
    if (!cardNumber || cardNumber.length < 12) {
      alert("❌ Invalid card number.");
      return;
    }

    alert(`✅ Order placed!
📦 Product: ${product.title}
🛒 Quantity: ${quantity}
💳 Card: ****${cardNumber.slice(-4)}`);
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="containere">
      <h2>{product.title}</h2>
      <  img src={product.thumbnail} alt={product.title} width="100" />
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Rating:</strong> {product.rating}</p>

      {/* Quantity Controls */}
      <div style={{ margin: '15px 0' }}>
        <button onClick={decreaseQuantity}>-</button>
        <span style={{ margin: '0 10px' }}>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>

      <button onClick={handleBuyClick} className='buy'>Add To Cart</button>
    </div>
  );
}

export default ProductDetail;
