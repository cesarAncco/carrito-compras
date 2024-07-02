/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Asus from "../../assets/img/Laptop_ASUS01.webp"
import Lenovo from "../../assets/img/Laptop_LENOVO01.png"

const products = [
  {
    id: 1,
    img: Asus,
    title:
      "Laptop Asus Vivobook Go 15 R3 7320U 512GB SSD 8 GB RAM 15.6 Green Grey",
    store: "Oechsle",
    price: 1799
  },
  {
    id: 2,
    img: Lenovo,
    title:
      "Laptop Gamer Lenovo IdeaPad Gaming3 15IAH7 i5-12450H 8GB RAM 512GB SSD RTX3060",
    store: "Oechsle",
    price: 3529,
  },

  {
    id: 3,
    img: "../../assets/img/Laptop_ACER01.webp",
    title: "Laptop Acer A315-24PT Ryzen 5-7520U 16GB RAM 512GB SSD 15,6",
    store: "Oechsle",
    price: 2499,
  },

  {
    id: 4,
    img: "/src/assets/img/img/Laptop_HP01.webp",
    title: "Laptop HP 15-fc0002la AMD Ryzen 5 16GB RAM 512GB SSD 15.6",
    store: "Oechsle",
    price: 2499,
  },

  {
    id: 5,
    img: "/src/assets/img/img/Laptop_APPLE01.webp",
    title: "Apple Macbook Air MLXW3E/A Chip M2 8GB RAM 256GB 13.6",
    store: "Oechsle",
    price: 6099,
  },

  {
    id: 6,
    img: "/src/assets/img/img/Laptop_LG01.webp",
    title:
      "Laptop LG Gram 17Z90Q-G.AH76 Intel Evo Core i7 12 Núcleos 16GB RAM 512GB SSD 17",
    store: "Oechsle",
    price: 6799,
  },

  {
    id: 7,
    img: "/src/assets/img/img/Laptop_DELL.webp",
    title: "Laptop Dell Inspiron I3520 Intel Core i5 8GB RAM 512GB SSD 15.6",
    store: "Oechsle",
    price: 1899,
  },
];

// let products_car = [];

const createProductCard = (product) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4 d-flex" key={product.id}>
      <div className="card flex-fill">
        <img src={product.img} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <p className="card-title">{product.title}</p>
          <p className="card-text">{product.store}</p>
          <p className="card-text">S/ {product.price}</p>
          <a href={`/detail.html?id=${product.id}`} className="btn btn-primary" target="blank">
            Ver Detalle
          </a>
          <a className="btn btn-secondary">
            {/* onClick={() => addCar(product.id, product.img, product.title, product.price)} */}
            Enviar Carrito
          </a>
        </div>
      </div>
    </div>
  );
};

const generateHtmlContent = () => {
  return products.map((product) => createProductCard(product));
};

const Productos = () => {
  const productCards = generateHtmlContent();

  return (
    <div>
      <div className="container my-4">
        <h1 className="text-center mb-4">Catálogo de Productos de Laptops</h1>
        <p className="text-justify mb-4">
          Esta página es creada para poder presentar el catálogo de productos de
          <span className="text-danger">Laptops de diferentes marcas</span>
          para que los usuarios puedan ver diferentes opciones los cuales la
          tienda ofrece al público.
        </p>
      </div>

      <div className="m-4">
        <div className="row">
          <div className="col-12 col-md-8 mb-4">
            <div id="product-container" className="row">
              {productCards}
            </div>
          </div>
          <div className="col-12 col-md-2 mb-4">
            <div id="product-carrito">
              <p>Carrito de Compras</p>
            </div>
          </div>
          <div className="col-12 col-md-2 mb-4">
            <div id="price">
              <p>Total</p>
              <p>Cantidad: 0</p>
              <p>Monto : S/ 0</p>
              <a className="btn btn-primary">Pagar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
