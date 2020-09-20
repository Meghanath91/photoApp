import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loggedin, setLoggedin] = useState(false);

  const handleLogin = (evt) => {
    evt.preventDefault();

    // axios
    //   .post(`/${user === "trainer" ? "trainers" : "students"}/login`, {
    //     email: email,
    //     password: password,
    //   })
    //   .then((res) => {
    //     localforage.setItem("user", res.data, () => {
    //       localforage.setItem("usertype", user);
    //       setLoggedin(true);

    //       user === "trainer"
    //         ? props.setTrainer(res.data)
    //         : props.setStudent(res.data);
    //     });
    //   });
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
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        // className={classes.submit}
      >
        Sign In
      </Button>
    </form>
  );
}
