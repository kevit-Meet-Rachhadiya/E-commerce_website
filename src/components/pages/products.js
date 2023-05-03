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
  faCaretDown,
  faPerson,
  faGem,
  faPersonDress,
  faShare,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";

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
            CATEGORIES &nbsp; &nbsp;{" "}
            <span class="arrow">
              <FontAwesomeIcon icon={faCaretDown} />
            </span>
          </button>
          <div class="dropdown-content">
            <ul>
              <li onClick={() => handleCategoryClick("All")}>
                <FontAwesomeIcon className="category-icon" icon={faShare} />
                &nbsp; &nbsp; All Category
              </li>
              <li onClick={() => handleCategoryClick("men's clothing")}>
                <FontAwesomeIcon className="category-icon" icon={faPerson} />
                &nbsp; &nbsp; Men's clothing
              </li>
              <li onClick={() => handleCategoryClick("women's clothing")}>
                <FontAwesomeIcon
                  className="category-icon"
                  icon={faPersonDress}
                />
                &nbsp; &nbsp; Women's clothing
              </li>
              <li onClick={() => handleCategoryClick("jewelery")}>
                <FontAwesomeIcon className="category-icon" icon={faGem} />
                &nbsp; &nbsp; Jwellery
              </li>
              <li onClick={() => handleCategoryClick("electronics")}>
                <FontAwesomeIcon className="category-icon" icon={faDesktop} />
                &nbsp; &nbsp; Electronics
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
                <Link to={`/products/${product.id}`}>
                  <img src={product.image} alt={product.title} />
                </Link>
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
    </div>
  );
}

export default Products;
