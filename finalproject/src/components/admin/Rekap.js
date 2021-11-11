const Rekap = () => {
  var totalPrice = 0;
  var currentRekap;
  if (localStorage.rekap === undefined) {
    currentRekap = [];
  } else {
    currentRekap = JSON.parse(localStorage.rekap);
    // console.log(currentRekap);
  }

  const renderList = currentRekap.map((cart) => {
    const { id, product, qty } = cart;
    totalPrice = totalPrice + qty * product.price;

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
                  <td>{qty}</td>
                  <td id={id}>$ {qty * product.price}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      {[
        <h1 className="display-5 fw-bold">Rekap Penjualan</h1>,
        <table width="100%">
          <tr>
            <th width="800px"></th>
            <th>Harga</th>
            <th>Terjual</th>
            <th>Pendapatan</th>
          </tr>
        </table>,
        renderList,
        <table width="100%">
          <tr>
            <th width="90%">Total Pendapatan: </th>
            <th>$ {totalPrice}</th>
          </tr>
        </table>,
      ]}
    </>
  );
};

export default Rekap;
