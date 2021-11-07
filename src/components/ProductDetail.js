import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const history = useHistory();
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });

    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId]);

  const addToCart = () => {
    if (localStorage.getItem("login") === "false") {
      history.push("/login");
    } else {
      history.push("/cart");
    }
  };

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
            <div className="p-5">
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col-auto d-none d-lg-block">
                  {/* <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg> */}
                  <img src={image} alt={title} className="bd-placeholder-img" width="300" />
                </div>
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary">Home / {category}</strong>
                  <h3 class="mb-2">{title}</h3>
                  <div class="mb-5 text-muted">${price}</div>
                  <h3>Detail</h3>
                  <p class="card-text mb-auto">{description}</p>
                  <button className="btn btn-success btn-lg" onClick={addToCart}>
                   Add to Cart
                  </button>
                </div>
              </div>
            </div>
      )}
    </div>
  );
};

export default ProductDetail;
