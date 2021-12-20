import React, { useState } from "react";
import "../assets/css/components/Calculator.css";
import DisplayArea from "./DisplayArea";
import ButtonPad from "./ButtonPad";
import Button from "./Button";
import Branding from "./Branding";
import * as mathjs from "mathjs";

class ModeConstants {
  static NUMBER_MODE = "number";
  static OPERATOR_MODE = "operator";
}

const Calculator = () => {
  const [result, setResult] = useState("0");
  const [mode, setMode] = useState(ModeConstants.NUMBER_MODE);
  const [canUseDecimalNotation, setCanUseDecimalNotation] = useState(true);

  const handleButtonClicked = (event) => {
    const value = event?.target?.getAttribute("data-value");

    switch (value) {
      case "clear":
        setResult("0");
        setMode(ModeConstants.NUMBER_MODE);
        break;
      case "=":
        calculate();
        break;
      default:
        bufferMathsExpressions(value);
    }
  };

  const bufferMathsExpressions = (value) => {
    setResult((result) => {
      if (result) {
        return getExpression(value, result);
      }
      return result;
    });
  };

  const getExpression = (value, result) => {
    //if the current button is a symbol/operator
    if (value === "+" || value === "-" || value === "x" || value === "/") {
      //user can now use decimal notation again. This is to avoid having a single number with multiple decimal points
      setCanUseDecimalNotation(true);

      //If the current mode is operator mode, then skip adding more operators
      if (mode === ModeConstants.OPERATOR_MODE) {
        return result;
      } else {
        //Else set current mode to operator mode and add the operator to the buffer
        setMode(ModeConstants.OPERATOR_MODE);
        return result + value;
      }
    } else {
      // if the current button is numeral or decimal point,then set mode to number mode
      setMode(ModeConstants.NUMBER_MODE);

      //if the currently displayed value is 0, then replace it
      if (result === "0") {
        return value;
      } else if (value === ".") {
        //else if its "." then check if "." can be used again in the expression
        if (canUseDecimalNotation) {
          setCanUseDecimalNotation(false);
          return result + value;
        } else {
          return result;
        }
      } else {
        return result + value;
      }
    }
  };

  const calculate = () => {
    try {
      //replace all occurrences of x in the expression with *
      let expressionToEvaluate = result?.replaceAll("x", "*");

      //expressions that end with an operator generates runtime
      // errors, so this will detect and remove them
      if (
        expressionToEvaluate.endsWith("+") ||
        expressionToEvaluate.endsWith("-") ||
        expressionToEvaluate.endsWith("*") ||
        expressionToEvaluate.endsWith("/")
      ) {
        expressionToEvaluate = expressionToEvaluate.substr(
          0,
          expressionToEvaluate.length - 1
        );
      }

      //use the MathJS library to evaluate the buffered maths expression
      const result_ = mathjs.evaluate(expressionToEvaluate);

      //round numbers with decimal point
      const roundedResult = !mathjs.isInteger(result_)
        ? mathjs.round(result_, 2)
        : result_;

      //display results
      setResult(roundedResult.toString());
      //reset mode
      setMode(ModeConstants.NUMBER_MODE);
    } catch (e) {
      setResult("error");
    }
  };

  return (
    <div role="wrapper" className="calculator">
      <Branding />
      <DisplayArea data={result} />
      <ButtonPad>
        <Button
          label="C"
          value="clear"
          action={true}
          onClick={handleButtonClicked}
        />
        <Button
          label="7"
          value="7"
          action={false}
          onClick={handleButtonClicked}
        />
        <Button
          label="4"
          value="4"
          action={false}
          onClick={handleButtonClicked}
        />
        <Button
          label="1"
          value="1"
          action={false}
          onClick={handleButtonClicked}
        />
        <Button
          label="0"
          value="0"
          action={false}
          onClick={handleButtonClicked}
        />

        <Button
          label="/"
          value="/"
          action={true}
          onClick={handleButtonClicked}
        />
        <Button
          label="8"
          value="8"
          action={false}
          onClick={handleButtonClicked}
        />
        <Button
          label="5"
          value="5"
          action={false}
          onClick={handleButtonClicked}
        />
        <Button
          label="2"
          value="2"
          action={false}
          onClick={handleButtonClicked}
        />
        <Button
          label="."
          value="."
          action={false}
          onClick={handleButtonClicked}
        />

        <Button
          label="x"
          value="x"
          action={true}
          onClick={handleButtonClicked}
        />
        <Button
          label="9"
          value="9"
          action={false}
          onClick={handleButtonClicked}
        />
        <Button
          label="6"
          value="6"
          action={false}
          onClick={handleButtonClicked}
        />
        <Button
          label="3"
          value="3"
          action={false}
          onClick={handleButtonClicked}
        />
        <Button
          label=""
          value=""
          action={false}
          onClick={handleButtonClicked}
        />

        <Button
          label="–"
          value="-"
          action={true}
          onClick={handleButtonClicked}
        />
        <Button
          label="+"
          value="+"
          action={true}
          size={2}
          onClick={handleButtonClicked}
        />
        <Button
          label="="
          value="="
          action={true}
          size={2}
          onClick={handleButtonClicked}
        />
      </ButtonPad>
    </div>
  );
};

export default Calculator;
