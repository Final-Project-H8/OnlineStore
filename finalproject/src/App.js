import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import LoginResult from "./components/LoginResult";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/product/:productId">
              <ProductDetail />
            </Route>
            <Route path="/loginResult">
              <LoginResult />
            </Route>
          </Switch>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;

