import logo from "./logo.svg";
import "./App.css";
import { Controls } from "./Controls.js";
import { Blockchain } from "./Blockchain.ts";

function App() {
  return (
    <div className="App">
      <Controls blockchain={new Blockchain(1)}></Controls>
    </div>
  );
}

export default App;
