import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ProductDetail from "../pages/ProductDetail";
import { Switch, Route } from "react-router-dom";

export default function PageContent() {
    return (
        <div className="page-content">
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/shop">
                    <ShopPage />
                </Route>
                <Route path="/about">
                    <AboutPage />
                </Route>
                <Route path="/contact">
                    <ContactPage />
                </Route>
                <Route path="/product">
                    <ProductDetail />
                </Route>
            </Switch>
        </div>
    )
}