import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button onClick={(f) => f} label={5} value={5} size={2} />
      <Button onClick={(f) => f} label={5} value={5} size={1} action={true} />
    </div>
  );
}

export default App;
