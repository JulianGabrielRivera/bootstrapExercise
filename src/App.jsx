import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PlaceDetails } from "./pages/PlaceDetails";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place-details" element={<PlaceDetails />} />
      </Routes>
    </>
  );
}

export default App;
