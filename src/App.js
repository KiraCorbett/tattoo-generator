import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import './App.css';

function App() {
  const BasicRows = () => <Gallery photos={photos} />;

  return (
    <div className="App">
      <BasicRows />, document.getElementById("app")
    </div>
  );
}

export default App;
