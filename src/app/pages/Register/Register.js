import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import UploadImage from "../../components/UploadImage/UploadImage";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [upload, setUpload] = useState();
  const handleLogin = (evt) => {
    evt.preventDefault();
    console.log({ email, password, fullName, address, upload });
  };

  return (
    <form onSubmit={handleLogin} className="login-container">
      <h1>REGISTER</h1>
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
        // autoComplete="email"
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
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="Address"
        name="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        label="Address"
        autoComplete="Address"
        autoFocus
      />
      <UploadImage upload={upload} setUpload={setUpload} />
      <Button type="submit" fullWidth variant="contained" color="primary">
        Register
      </Button>
    </form>
  );
}
