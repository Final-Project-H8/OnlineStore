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
                style={({ width: "15%" }, { height: "200px" })}
                src={product.image}
                alt={product.title}
              />

              <table width="100%" className="ms-5">
                <tr>
                  <td align="center" width="70%">
                    {product.title}
                  </td>
                  <td align="center" width="10%">
                    $ {product.price}
                  </td>

                  <td width="10%" align="center">
                    <input
                      className="ml-10 form-control w-50 align-items-center"
                      onChange={(e) => changeTotal(e)}
                      defaultValue={qty}
                      type="number"
                    />
                  </td>
                  <td width="10%" className="text-center" id={id}>$ {qty * product.price}</td>
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
    <div className="p-5">
      {[
        <h1 className="display-5 fw-bold">Cart</h1>,
        <table width="100%">
          <tr>
            <th width="70%" className="text-center">Product</th>
            <th width="10%" className="text-center">Price</th>

            <th width="10%" className="text-center">Quantity</th>
            <th width="10%" className="text-center">Total</th>
          </tr>
        </table>,
        renderList,
        <table width="100%">
          <tr>
            <th width="90%">Total: </th>
            <th>$ {totalPrice.toFixed(3)}</th>
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
    </div>
  );
};

export default Cart;