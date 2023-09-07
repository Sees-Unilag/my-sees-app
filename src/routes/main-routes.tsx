import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Base } from "../components";
import Home from "../pages/home/Home";
import Level from "../pages/level/Level";
import Upload from "../pages/uploads/Upload";
import Notification from "../pages/notification/Notification";

export const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/levels" element={<Base />}>
          <Route index element={<Level />} />
        </Route>
        <Route path="/uploads" element={<Base />}>
          <Route index element={<Upload />} />
        </Route>
        <Route path="/notification" element={<Base />}>
          <Route index element={<Notification />} />
        </Route>
      </Routes>
    </Router>
  );
};
