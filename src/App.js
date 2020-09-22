import React, { useState } from "react";
import AuthContext from "./app/context/context";

import "./App.css";
import Routes from "./Routes";

function App() {
  const [user, setUser] = useState();
  console.log(user, "in app.js");
  return (
    <AuthContext.Provider value={{ user, setUser }} className="App">
      <Routes />
    </AuthContext.Provider>
  );
}

export default App;
