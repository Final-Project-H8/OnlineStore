import { Redirect, useHistory } from "react-router";

const Cart = () => {
  const history = useHistory();
  if (!localStorage.getItem("login")) {
    return <Redirect to="/login" />;
  }

  var totalPrice = 0;
  var currentCart;
  if (localStorage.cart === undefined) {
    currentCart = [];
  } else {
    currentCart = JSON.parse(localStorage.cart);
    // console.log(currentCart);
  }

  const renderList = currentCart.map((cart) => {
    const { id, product, qty } = cart;
    totalPrice = totalPrice + qty * product.price;

    const changeTotal = (e) => {
      document.getElementById(id).innerHTML =
        "$" + e.target.value * product.price;
      let itemCheck = currentCart.findIndex((x) => x.id === id);
      let currentStock = JSON.parse(localStorage.cart);
      currentStock[itemCheck].qty = +e.target.value;
      localStorage.cart = JSON.stringify(currentStock);
      totalPrice = 0;
      updateTotal();
      // console.log(currentStock[itemCheck]);
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
            </div>
          </div>
        </div>
      </div>
    );
  });

  const updateTotal = () => {
    JSON.parse(localStorage.cart).map((cart) => {
      const { id, product, qty } = cart;
      totalPrice = totalPrice + qty * product.price;
    });
  };

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
          onClick={() => {
            let stocks = JSON.parse(localStorage.stocks);
            JSON.parse(localStorage.cart).map((cart) => {
              const { id, product, qty } = cart;
              if (stocks[id - 1].stocks < qty) {
                stocks[id - 1].stocks = 0;
              } else {
                stocks[id - 1].stocks = stocks[id - 1].stocks - qty;
              }
              if (localStorage.rekap === undefined) {
                localStorage.rekap = JSON.stringify([
                  {
                    id: id,
                    product: product,
                    qty: qty,
                  },
                ]);
              } else {
                let currentRekap = JSON.parse(localStorage.rekap);
                let itemCheck = currentRekap.findIndex((x) => x.id === id);
                if (itemCheck === -1) {
                  currentRekap.push({
                    id: id,
                    product: product,
                    qty: qty,
                  });

                  localStorage.rekap = JSON.stringify(currentRekap);
                } else {
                  currentRekap[itemCheck].qty =
                    currentRekap[itemCheck].qty + qty;
                  localStorage.rekap = JSON.stringify(currentRekap);
                }
              }
            });
            localStorage.stocks = JSON.stringify(stocks);

            localStorage.removeItem("cart");
            history.push("/");
          }}
        >
          Checkout
        </button>,
      ]}
    </>
  );
};

export default Cart;
