import { Redirect } from "react-router";

const Cart = () => {
  if (!localStorage.getItem("login")) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3 border">
        <div className="container-fluid py-5">
          <div className="row">
            <div className="col">
              <h1 className="display-5 fw-bold">Cart</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
