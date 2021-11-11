import React, { useState, useEffect } from "react";

const ProductPage = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fakestore();
  }, []);

  const fakestore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
    setItem(jsonData);
  };

  const update = (id, quantity) => {
    let stocks = JSON.parse(localStorage.stocks);
    stocks[id - 1].stocks = +quantity;
    localStorage.stocks = JSON.stringify(stocks);
  };

  return (
    <div className="p-4">
      <div className="row pb-2">
        <div className="col-8 bg-white border-white">
          <h1 className="text-dark bg-white border-white">Product</h1>
        </div>
        <div className="col-2 text-center bg-white border-white">
          <h1 className="text-dark bg-white border-white">Stock</h1>
        </div>
        <div className="col-2 text-center bg-white border-white">
          <h1 className="text-dark bg-white border-white">Action</h1>
        </div>
      </div>
      {item.map((values) => {
        return (
          <div className="row mb-2 p-2">
            <div className="col-8 bg-white border-white">
              <div className="row h-100">
                <div className="col-2 bg-white border-white text-center h-100">
                  <img src={values.image} alt={values.title} width="80px" />
                </div>
                <div className="col-10 bg-white border-white">
                  <h3>{values.title}</h3>
                  <p>{values.description}</p>
                  <p>{values.category}</p>
                </div>
              </div>
            </div>
            <div className="col-2 mt-5 bg-white border-white">
              <input
                id={values.id}
                type="number"
                className="form-control"
                defaultValue={
                  JSON.parse(localStorage.stocks)[values.id - 1].stocks
                }
              />
            </div>
            <div className="col-2 mt-5 text-center bg-white border-white">
              <button
                onClick={() =>
                  update(values.id, document.getElementById(values.id).value)
                }
                className="btn btn-primary btn-lg"
              >
                Update
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductPage;
