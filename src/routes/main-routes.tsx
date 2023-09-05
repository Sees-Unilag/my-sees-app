import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Base } from "../components";
import Home from "../pages/home/Home";
import { Level } from "../components/lib/Level";

export const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Level />} />
        </Route>
      </Routes>
    </Router>
  );
};
