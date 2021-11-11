const Rekap = () => {
    var totalPrice = 0;
    var currentRekap;
    if (localStorage.cart === undefined) {
      currentRekap = [];
    } else {
      currentRekap = JSON.parse(localStorage.cart);
      // console.log(currentRekap);
    }
  
    const renderList = currentRekap.map((cart) => {
      const { id, product, qty } = cart;
      totalPrice = totalPrice + qty * product.price;
  
      return (
        <div className="p-2 bg-light rounded-3 border">
          <div className="container-fluid ">
            <div className="row">
              <div className="col d-flex">
                <table width="100%" className="ms-5">
                  <tr>
                    <td align="left" width="70%">
                      {product.title}
                    </td>
                    <td className="text-center" width="10%">
                      $ {product.price}
                    </td>
                    <td className="text-center" width="10%">{qty}</td>
                    <td className="text-center" width="10%" id={id}>$ {qty * product.price}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
    });
  
    return (
      <div className="p-5">
        {[
          <h1 className="display-5 fw-bold">Rekap Penjualan</h1>,
          <table width="100%">
            <tr>
              <th className="text-center" width="70%">Produk</th>
              <th className="text-center" width="10%">Harga</th>
              <th className="text-center" width="10%">Terjual</th>
              <th className="text-center" width="10%">Pendapatan</th>
            </tr>
          </table>,
          renderList,
          <table width="100%">
            <tr>
              <th className="text-center" width="90%">Total Pendapatan: </th>
              <th>$ {totalPrice.toFixed(3)}</th>
            </tr>
          </table>,
        ]}
      </div>
    );
  };
  
  export default Rekap;