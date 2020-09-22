import React, { useState, useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import UploadImage from "../../components/UploadImage/UploadImage";
import axios from "axios";
import localforage from "localforage";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/context";

export default function Register() {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [upload, setUpload] = useState();
  const history = useHistory();

  const handleRegister = (evt) => {
    evt.preventDefault();
    const newUser = {
      email,
      password,
      username,
      address,
      upload,
    };
    console.log(newUser);
    axios
      .post(`http://localhost:8080/api/register`, newUser)
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
              await setUser(res.data);
              localforage.setItem("user", res.data, async () => {
                await history.push("/user", { params: res.data });
              });
            });
        }
      });
  };

  return (
    <form onSubmit={handleRegister} className="login-container">
      <h1>REGISTER</h1>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="name"
        name="Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
      <Button type="submit" fullWidth variant="contained" id="btn-class">
        Register
      </Button>
    </form>
  );
}
