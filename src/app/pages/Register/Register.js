import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import UploadImage from "../../components/UploadImage/UploadImage";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullname] = useState("");
  const [address, setAddress] = useState("");
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
        onChange={setFullname}
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
        onChange={setEmail}
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
        onChange={setPassword}
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="Address"
        name="Address"
        value={address}
        onChange={setAddress}
        label="Address"
        autoComplete="Address"
        autoFocus
      />
      <UploadImage />
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
