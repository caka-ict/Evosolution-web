import React, { useState, useEffect, Suspense } from "react";
import MainApp from "./components/mainApp";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NotFoundPage } from "./components/404notfound/Notfound";
import { MainContext } from "./context/content";
import "./App.css";
import "../src/assets/styles/custom.css";
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [action, setAction] = useState("");
  const value = {
    isLoading,
    setIsLoading,
    action,
    setAction,
  };
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <MainContext.Provider value={value}>
        <BrowserRouter>
          <Routes>
            <Route
              exact={true}
              path="/"
              element={<MainApp />}
            ></Route>
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
            {/* <Route path="/" element={<MainApp />}></Route> */}
          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    </>
  );
};

export default App;
