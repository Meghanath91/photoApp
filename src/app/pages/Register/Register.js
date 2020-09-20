import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullname] = useState("");

  const handleLogin = (evt) => {
    evt.preventDefault();
  };

  return (
    <form onSubmit={handleLogin} className="register-container">
      <h1>Register</h1>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="name"
        name="Name"
        value={fullName}
        onChange={(e) => setFullname(e.target.value)}
        label="Full name"
        autoComplete="email"
        autoFocus
      />
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
