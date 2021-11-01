import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useHistory } from "react-router-dom";
import m2 from "../image/m2.PNG";
import "../styles/Misc.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); //stops refresh
  };

  const register = (event) => {
    event.preventDefault(); //stops refresh
  };
  return (
    <div className="login">
      <Link to="/mbrandview">
        <img className="login__logo" src={m2} />

        {/* <h1>Login Page</h1> */}
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Link to="/mbrand">
            <button
              
              type="submit"
              className="login__signInButton"
            >
              Sign In
            </button>
          </Link>
        </form>
        <p>By signing-in you agree to Multicecream's Conditions</p>

        <button
          onClick={register}
          type="submit"
          className="login__registerButton"
        >
          Create your Multicecream Account
        </button>
      </div>
    </div>
  );
}

export default Login;
