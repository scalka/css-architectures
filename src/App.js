import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import style from "./styles.css";
import CssInCss from "./css-in-css";
import CssInJs from "./css-in-js";
//import UtilityFirst from "./utility-first-css";

function App() {
  return (
    <main>
      <h1>FED Guild cookbook</h1>
      <BrowserRouter>
        <div>
          <nav className="menu">
            <ol className="menu-list">
              <li>
                <Link to="/css-modules">CSS-modules</Link>
              </li>
              <li>
                <Link to="/css-with-scss">CSS-with-SCSS</Link>
              </li>
              <li>
                <Link to="/utility-first">Utility-first-CSS</Link>
              </li>
              <li>
                <Link to="/css-in-js">CSS-in-JS</Link>
              </li>
            </ol>
          </nav>
          <Switch>
            <Route path="/css-modules">
              {/* CSS Modules */}
              <CssInCss.CssModules />
            </Route>
            <Route path="/css-with-scss">
              {/* CSS with Sass */}
              <CssInCss.Scss />
            </Route>
            <Route path="/utility-first">
              {/* Utility-First-CSS: Tailwind CSS */}
              {/* <UtilityFirst /> */}
            </Route>
            <Route path="/css-in-js">
              {/* Styled Components */}
              <CssInJs.StyledComponents />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </main>
  );
}

export default App;
