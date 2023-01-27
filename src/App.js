import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import NavBar from "./Navbar/Header";
import Spinner from "./Spinner/Spinner";
const NormalForm = lazy(() => import("./NormalForm/NormalFormwithCss"));
function App() {
  return (
    <div className="">
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/HTMLForm" element={<NormalForm />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
