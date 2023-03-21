import React from "react";
import "./App.css";
import BusData from "./Mocks/mock_data.json";
import {BusInformationDialog} from "./BusInformationDialog/BusInformationDialog";

function App() {
  return (
    <div className="app" data-testid="app-container">
      <BusInformationDialog {...BusData} />
    </div>
  );
}

export default App;
