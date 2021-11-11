import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    let stocks = [];
    if (localStorage.stock === undefined) {
      for (let i = 0; i < 20; i++) {
        stocks[i] = {
          id: response.data[i].id,
          stocks: 20,
        };
      }
      localStorage.stock = "true";
      localStorage.stocks = JSON.stringify(stocks);
    }
<<<<<<< Updated upstream
    // console.log(JSON.parse(localStorage.stocks));

    // console.log(response.data[0]);
=======
>>>>>>> Stashed changes
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="row g-4">
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductListing;
