import React from "react";
import "./zoomStyle.css";
import Button from "react-bootstrap/Button";
import ModalBox from "./Modal";
class ResizeImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: null,
      width: null,
    };
    this.handleZoomIn = this.handleZoomIn.bind(this);
    this.handleZoomOut = this.handleZoomOut.bind(this);
    this.igmRef = React.createRef();
  }

  componentDidMount() {
    // Saving initial dimension of image as class properties
    this.initialHeight = this.igmRef.current.clientHeight;
    this.initialWidth = this.igmRef.current.clientWidth;
  }

  // Event handler callback for zoom in
  handleZoomIn() {
    const height = this.igmRef.current.clientHeight;
    const width = this.igmRef.current.clientWidth;

    // Here we directly manipulating the element by setting margin.
    this.igmRef.current.style.marginLeft = "40px";
    // Increase dimension(Zooming)
    this.setState({
      height: height + 10,
      width: width + 10,
    });
  }
  // Event handler callback zoom out
  handleZoomOut = () => {
    const height = this.igmRef.current.clientHeight;
    const width = this.igmRef.current.clientWidth;
    this.igmRef.current.style.marginLeft = "0px";
    this.setState({
      height: height - 10,
      width: width - 10,
    });
  };

  render() {
    // Assign current height and width to the image
    const imgStyle = { height: this.state.height, width: this.state.width };
    return (
      <div className="shadowing">
        <div className="shiftElement">
          <h2>Zoom in and Zoom Out App</h2>
          {/* Assign reference to DOM element     */}
          <img
            style={imgStyle}
            ref={this.igmRef}
            src="https://media.geeksforgeeks.org/wp-content/uploads/20200923125643/download.png"
            alt="gfg"
          />
          <div className="shiftButton">
            <Button variant="dark" onClick={this.handleZoomIn}>
              Zoom In
            </Button>{" "}
            <Button variant="dark" onClick={this.handleZoomOut}>
              Zoom Out
            </Button>
          </div>
          <div style={{ marginTop: "25px", marginLeft: "40px" }}>
            <ModalBox />
          </div>
        </div>
      </div>
    );
  }
}
export default ResizeImage;
