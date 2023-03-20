import React from "react";
import "./App.css";
import BusData from "./mock_data.json";
import { BusInformationDialog } from "./Components/BusInformationDialog";

function App() {
  return (
    <div className="App">
      <BusInformationDialog {...BusData} />
    </div>
  );
}

export default App;
