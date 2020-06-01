import React from "react";

import "./App.css";
import MemeGenerator from "./MemeGenerator";
import Header from "./Header";

export default function App() {
  return (
    <React.StrictMode>
      <Header />
      <MemeGenerator />
    </React.StrictMode>
  );
}
