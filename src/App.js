import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import NavBar from "./Navbar/Header";
import Spinner from "./Spinner/Spinner";
const NormalForm = lazy(() => import("./NormalForm/NormalFormwithCss"));
const FormBootstrapExample = lazy(() =>
  import("./FormWithBootstrap/BootstrapForm")
);
const UploadFile = lazy(() => import("./FileUpload/FileUpload"));
const HomePage = lazy(() => import("./HomePage/Home"));
const ResizeImage = lazy(() => import("./ZoomInZoomOut/ZoomInOut"));
const FormValidation = lazy(() =>
  import("./FormValidation/FormWithValidation")
);
const ImageSearchApp = lazy(() => import("./SearchImage/ImageSearch"));

const ImageWithClass = lazy(() =>
  import("./ImageSearchWihClass/GetDataFromApi")
);
function App() {
  return (
    <div className="">
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/HTMLForm" element={<NormalForm />} />
            <Route
              exact
              path="/BootstrapForm"
              element={<FormBootstrapExample />}
            />
            <Route exact path="/UploadFile" element={<UploadFile />} />
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/ZoomInOut" element={<ResizeImage />} />
            <Route exact path="/ValidateForm" element={<FormValidation />} />
            <Route exact path="/ImageSearch" element={<ImageSearchApp />} />
            <Route
              exact
              path="/ImageSearchWithClass"
              element={<ImageWithClass />}
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
