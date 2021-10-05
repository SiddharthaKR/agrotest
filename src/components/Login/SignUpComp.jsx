import styled from "styled-components";

import {
  LineText,
  InputField,
  LoginBtn,
  SignInWithButton,
  Right,
  Margin,
  CreateAccount,
} from "./Common";
import { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://agriapitest.herokuapp.com/v1";

// eslint-disable-next-line no-useless-escape
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const SignUpComp = ({ setNum, notify, dismiss }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    notify("loading", "Signing up...");
    if (firstName === "") {
      dismiss();
      return notify("error", "First name is required");
    }
    if (lastName === "") {
      dismiss();
      return notify("error", "Last name is required");
    }
    if (email === "") {
      dismiss();
      return notify("error", "Email is required");
    }
    if (!emailRegex.test(email)) {
      dismiss();
      return notify("error", "Invalid email");
    }
    if (password === "") {
      dismiss();
      return notify("error", "Password is required");
    }
    if (password.length < 6) {
      setPasswordError("Invalid Password");
      return notify("error", "Password must be at least 6 characters");
    }
    axios
      .post("/user/register", {
        name: [firstName, lastName],
        email,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          dismiss();
          notify("success", "Sign up successful");
          notify("info", "Verification mail sent!");
          notify("info", "Verify to login");
          setNum(0);
        }
      })
      .catch((err) => {
        console.log(err);
        dismiss();
        if (err.response.status === 400) {
          return notify("error", err.response.data.message);
        }
        notify("error", "Something went wrong");
      });
  };

  return (
    <Right>
      <h2>Sign Up</h2>
      <Margin>
        <SignInWithButton>
          <img src='/images/icons/google.svg' alt='Google' />
          SignUp with Google
        </SignInWithButton>
        <LineText text='OR' />
      </Margin>
      <Margin>
        <SInputField>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            name='firstName'
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            id='firstName'
          />
        </SInputField>
        <SInputField>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            name='lastName'
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            id='lastName'
          />
        </SInputField>
        <SInputField>
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
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailRegex.test(email) === false) {
                setEmailError("Invalid Email Address");
              } else {
                setEmailError("");
              }
            }}
            id='email'
          />
        </SInputField>
        <SInputField>
          <label htmlFor='password'>Password</label>
          {passwordError.length > 0 && (
            <span
              style={{
                color: "red",
                fontSize: "12px",
                marginLeft: "10px",
              }}
            >
              {passwordError}
            </span>
          )}
          <input
            type='password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name='password'
            id='password'
          />
        </SInputField>
        <SInputField>
          <label htmlFor='ConfirmPassword'>Confirm Password</label>
          <input
            type='password'
            onChange={(e) => {
              if (e.target.value !== password) {
                setPasswordError("Passwords do not match");
              } else {
                setPasswordError("");
              }
            }}
            id='ConfirmPassword'
          />
        </SInputField>
        <SignInButton onClick={handleSignup}>Sign Up</SignInButton>
      </Margin>
      <CreateAccount>
        Already have an account?{" "}
        <span
          className='a-hyper'
          style={{
            color: "#0e6656",
            fontWeight: 500,
            cursor: "pointer",
          }}
          onClick={() => setNum(0)}
        >
          Login
        </span>
      </CreateAccount>
    </Right>
  );
};

const SInputField = styled(InputField)`
  margin: 4px 0px;
`;
const SignInButton = styled(LoginBtn)`
  margin: 24px 0px;
`;

export default SignUpComp;
