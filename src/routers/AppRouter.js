import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProfilePage from "../pages/ProfilePage";
import CategoriesPage from "../pages/CategoriesPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import PaymentPage from "../pages/PaymentPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import Navbar from "../components/Navbar";

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route exact path="/" component={HomePage} />

        <Route exact path="/profile/:username" component={ProfilePage} />
        <Route path="/categories" component={CategoriesRouter} />

        <Route exact path="/signin">
          <Redirect to="/login" />
        </Route>

        <PublicRoute exact path="/login" component={LoginPage} />
        <PublicRoute exact path="/register" component={RegisterPage} />

        <PrivateRoute exact path="/dashboard" component={DashboardPage} />
        <PrivateRoute exact path="/payments" component={PaymentPage} />

        <Route path="/404" component={NotFoundPage} />
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Router>
  );
}

function CategoriesRouter() {
  return (
    <div>
      <ul>
        <li>
          <Link to="categories">All</Link>
        </li>
        <li>
          <Link to="categories/terror">Terror</Link>
        </li>
        <li>
          <Link to="categories/action">Action</Link>
        </li>
        <li>
          <Link to="categories/anime">Anime</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/categories" component={CategoriesPage} />
        <Route exact path="/categories/terror">
          <h1>Category Terror</h1>
        </Route>
        <Route exact path="/categories/action">
          <h1>Category Action</h1>
        </Route>
        <Route exact path="/categories/anime">
          <h1>Category Anime</h1>
        </Route>

        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </div>
  );
}
