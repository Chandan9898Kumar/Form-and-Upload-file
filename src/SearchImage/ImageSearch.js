import React, { useEffect, useState, lazy, Suspense } from "react";
// import "./image.css";
import BasicExample from "./Spinner";
const ApiData = lazy(() => import("./DataFromApi"));
const URl = "https://dummyjson.com/products?limit=50";
const ImageSearchApp = () => {
  const [dataFromApi, setDataFromApi] = useState([]);
  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = () => {
    fetch(URl)
      .then((response) => response.json())
      .then((data) => setDataFromApi(data.products));
  };

  return (
    <div>
      <Suspense fallback={<BasicExample />}>
        <ApiData productData={dataFromApi} />
      </Suspense>
    </div>
  );
};
export default ImageSearchApp;
