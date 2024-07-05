import React from "react";

const Productos = ({product, addToCart}) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4 d-flex" key={product.id}>
      <div className="card flex-fill">
        <img src={product.img} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <p className="card-title">{product.title}</p>
          <p className="card-text">{product.store}</p>
          <p className="card-text">S/ {product.price}</p>
          <button className="btn btn-primary" onClick={addToCart}>Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default Productos;
