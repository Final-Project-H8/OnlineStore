import { useHistory } from "react-router-dom";

const EmptyCart = () => {
  const history = useHistory();
  if (localStorage.cart !== undefined) {
    history.push("/cart");
    window.location.reload(false);
  }
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3 border">
        <div className="container-fluid py-5">
          <div className="row">
            <div className="col">
              <h2>Anda Belum Memilih Item</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
