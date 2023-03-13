import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "../container/About/About";
import Features from "../container/Features/Features";
import Help from "../container/Help/Help";
import Home from "../container/Home/Home";
import Login from "../container/Login/Login";
import Pricing from "../container/Pricing/Pricing";

export default function PublicRoutes(params) {
  return(
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/help" element={<Help />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}