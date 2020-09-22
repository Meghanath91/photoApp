import React, { useContext } from "react";
import localforage from "localforage";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import "./Navbar.scss";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/context";
export default function Navbar() {
  const { user, setUser } = useContext(AuthContext);
  console.log(user, "in navbar");
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
    // localforage.clear();
    setUser(null);
    history.push("/");
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="navbar">
          <div className="logo">
            <Button onClick={handleLogo} color="inherit">
              PhotoApp
            </Button>
          </div>
          <div>
            {user ? (
              <Button onClick={handleLogout} color="inherit">
                Logout
              </Button>
            ) : (
              <div>
                <Button onClick={handleLogin} color="inherit">
                  Login
                </Button>
                <Button onClick={handleRegister} color="inherit">
                  Register
                </Button>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
