import "./component.css";
import React from "react";
import { useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const history = useHistory();
  var stocks = JSON.parse(localStorage.stocks);

  const renderList = products.map((product) => {
    // console.log(products);
    const { id, title, image, price, category, description } = product;

    // if (!localStorage.getItem("login")) {
    //   return <Redirect to="/login" />;
    // }

    const addToCart = () => {
      if (localStorage.getItem("login") === "false") {
        history.push("/login");
      } else {
        // history.push("/cart");
        // console.log(id);
        stocks[id - 1].stocks = stocks[id - 1].stocks - 1;
        localStorage.stocks = JSON.stringify(stocks);
        // console.log(JSON.parse(localStorage.stocks));
      }
    };

    return (
      <div className="col-lg-3 col-md-6">
        <div className="card h-100">
          <img className="card-product" src={image} alt={title} />
          <div className="card-body">
            <h5 className="card-title text-center">{title}</h5>
            <h4 className="card-title text-center">{category}</h4>
            <p className="card-text">{description}</p>
          </div>
          <div className="text-center">
            <p class="card-text mb-auto">
              {JSON.parse(localStorage.stocks)[id - 1].stocks}
            </p>
            <Link to={`/product/${id}`} className="btn btn-primary m-2">
              Detail
            </Link>
            <button className="btn btn-success" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
