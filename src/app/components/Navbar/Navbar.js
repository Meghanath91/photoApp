import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function Navbar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">PhotoApp</Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
