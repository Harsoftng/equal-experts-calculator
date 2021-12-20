import Button from "./components/Button";
import ButtonPad from "./components/ButtonPad";

function App() {
  return (
    <ButtonPad>
      <Button onClick={(f) => f} label={5} value={5} size={2} />
      <Button onClick={(f) => f} label={5} value={5} size={1} action={true} />
    </ButtonPad>
  );
}

export default App;
