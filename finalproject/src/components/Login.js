import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmailError("");
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordError("");
    setPassword(e.target.value);
  };

  const emailCheck = (email, password) => {
    if (email !== "") {
      const emailRegex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (emailRegex.test(email)) {
        setEmailError("");
        return true;
      } else {
        setEmailError("Invalid Email");
        return false;
      }
    } else {
      setEmailError("Email Required");
      return false;
    }
  };

  const passwordCheck = (password) => {
    if (password === "") {
      setPasswordError("Password Required");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  async function login (email, password) {
    let response = await fetch("https://fakestoreapi.com/users");
    
    let data = await response.json();
    
    let cek = await data.find(item => {
      return (item.email === email && item.password === password)
    });

    return (cek) ? true : false;
  };

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    emailCheck(email);
    passwordCheck(password);

    if (await login(email, password)) {
      localStorage.setItem("login", "true");
      history.push("/");
      window.location.reload(false);
    } else {
      if (emailCheck(email) && passwordCheck(password)) {
        alert("Email / Password Salah!");
      }
    }
  };

  return (
    <>
      <div className="mb-5">
        <h1>Login</h1>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            className="form-control"
            onChange={handleEmailChange}
            value={email}
          />
          <br></br>
          {emailError && <div className="error-msg">{emailError}</div>}
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handlePasswordChange}
            value={password}
          />
          <br></br>
          {passwordError && <div className="error-msg">{passwordError}</div>}
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default Login;
