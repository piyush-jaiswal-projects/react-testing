import React from "react";
import "./App.css";
import { AppProviders } from "./providers/app-providers";
import { MuiMode } from "./components/mui/mui-mode";

// const skills: string[] = ['HTML', 'CSS', 'Javascript'];

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
