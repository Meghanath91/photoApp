import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const history = useHistory();
  const handleLogo = () => {
    history.push("/");
  };
  const handleLogin = () => {
    history.push("/login");
  };
  const handleRegister = () => {
    history.push("/register");
  };
  const handleLogout = () => {
    history.push("/");
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={handleLogo} color="inherit">
            PhotoApp
          </Button>
          <Button onClick={handleLogin} color="inherit">
            Login
          </Button>
          <Button onClick={handleRegister} color="inherit">
            Register
          </Button>
          <Button onClick={handleLogout} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
