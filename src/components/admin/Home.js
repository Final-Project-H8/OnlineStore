import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Rekap from "./Rekap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductPage from "./ProductPage";

const Home = () =>
{
    return(
        <>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/admin/Rekap">
                        <Rekap />
                    </Route>
                    <Route path="/admin">
                        <ProductPage />
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default Home;