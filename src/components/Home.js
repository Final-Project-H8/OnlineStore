import React from "react";
import ProductListing from "./ProductListing";

const Home = () => {
  return (
    <div className="px-5">
      <div className="row row-eq-height">
        <ProductListing />
      </div>
    </div>
  );
};

export default Home;
