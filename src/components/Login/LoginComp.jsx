import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import GoogleLogin from "react-google-login";
import axios from "axios";

import {
  LineText,
  InputField,
  SignInWithButton,
  LoginBtn,
  Right,
  Margin,
  CreateAccount,
} from "./Common";
import { useState } from "react";

axios.defaults.baseURL = "https://agriapitest.herokuapp.com/v1";

const LoginComp = ({ setNum, notify }) => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  // eslint-disable-next-line no-useless-escape
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const dispatch = useDispatch();
  function responseGoogle(response) {
    console.log(response);
  }

  async function googleSuccess(response) {
    notify("loading", "Signing in...");
    axios
      .post("/user/oauth/google", {
        access_token: response.accessToken,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        try {
          dispatch({ type: "USER", user: res.data.user });
        } catch (err) {
          console.log(err);
        }
        history.push("/");
      });
  }

  async function signinLocal() {
    if (emailError.length > 0 || email.length === 0) {
      return notify("error", emailError);
    }
    axios
      .post("/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          try {
            dispatch({ type: "USER", user: res.data.user });
          } catch (err) {
            console.log(err);
          }
          history.push("/");
        } else {
          console.log(res.data);
          notify("info", res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        notify("error", err.response.data.message);
        setError(err.response.data.message);
      });
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  return (
    <Right>
      <h2>Login</h2>
      <Margin>
        <GoogleLogin
          clientId='323252919231-9gbdfcc3o2ennhrvthupucj5en8rei5r.apps.googleusercontent.com'
          buttonText='SignUp with Google'
          onSuccess={googleSuccess}
          onFailure={responseGoogle}
          render={(renderProps) => (
            <SignInWithButton
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <img src='/images/icons/google.svg' alt='Google' />
              SignIn with Google
            </SignInWithButton>
          )}
        />
        {/* <SignInWithButton>
          <img src="/images/icons/linkedIn.svg" alt="LinkedIn" />
          SignIn with LinkdIn
        </SignInWithButton> */}
        <LineText text='or Sign in with Email' />
      </Margin>
      <Margin>
        <InputField>
          <label htmlFor='email'>Email</label>
          {emailError.length > 0 && (
            <span
              style={{
                color: "red",
                fontSize: "12px",
                marginLeft: "10px",
              }}
            >
              {emailError}
            </span>
          )}
          <input
            type='email'
            name='email'
            value={email}
            onChange={handleEmail}
            onPaste={handleEmail}
            id='email'
          />
        </InputField>
        <InputField>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id='password'
          />
        </InputField>
        <Control>
          <div className='checkbox'>
            <input type='checkbox' name='remeber-me' id='remeber-me' />
            <label htmlFor='remeber-me'>Remember me</label>
          </div>
          <Link to='/'> Forgot password ?</Link>
        </Control>
        {error.length > 0 && (
          <span
            style={{
              color: "red",
              fontSize: "12px",
            }}
          >
            {error}
          </span>
        )}
        <LoginBtn onClick={signinLocal}>Login</LoginBtn>
      </Margin>
      <CreateAccount>
        Not Registered yet?{" "}
        <span
          className='a-hyper'
          style={{
            color: "#0e6656",
            fontWeight: 500,
            cursor: "pointer",
          }}
          onClick={() => setNum(1)}
        >
          Create Account
        </span>
      </CreateAccount>
    </Right>
  );
};

const Control = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .checkbox {
    input {
      margin-right: 4px;
    }
  }
`;

export default LoginComp;
