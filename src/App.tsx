import React from "react";
import "./App.css";
import Routes from "./routes";
import PhotosContext from "./contextAPI/PhotosContext";

function App() {
  return (
    <div className="App">
      <PhotosContext>
        <Routes />
      </PhotosContext>
    </div>
  );
}

export default App;
