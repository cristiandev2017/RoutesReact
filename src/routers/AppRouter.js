import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProfilePage from "../pages/ProfilePage";
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

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
