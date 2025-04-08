import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Components/Login.module.css";

const Login = () => {
  const [loginID, setLoginID] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const credentials = {
      username: loginID,
      password: loginPassword,
    };
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log("Failed to login the user");
      } else {
        console.log("Login successful: " + data.token);
        setToken(data.token);
        localStorage.setItem("authToken", data.token);
      }

      navigate("/products");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <section className={styles.userListContainer}>
        <h1>Welcome to Login screen</h1>
        <h2>Email: </h2>
        <input
          type="text"
          placeholder="Enter the email"
          value={loginID}
          onChange={(e) => setLoginID(e.target.value)}
        />
        <h2>Password: </h2>
        <input
          type="password"
          placeholder="Enter the password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login Button</button>
      </section>
    </>
  );
};

export default Login;
