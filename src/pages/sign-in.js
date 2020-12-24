import { useContext, useState } from "react";
import { Form } from "../components";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "../containers/footer-container";
import { HeaderContainer } from "../containers/header-container";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router-dom";

export default function SignIn() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //validation for disable button
  const isInValid = password === "" || emailAddress === "";

  const handleSignin = (event) => {
    event.preventDefault();

    //firebase auth
    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      {/* Input element */}
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          {/* //Email && password validation */}
          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInValid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.TextSmall type="checkbox">Remember me</Form.TextSmall>
          {/* <Form.TextSmall type="checkbox">Remember me</Form.TextSmall> */}

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign Up now.</Form.Link>
          </Form.Text>

          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
