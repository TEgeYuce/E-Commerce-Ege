import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ProductDetail from "../pages/ProductDetail";
import BlogPage from "../pages/BlogPage";
import TeamPage from "../pages/TeamPage";
import { Switch, Route } from "react-router-dom";

export default function PageContent() {
    return (
        <div className="page-content">
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/shop">
                    <ShopPage/>
                </Route>
                <Route path="/about">
                    <AboutPage/>
                </Route>
                <Route path="/contact">
                    <ContactPage/>
                </Route>
                <Route path="/blog">
                    <BlogPage/>
                </Route>
                <Route path="/product">
                    <ProductDetail/>
                </Route>
                <Route path="/team">
                    <TeamPage/>
                </Route>
                <Route path="/product:id">
                    <ProductDetail/>
                </Route>
            </Switch>
        </div>
    )
}