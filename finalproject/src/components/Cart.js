import { Redirect } from "react-router";

const Cart = () => {
  if (!localStorage.getItem("login")) {
    return <Redirect to="/login" />;
  }

  var currentCart;
  if (localStorage.cart === undefined) {
    currentCart = [];
  } else {
    currentCart = JSON.parse(localStorage.cart);
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
            </div>
          </div>
        </div>
      </div>
    );
  });

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
};

export default Cart;
