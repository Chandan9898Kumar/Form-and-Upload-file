import React, { lazy, Suspense } from "react";

const ShowImageResult = lazy(() => import("./ShowSearchedImage"));
const URl = "https://dummyjson.com/products?limit=50";
class ImageWithClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
    };
  }

  componentDidMount() {
    this.fetchDataFromApi();
  }

  fetchDataFromApi = () => {
    fetch(URl)
      .then((response) => response.json())
      .then((result) => this.setState({ apiData: result.products }))
      .catch((error) => {
        alert(error);
      });
  };

  render() {
    const { apiData } = this.state;
    return (
      <div>
        <Suspense
          fallback={<div>Please Wait While Data is Being Loaded...</div>}
        >
          <ShowImageResult apiData={apiData} />
        </Suspense>
      </div>
    );
  }
}
export default ImageWithClass;
