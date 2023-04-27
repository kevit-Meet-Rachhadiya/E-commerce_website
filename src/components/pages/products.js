import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import "./products.css";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import logo from "./online.jpg";
import logo1 from "./jwallery.png";
import logo2 from "./wireless-earphone-product-ads-banner_252779-450.jpg";
import { FakeStoreApi } from "../service/fake-store-api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartPlus,
  faTimes,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slice/slice";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();
  const dispatch = useDispatch();
  const [selectCategory, setSelectCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setIsLoading(true);

    let url = "https://fakestoreapi.com/products";
    if (category) {
      url += `/category/${category}`;
    }

    FakeStoreApi.fetchAllProducts(url)
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [category]);

  function handleCategoryClick(category) {
    setSelectCategory(category);
  }

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (selectCategory === "All") {
        return (
          product.title.toLowerCase().includes(search) ||
          product.category.toLowerCase().includes(search)
        );
      } else {
        return (
          product.category.toLowerCase() === selectCategory.toLowerCase() &&
          product.title.toLowerCase().includes(search)
        );
      }
    });
  }, [search, selectCategory, products]);

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

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container">
      <Slider slides={slides} />

      <h1 className="heading">𝐎𝐔𝐑 𝐏𝐑𝐎𝐃𝐔𝐂𝐓𝐒</h1>
      <div className="srch-drpbtn">
        <div class="dropdown">
          <button class="dropbtn">
            CATEGORIES &nbsp; &nbsp; <span class="arrow">▼</span>
          </button>
          <div class="dropdown-content">
            <ul>
              <li onClick={() => handleCategoryClick("All")}>All Category</li>

              <li onClick={() => handleCategoryClick("men's clothing")}>
                Men's clothing
              </li>
              <li onClick={() => handleCategoryClick("women's clothing")}>
                Women's clothing
              </li>
              <li onClick={() => handleCategoryClick("jewelery")}>Jewelry</li>
              <li onClick={() => handleCategoryClick("electronics")}>
                Electronics
              </li>
            </ul>
          </div>
        </div>

        <div className="search">
          <input
            className="searchTerm"
            type="text"
            placeholder="Search products..."
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          <button className="searchButton" type="button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      {isLoading ? (
        <div className="load">
          <FontAwesomeIcon icon={faSpinner} spin />
        </div>
      ) : (
        <div className="product-container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
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
                  &nbsp; Add to Cart
                </button>
              </div>
            ))
          ) : (
            <div className="not-found">
              Product not found.{" "}
              <FontAwesomeIcon icon={faTimes} beat size="xl" />
            </div>
          )}
        </div>
      )}

      {/* // ............................................................ ......................*/}

      <footer>
        <div class="row">
          <div class="column">
            <h4>About Us</h4>

            <p>
              We are an e-commerce demo website, showcasing the latest trends in
              fashion and lifestyle products. Our mission is to provide our
              customers with the best shopping experience, from the comfort of
              their own homes.
            </p>
          </div>

          <div class="column">
            <h4>Quick Links</h4>

            <ul>
              <li>
                <Link>Subscription</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
              <li>
                <Link>Bug report</Link>
              </li>
            </ul>
          </div>

          <div class="column">
            <h4>Connect with Us</h4>

            <ul className="social-icons">
              <li>
                <Link>
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
              </li>

              <li>
                <Link>
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </li>

              <li>
                <Link>
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </li>

              <li>
                <Link>
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p class="copyright">© 2023 All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Products;
