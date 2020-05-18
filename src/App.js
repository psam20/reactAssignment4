import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <nav className="navigation-bar">
        <Link to="/About" className="Link">
          About
        </Link>
        <Link to="/Products" className="Link">
          Products
        </Link>
      </nav>

      <Switch>
        <Route
          path="/About"
          component={() => <h1>This page is About Products</h1>}
        />
      </Switch>
    </div>
  );
}
