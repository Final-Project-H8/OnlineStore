import { Redirect } from "react-router";

const Cart = () => {
  if (!localStorage.getItem("login")) {
    return <Redirect to="/login" />;
  }

<<<<<<< Updated upstream
=======
  var totalPrice = 0;
>>>>>>> Stashed changes
  var currentCart;
  if (localStorage.cart === undefined) {
    currentCart = [];
  } else {
    currentCart = JSON.parse(localStorage.cart);
<<<<<<< Updated upstream
    console.log(currentCart);
  }

  const renderList = currentCart.map((cart) => {
    const { id, product, size, qty } = cart;

    return (
      <div className="p-5 mb-4 bg-light rounded-3 border">
        <div className="container-fluid py-5">
          <div className="row">
            <div className="col">
              <img
                className="img-thumbnail"
                src={product.image}
                alt={product.title}
              />
              <h2>{product.title}</h2>
              <h2>{size}</h2>
              <h2>{product.price}</h2>
              <h2>{qty}</h2>
              <h2>Total: {qty * product.price}</h2>
=======
    // console.log(currentCart);
  }

  const renderList = currentCart.map((cart) => {
    const { id, product, qty } = cart;
    totalPrice = totalPrice + qty * product.price;

    const changeTotal = (e) => {
      document.getElementById(id).innerHTML =
        "$" + e.target.value * product.price;
      // console.log(e.target.value);
    };

    return (
      <div className="p-1 bg-light rounded-3 border">
        <div className="container-fluid ">
          <div className="row">
            <div className="col d-flex">
              <img
                style={({ width: "200px" }, { height: "200px" })}
                src={product.image}
                alt={product.title}
              />

              <table width="100%" className="ms-5">
                <tr>
                  <td align="left" width="600px">
                    {product.title}
                  </td>
                  <td align="left" width="100px">
                    $ {product.price}
                  </td>
                  <td>
                    <input
                      onChange={(e) => changeTotal(e)}
                      defaultValue={qty}
                      type="number"
                    />
                  </td>
                  <td id={id}>$ {qty * product.price}</td>
                </tr>
              </table>
>>>>>>> Stashed changes
            </div>
          </div>
        </div>
      </div>
    );
  });

<<<<<<< Updated upstream
  const empty = () => {
    return (
      <div className="p-5 mb-4 bg-light rounded-3 border">
        <div className="container-fluid py-5">
          <div className="row">
            <div className="col">
              <h2>Anda Belum Memilih Item</h2>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <>{currentCart == [] ? empty : renderList}</>;
=======
  return (
    <>
      {[
        <h1 className="display-5 fw-bold">Cart</h1>,
        <table width="100%">
          <tr>
            <th width="800px"></th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </table>,
        renderList,
        <table width="100%">
          <tr>
            <th width="90%">Total: </th>
            <th>$ {totalPrice}</th>
          </tr>
        </table>,
        <button
          className="btn btn-success text-white btn-lg rounded m-2"
          // onClick={() => {
          //   let stocks = JSON.parse(localStorage.stocks);
          //   currentCart.map((cart) => {
          //     const { id, product, qty } = cart;
          //     stocks[id - 1] = stocks[id - 1] - qty;
          //   });
          //   localStorage.stocks = JSON.stringify(stocks);
          //   localStorage.removeItem("cart");
          // }}
        >
          Checkout
        </button>,
      ]}
    </>
  );
>>>>>>> Stashed changes
};

export default Cart;
