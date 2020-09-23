import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/context";
import localforage from "localforage";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import "./Navbar.scss";

export default function Navbar() {
  //using context to get loggedin userstate throughout the app as global state
  const { user, setUser } = useContext(AuthContext);
  //use history to navigate to pages
  const history = useHistory();
  //this will redirect to home
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
    //it will clear local sessions
    localforage.clear();
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
