import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/home";
import Browse from "./pages/browse";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import * as ROUTES from "./constants/routes";
import { IsUserValidated, ProtectedRoute } from "./validation/routes";
import useAuthListener from "./hooks/use-auth-listener";

function App() {
  const {user} = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserValidated
          exact
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
        >
          <Home />
        </IsUserValidated>

        <IsUserValidated
          exact
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <Signin />
        </IsUserValidated>

        <IsUserValidated
          exact
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          <Signup />
        </IsUserValidated>

        <ProtectedRoute exact user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>

        {/* <Route exact path={ROUTES.HOME} component={Home} /> */}
      </Switch>
    </Router>
  );
}

export default App;
