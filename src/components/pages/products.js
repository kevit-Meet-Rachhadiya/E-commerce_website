import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import "./products.css";
import logo from "./online.jpg";
import logo1 from "./jwallery.png";
import logo2 from "./wireless-earphone-product-ads-banner_252779-450.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Products({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    });
  }, []);

  const slides = [
    {
      id: 1,
      src: logo,
    },
    {
      id: 2,
      src: logo1,
    },
    {
      id: 3,
      src: logo2,
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="container">
      <Slider slides={slides} />

      <h1 className="heading">𝐎𝐔𝐑 𝐏𝐑𝐎𝐃𝐔𝐂𝐓𝐒</h1>
      <div className="search">
        <input
          className="searchTerm"
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="searchButton" type="button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="product-container">
          {filteredProducts.map((product) => (
            <div className="product" key={product.id}>
              <h3 className="head">{product.title}</h3>
              <img src={product.image} alt={product.title} />
              <p className="description">{product.description}</p>
              <p className="price">$ {product.price}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                <FontAwesomeIcon icon={faCartPlus} />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}

      <footer class="footer">
        <div class="footer-row">
          <div class="footer-column">
            <h4 class="footer-heading">About Us</h4>
            <p class="footer-paragraph">
              We are an e-commerce demo website, showcasing the latest trends in
              fashion and lifestyle products. Our mission is to provide our
              customers with the best shopping experience, from the comfort of
              their own homes.
            </p>
          </div>
          <div class="footer-column">
            <h4 class="footer-heading">Quick Links</h4>
            <ul class="footer-list">
              <li class="footer-list-item">Subscription</li>
              <li class="footer-list-item">Contact us</li>
              <li class="footer-list-item">Bug report</li>
            </ul>
          </div>
          <div class="footer-column">
            <h4 class="footer-heading">Connect with Us</h4>
            <ul class="footer-social-icons">
              <li>
                <FontAwesomeIcon icon={faFacebook} />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li>
                <FontAwesomeIcon icon={faInstagram} />
              </li>
              <li>
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
            </ul>
          </div>
        </div>
        <p class="footer-copyright">© 2023 All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Products;
