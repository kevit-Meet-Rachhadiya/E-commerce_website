// function Products() {
//     const [products, setProducts] = useState([]);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [isLoading, setIsLoading] = useState(true);
//     // const [cartItems, setCartItems] = useState([]);
//     const { category } = useParams();
//     const dispatch = useDispatch();
//     const [selectCategory, setSelectCatagory] = useState("All");
//     const [search, setSearch] = useState([]);

//     useEffect(() => {
//       setIsLoading(true);

//       let url = "https://fakestoreapi.com/products";
//       if (category) {
//         url += `/category/${category}`;
//       }

//       FakeStoreApi.fetchAllProducts(url)
//         .then((data) => {
//           setProducts(data);
//           setIsLoading(false);
//         })
//         .catch((error) => console.log(error));
//     }, [category]);

//     function handleCategoryClick(category) {
//       setSelectCatagory(category);
//     }

//     const productFilterdata = useMemo(() => {
//       return products.filter((data) => {
//         if (selectCategory === "All") {
//           return (
//             data.category.toLowerCase().includes(search) ||
//             data.title.toLowerCase().includes(search)
//           );
//         } else {
//           return (
//             data.category.toLowerCase() === selectCategory.toLowerCase() &&
//             (search === "" || data.title.toLowerCase().includes(search))
//           );
//         }
//       });
//     }, [search, selectCategory, products]);

//     const slides = [
//       {
//         id: 1,
//         src: logo,
//       },
//       {
//         id: 2,
//         src: logo1,
//       },
//       {
//         id: 3,
//         src: logo2,
//       },
//     ];

//     const filteredProducts = products
//       .filter((product) =>
//         product.title.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//       .filter((product) => {
//         if (!category) {
//           return true;
//         }
//         return product.category.toLowerCase() === category.toLowerCase();
//       });

//     const handleAddToCart = (products) => {
//       dispatch(addToCart(products));
//     };

//     return (
//       <div className="container">
//         <Slider slides={slides} />

//         <h1 className="heading">𝐎𝐔𝐑 𝐏𝐑𝐎𝐃𝐔𝐂𝐓𝐒</h1>
//         <div className="srch-drpbtn">
//           <div class="dropdown">
//             <button class="dropbtn">
//               CATEGORIES &nbsp; &nbsp; <span class="arrow">▼</span>
//             </button>
//             <div class="dropdown-content">
//               <ul>
//                 <li onClick={() => handleCategoryClick("All")}>All Category</li>
//                 <li onClick={() => handleCategoryClick("Man's clothing")}>
//                   Man's clothing
//                 </li>
//                 <li onClick={() => handleCategoryClick("Woman's clothing")}>
//                   Woman's clothing
//                 </li>
//                 <li onClick={() => handleCategoryClick("Jewelry")}>Jewelry</li>
//                 <li onClick={() => handleCategoryClick("Electronics")}>
//                   Electronics
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="search">
//             <input
//               className="searchTerm"
//               type="text"
//               placeholder="Search products..."
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button className="searchButton" type="button">
//               <FontAwesomeIcon icon={faSearch} />
//             </button>
//           </div>
//         </div>
//         {isLoading ? (
//           <div className="load">
//             <FontAwesomeIcon icon={faSpinner} spin />
//           </div>
//         ) : (
//           <div className="product-container">
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map((product) => (
//                 <div className="product" key={product.id}>
//                   <h3 className="head">{product.title}</h3>
//                   <img src={product.image} alt={product.title} />
//                   <p className="description">{product.description}</p>
//                   <p className="price">$ {product.price}</p>
//                   <button
//                     className="add-to-cart-btn"
//                     onClick={() => handleAddToCart(product)}
//                   >
//                     <FontAwesomeIcon icon={faCartPlus} />
//                     &nbsp; Add to Cart
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <div className="not-found">
//                 Product not found.{" "}
//                 <FontAwesomeIcon icon={faTimes} beat size="xl" />
//               </div>
//             )}
//           </div>
//         )}
//  ......................................................................................................................................

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { FakeStoreApi } from "../service/fake-store-api";
// import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useDispatch } from "react-redux";
// import "./oneproduct.css";

// function OneProduct() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const dispatch = useDispatch();

//   const handleAddToCart = (product) => {
//     dispatch(product);
//   };

//   useEffect(() => {
//     FakeStoreApi.fetchProductById(id)
//       .then((data) => {
//         setProduct(data);
//       })
//       .catch((error) => console.log(error));
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="one-container">
//       <h1 className="one-heading">{product.title}</h1>

//       <div className="one-product">
//         <img src={product.image} alt={product.title} />
//         <p className="one-description">{product.description}</p>
//         <p className="one-price">$ {product.price}</p>
//         <button
//           className="one-add-to-cart-btn"
//           onClick={() => handleAddToCart(product)}
//         >
//           <FontAwesomeIcon icon={faCartPlus} />
//           &nbsp; Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }

// export default OneProduct;
