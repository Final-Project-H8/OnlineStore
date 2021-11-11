import "./component.css";
import React from "react";
import { useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const history = useHistory();
  var stocks = JSON.parse(localStorage.stocks);

  const renderList = products.map((product) => {
    const { id, title, image, price, category, description } = product;

    const addToCart = () => {
      if (localStorage.getItem("login") === "false") {
        history.push("/login");
      } else {
        // stocks[id - 1].stocks = stocks[id - 1].stocks - 1;
        // localStorage.stocks = JSON.stringify(stocks);

        if (localStorage.cart === undefined) {
          localStorage.cart = JSON.stringify([
            {
              id: id,
              product: product,
              qty: 1,
            },
          ]);
        } else {
          let currentCart = JSON.parse(localStorage.cart);
          let itemCheck = currentCart.findIndex((x) => x.id === id);
          if (itemCheck === -1) {
            currentCart.push({
              id: id,
              product: product,
              qty: 1,
            });

            localStorage.cart = JSON.stringify(currentCart);
          } else {
            currentCart[itemCheck].qty = currentCart[itemCheck].qty + 1;
            localStorage.cart = JSON.stringify(currentCart);
          }
        }

        // history.push("/cart");
      }
    };

    return (
      <div className="col-6">
        <div className="row h-100 border rounded">
          <div className="col-4 p-2 bg-secondary">
            <img
              className="rounded image-fluid"
              src={image}
              alt={title}
              width="250"
              height="300"
            />
            <p className="mt-2 text-white text-center">{category}</p>
          </div>
          <div className="col-8 bg-light">
            <h3>{title}</h3>
            <p>{description}</p>
            <br />
            <h3>$ {price}</h3>
            <h4>Stock : {stocks[id - 1].stocks}</h4>
            <div className="mt-5 btn-group">
              <Link to={`/product/${id}`}>
                <button className="btn btn-primary btn-lg rounded m-2">
                  Detail
                </button>
              </Link>
              <button
                className="btn btn-warning text-white btn-lg rounded m-2"
                onClick={addToCart}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
