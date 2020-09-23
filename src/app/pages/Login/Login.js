import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import localforage from "localforage";
import { Button, TextField } from "@material-ui/core";
import "./login.scss";
import AuthContext from "../../context/context";

export default function Login() {
  //using context to set a global state user
  const { setUser } = useContext(AuthContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (evt) => {
    evt.preventDefault();

    axios.defaults.withCredentials = true;
    //POST call to login route and upon successfully resolve it with JWtoken make a GET request to get user data
    await axios
      .post(`http://localhost:8080/api/login`, {
        email: email,
        password: password,
      })
      .then(async (res) => {
        const TOKEN = res.data.token;
        if (TOKEN) {
          await axios
            .get(`http://localhost:8080/api/me`, {
              headers: {
                "Content-Type": "application/json",
                token: TOKEN,
              },
            })
            .then(async (res) => {
              //sets user using context to make it available globally
              await setUser(res.data);
              //to store user in local session
              localforage.setItem("user", res.data, async () => {
                await history.push("/user", { params: res.data });
              });
            });
        }
      });
  };

  return (
    <form onSubmit={handleLogin} className="login-container">
      <h1>LOGIN</h1>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email Address"
        autoComplete="email"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button type="submit" fullWidth variant="contained" id="btn-class">
        Sign In
      </Button>
    </form>
  );
}
