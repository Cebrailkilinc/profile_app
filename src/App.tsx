/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { useState } from "react";
import "./App.css";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:id" element={<Profile />} />
    </Routes>
  );
}

export default App;
