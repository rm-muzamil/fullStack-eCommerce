// ProductModal.jsx
import React from "react";

const ProductModal = ({ product, onClose }) => {
  if (!product) return <h2>errror</h2>;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProductModal;
