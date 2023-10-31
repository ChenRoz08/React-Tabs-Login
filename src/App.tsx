import { Tab } from "./components/Tabs/Tabs";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <>
      <div>
        <header>
          <h1>ADMIN PANEL</h1>
          <div>
            {login ? "Welcome back, Admin" : "Welcome back, Guest"}
            <button onClick={() => setLogin(!login)}>
              {login ? "Logout" : "Login"}
            </button>
          </div>
        </header>
      </div>
      <div>{login ? <Tab /> : "Ypu must be logged in"}</div>
    </>
  );
}

export default App;
