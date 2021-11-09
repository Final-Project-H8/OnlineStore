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
              <table width="100%">
                <tr>
                  <th width="50%">Nama Barang</th>
                  <th width="20%">Harga</th>
                  <th width="10%">Jumlah</th>
                  <th width="20%">Total</th>
                </tr>
                <tr>
                  <td>Product 1</td>
                  <td>$ 10</td>
                  <td><input type="number" /></td>
                  <td>$ 10</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
