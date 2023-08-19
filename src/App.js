/* eslint-disable no-lone-blocks */
/* eslint-disable no-eval */
/* eslint-disable eqeqeq */
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Output from "./components/Output";
import {useState} from "react";

function App() {
  let [output, setOutputValue] = useState("Result: ");
  let [input, setInputValue] = useState(0);
  
  function clickEventHandling(value) {
    if(value == "AC") {

      setOutputValue("Result: ");
      setInputValue(0);

    } 
    else if(value == "C") {
      if(input != 0) {
        input.length != 1 ? setInputValue(input.slice(0, input.length-1)) : setInputValue(input);
      }


    } 
    else if(value == "=") {

      setOutputValue("Result: " + eval(input));

    } 
    else if(input == 0) {  {/* tricky */}

      value == parseInt("00") ? setInputValue(0) : setInputValue(value);

    }
    else {

      input == 0 ? setInputValue(value) : setInputValue(input+value);  {/* tricky */}

    }
  }

  return (
    <div className="container">
      <div className="calculator_frame">
        <Output output = {output}/> {/*not destructuring, just using variable in html*/}
        <Input input = {input}/>
        <Button clickEventHandling = {clickEventHandling}/>
      </div>
    </div>
  );
}

export default App;
