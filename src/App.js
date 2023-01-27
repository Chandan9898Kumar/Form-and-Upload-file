import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import NavBar from "./Navbar/Header";
import Spinner from "./Spinner/Spinner";
const NormalForm = lazy(() => import("./NormalForm/NormalFormwithCss"));
const FormBootstrapExample=lazy(()=>import('./FormWithBootstrap/BootstrapForm'))
const UploadFile=lazy(()=>import('./FileUpload/FileUpload'))
function App() {
  return (
    <div className="">
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/HTMLForm" element={<NormalForm />} />
            <Route exact path="/BootstrapForm" element={<FormBootstrapExample />} />
            <Route exact path="/UploadFile" element={<UploadFile />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
