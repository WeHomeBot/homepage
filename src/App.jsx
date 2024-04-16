import React from "react";
import Root from "./pages/Root";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
    </Routes>
  );
}
export default App;
