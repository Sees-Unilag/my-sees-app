import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Base } from "../components";
import Home from "../pages/home/Home";
import Upload from "../pages/uploads/Upload";
import Notification from "../pages/notification/Notification";
import Level from "../pages/level/Level";


export const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Base />}>
          <Route index path="/" element={<Home />} />
          <Route path="/levels" element={<Level />} />
          <Route path="/levels?year=1" element={<>Year 1</>} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/notification" element={<Notification />} />
        </Route>

        <Route path="*" element={<> 404 Not Found</>} />
      </Routes>
    </Router>
  );
};
