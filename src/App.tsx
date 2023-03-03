import React, { Suspense } from "react";

//CSS
import "./App.css";

//COMPONENTS
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Spinner from "./components/Spinner";

//ROUTERS
import { Routes, Route } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile/:id" element={<Profile />} />
      </Routes>
    </Suspense>
  );
}

export default App;
