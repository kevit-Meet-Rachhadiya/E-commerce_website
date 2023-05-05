import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FakeStoreApi } from "../service/fake-store-api";
import { faCartPlus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import "./oneproduct.css";
import {
  faStar,
  faStarHalfStroke,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

function OneProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = (product) => {
    dispatch(product);
  };

  useEffect(() => {
    setTimeout(() => {
      FakeStoreApi.fetchProductById(id)
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <div className="load-spiner">
        <FontAwesomeIcon icon={faSpinner} spin />
      </div>
    );
  }

  return (
    <div className="one-container">
      <div className="back">
        <Button component={Link} to="/eshop" variant="contained">
          Back
        </Button>
      </div>

      <div className="one-product">
        <img src={product.image} alt={product.title} />
        <div className="one-product-details">
          <h1 className="one-heading">{product.title}</h1>
          <p className="one-description">{product.description}</p>
          <p className="one-price">Price: &nbsp;$ {product.price}</p>
          <p className="one-description">
            <FontAwesomeIcon icon={faAngleRight} /> {product.category}
          </p>
          <div className="star">
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span>
              <FontAwesomeIcon icon={faStarHalfStroke} />
            </span>
          </div>
          <div className="product-bottom">
            <button
              className="one-add-to-cart-btn"
              onClick={() => handleAddToCart(product)}
            >
              <FontAwesomeIcon icon={faCartPlus} />
              &nbsp; Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneProduct;
