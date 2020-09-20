import React from "react";
import { Button, TextField } from "@material-ui/core";

export default function Login() {
  return (
    <div>
      <form>
        <h1>Login</h1>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
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
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
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
    </div>
  );
}
