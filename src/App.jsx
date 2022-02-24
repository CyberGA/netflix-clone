import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Browse from "./pages/browse";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import * as ROUTES from "./lib/routes";
import { IsUserValidated, ProtectedRoute } from "./lib/validate";
import useAuthListener from "./hooks/use-auth-listener";
import useForm from "./hooks/use-form";
import NotFound from "./pages/404";

function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserValidated exact user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserValidated>

        <IsUserValidated exact user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <Signin loginForm={useForm()} />
        </IsUserValidated>

        <IsUserValidated exact user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <Signup signupForm={useForm()} />
        </IsUserValidated>

        <ProtectedRoute exact user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>

        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
