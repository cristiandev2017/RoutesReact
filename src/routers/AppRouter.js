import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
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
import Navbar from "../components/Navbar";


export default function AppRouter() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/about" component={AboutPage}/>
        <Route path="/contact" component={ContactPage}/>
        <Route exact path="/" component={HomePage}/>

        <Route exact path="/profile/:username" component={ProfilePage}/>
        <Route exact path="/categories" component={CategoriesPage}/>

        <Route exact path="/signin">
          <Redirect to="/login"/>
        </Route>

        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/register" component={RegisterPage}/>

        <PrivateRoute exact path="/dashboard" component={DashboardPage}/>
        <Route exact path="/payments" component={PaymentPage}/>

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
