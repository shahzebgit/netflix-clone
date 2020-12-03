import { Route, Redirect } from "react-router-dom";

//If user is not signed up then redirect it signin/signup
export function RedirectUser({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        //if there is no user just render sign up page
        if (!user) {
          return children;
        }

        //redirect the user to Browse
        if (user) {
          console.log("Im user -", loggedInPath);
          return <Redirect to={{ pathname: loggedInPath }} />;
        }

        //if there is nothing to render then say null
        return null;
      }}
    />
  );
}

//this is to show Browse page for signed up user only
export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        //show the browse content
        if (user) {
          return children;
        }

        //or redirect people to sign in
        if (!user) {
          return (
            <Redirect to={{ pathname: "signin", state: { from: location } }} />
          );
        }

        return null;
      }}
    />
  );
}
