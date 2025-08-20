import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Courses from "./Pages/Courses";
import JobPortal from "./Pages/JobPortal";
import Blogs from "./Pages/Blogs";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/jobPortal" element={<JobPortal />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
