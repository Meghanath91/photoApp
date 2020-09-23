import React, { useState } from "react";
import AuthContext from "./app/context/context";

import "./App.css";
import Routes from "./Routes";

function App() {
  //setup context to distribute user state globally
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }} className="App">
      <Routes />
    </AuthContext.Provider>
  );
}

export default App;
