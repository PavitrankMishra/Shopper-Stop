import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Components/Login.module.css";

const Login = () => {
  const [loginID, setLoginID] = useState("mor_2314");
  const [loginPassword, setLoginPassword] = useState("83r5^_");
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
      <section className={styles.userLoginContainer}>
        <h1 className={styles.loginHeading}>Login</h1>
        <div className={styles.inputContainer}>
          <h2>Email: </h2>
          <input
            type="text"
            placeholder="LoginID"
            value={loginID}
            onChange={(e) => setLoginID(e.target.value)}
            className={styles.loginInput}
          />
        </div>
        <div className={styles.passwordContainer}>
          <h2>Password: </h2>
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            className={styles.loginPassword}
          />
        </div>
        <button onClick={handleLogin} className={styles.loginButton}>
          Login Button
        </button>
      </section>
    </>
  );
};

export default Login;
