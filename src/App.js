
import "./App.css";

import React, { useState } from "react";
import Testdataapp from "./componants/Testdataapp";
import Serverdataapp from "./componants/Serverdataapp";

function App() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="App">
      <label>
        <input
          type="radio"
          value="testData"
          checked={selectedOption === "testData"}
          name="dataFrom"
          onChange={handleOptionChange}
        />
        Test Data
      </label>

      <label>
        <input
          type="radio"
          value="serverData"
          name="dataFrom"
          checked={selectedOption === "serverData"}
          onChange={handleOptionChange}
        />
        Server Data
      </label>

      {selectedOption==="testData" && <Testdataapp />}
      {selectedOption==="serverData" && <Serverdataapp />}


    </div>
  );
}

export default App;
