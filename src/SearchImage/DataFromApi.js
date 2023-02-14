import React, { useState } from "react";
import "./image.css";
import Card from "react-bootstrap/Card";
const ApiData = ({ productData }) => {
  const [SearchInputData, setSearchInputData] = useState([]);
  const [inputTypeValue, setInputTypeValue] = useState("");

  const debounce = (newFunction) => {
    let timer;

    return function (inputValue) {
      //  here above inputValue parameter,will give us the input we are typing,we can use this directly in our function,instead of taking from arguments.
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
      productData.filter((item, index, arr) =>
        item.title.toLowerCase().includes(values)
      )
    );
  };

  // Here this SearchInputQuery function depicting return function from debounce method above,we can pass any parameter inside return function.
  // and whatever we are typing( onChanging ) that return function will be having that values.
  const SearchInputQuery = debounce(callbackMethod);

  return (
    <div>
      <div className="setSearchAtCenter">
        {/* Here we have not given value on input element,because we are not setting its value and not using it anywhere to show it,by doing 
        event.target.value we can get value without storing it in useState.
          */}
        <input
          autoFocus={true}
          type="search"
          placeholder="Search..."
          // value={inputData}
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
              productData.map((item, index, arr) => {
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

      <div>
                    {/* pagination */}
      </div>

    </div>
  );
};
export default ApiData;
