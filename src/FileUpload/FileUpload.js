import React from "react";
import axios from "axios";
import "./filestyles.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class UploadFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
  }

  // On file select (from the pop up)
  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  };

  fileData = () => {
    if (this.state.selectedFile) {
      toast.info("File has been Uploaded...", { autoClose: 1500 });
      return (
        <div>
          <h2>File Details</h2>
          <br />
          <p>File Type : {this.state.selectedFile.type}</p>
          <br />
          <p>File Name : {this.state.selectedFile.name}</p>
          <br />
          <p>
            Last Modified :{"  "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="fileCenter">
        <h2>File Uploading App</h2>
        <br />
        {"     "}
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>Upload File</button>{" "}
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            Refresh Page
          </button>
          <ToastContainer />
        </div>

        {this.fileData()}
      </div>
    );
  }
}
export default UploadFile;
