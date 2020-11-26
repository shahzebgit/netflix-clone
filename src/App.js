import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Browse, SignIn, SignUp } from "./pages";

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <SignIn />
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <SignUp />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.MAIN_PAGE}>
        <Home />
      </Route>
    </Router>
  );
}
