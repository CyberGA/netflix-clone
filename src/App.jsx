import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Browse from "./pages/browse";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import * as ROUTES from "./constants/routes";

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME} component={Home} />

      <Route exact path={ROUTES.SIGN_UP}>
        <Signup />
      </Route>

      <Route exact path={ROUTES.SIGN_IN} component={Signin} />

      <Route exact path={ROUTES.BROWSE} >
        <Browse />
      </Route>

    </Router>
  );
}

export default App;
