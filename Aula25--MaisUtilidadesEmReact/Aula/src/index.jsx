import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import App from "./App";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";

import ErrorBoundary from "./Errors/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <>
    <ErrorBoundary>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dentist/:id" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </ErrorBoundary>

  </>
);
