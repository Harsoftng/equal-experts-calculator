import React from "react";
import "../assets/css/components/Calculator.css";
import DisplayArea from "./DisplayArea";
import ButtonPad from "./ButtonPad";
import Button from "./Button";
import Branding from "./Branding";

const Calculator = () => {
  const handleButtonClicked = () => {};

  return (
    <div role="wrapper" className="calculator">
      <Branding />
      <DisplayArea />
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
          label="X"
          value="X"
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
