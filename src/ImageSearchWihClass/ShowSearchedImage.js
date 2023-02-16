import React from "react";
import "./classStyle.css";
import Card from "react-bootstrap/Card";
class ShowImageResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputData: "",
      filteredData: [],
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler = (event) => {
    const { apiData } = this.props;
    this.setState({ inputData: event.target.value });
    this.setState({
      filteredData: apiData.filter((item, index) =>
        item.title.toLowerCase().includes(event.target.value)
      ),
    });
  };

  render() {
    const { inputData, filteredData } = this.state;
    const { apiData } = this.props;
    return (
      <div>
        <div className="searchBar">
          <input
            className="inputData"
            type="search"
            placeholder="Search ..."
            onChange={(event) => this.onChangeHandler(event)}
          />
        </div>

        <div className="imageFixing">
          {inputData && inputData.length && filteredData && filteredData.length
            ? filteredData &&
              filteredData.length &&
              filteredData.map((item, index, arr) => {
                return (
                  <div className="imageSetting">
                    <img key={item.id} src={item.thumbnail} alt={item.title} />
                    <div>
                      <label>Item : {item.title}</label>
                    </div>
                  </div>
                );
              })
            : !inputData.length &&
              apiData &&
              apiData.length &&
              apiData.map((item, index, arr) => {
                return (
                  <div className="ImageSetting">
                    <img key={item.id} src={item.thumbnail} alt={item.title} />
                    <div>
                      <label>Item : {item.title}</label>
                    </div>
                  </div>
                );
              })}

          {inputData && inputData.length && !filteredData.length && (
            <Card body>
              Item Does not Exists,Please Search Something Else ....
            </Card>
          )}
        </div>
      </div>
    );
  }
}
export default ShowImageResult;
