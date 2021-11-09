import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import LoginResult from "./components/LoginResult";
import Admin from "./components/admin/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route path="/cart">
            <Header />
            <Cart />
            <Footer />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/product/:productId">
            <Header />
            <ProductDetail />
            <Footer />
          </Route>
          <Route path="/loginResult">
            <Header />
            <LoginResult />
            <Footer />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;

