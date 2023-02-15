import React, { useState, useRef } from "react";
import "./image.css";
import Card from "react-bootstrap/Card";
const ApiData = ({ productData }) => {
  const [SearchInputData, setSearchInputData] = useState([]);
  const [inputTypeValue, setInputTypeValue] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const refValue = useRef("");

  const filterData =
    productData &&
    productData.slice(pageNum * 10 - 10, pageNum * 10).map((item) => item);

  const debounce = (newFunction) => {
    let timer;

    return function (inputValue) {
      //  Here above inputValue parameter,will give us the input we are typing,we can use this directly in our function,instead of taking from arguments.
      let args = arguments;
      let context = this;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        newFunction.apply(context, [...args]);
        // we can use  below method as well.
        // newFunction(inputValue)
      }, 1000);
    };
  };

  const callbackMethod = (values) => {
    setInputTypeValue(values);
    setSearchInputData(
      filterData.filter((item, index, arr) =>
        item.title.toLowerCase().includes(values)
      )
    );
  };

  // Here this SearchInputQuery function depicting return function from debounce method above,we can pass any parameter inside return function.
  // and whatever we are typing( onChanging ) that return function will be having that values.
  const SearchInputQuery = debounce(callbackMethod);

  const handleClickEvent = (event, value) => {
    event.preventDefault();
    setPageNum(value);
    setInputTypeValue("");
    // Here we have used useREf to directly remove the text(value) from input field,because when we are clicking then setInputTypeValue('') making inputTypeValue =''
    // but still whatever we type was not removing from input filed.reason we have not set "value" attributes (not using it) in input element so it is uncontrolled.
    refValue.current.value = "";
  };

  return (
    <div>
      <div className="setSearchAtCenter">
        {/* Here we have not given value on input element,because we have used debounce,meaning it will set inputValue after specified time,
if we type anything then that time it will not set any input value,will only set after the specified in setTimeout,so that we don't want right now.
          */}
        <input
          ref={refValue}
          autoFocus={true}
          type="search"
          placeholder="Search..."
          // value={inputTypeValue}
          onChange={(event) => SearchInputQuery(event.target.value)}
        />
      </div>

      <div className="imageFix">
        <div className="setMargin">
          {inputTypeValue &&
          inputTypeValue.length &&
          SearchInputData &&
          SearchInputData.length
            ? SearchInputData &&
              SearchInputData.map((item, index, arr) => {
                return (
                  <div className="settingImage">
                    <div>
                      <img
                        key={item.id}
                        src={item.thumbnail}
                        alt={item.title}
                      />
                      <div>
                        <label>Item : {item.title}</label>
                      </div>
                    </div>
                  </div>
                );
              })
            : !inputTypeValue.length &&
              productData &&
              filterData &&
              filterData.length &&
              filterData.map((item, index, arr) => {
                return (
                  <div className="settingImage">
                    <div>
                      <img
                        key={item.id}
                        src={item.thumbnail}
                        alt={item.title}
                      />
                      <div>
                        <label>Item : {item.title}</label>
                      </div>
                    </div>
                  </div>
                );
              })}

          {inputTypeValue &&
            inputTypeValue.length &&
            !SearchInputData.length && (
              <Card body>
                Item Does not Exists,Please Search Something Else ....
              </Card>
            )}
        </div>
      </div>

      <div className="centerPage">
        {[...Array(productData && productData.length / 10)].map(
          (item, index) => {
            return (
              <div
                className="onHover"
                onClick={(event) => handleClickEvent(event, index + 1)}
              >
                <div className={pageNum === index + 1 ? "pageNumberColor" : ""}>
                  {index + 1}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
export default ApiData;