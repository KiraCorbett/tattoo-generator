import React from "react";
import Gallery from "react-photo-gallery";
import { photos, theme } from "./photos";
import './App.css';

function App() {
  const BasicRows = () => <Gallery photos={photos} />;

  return (
    <div className="App">
      <BasicRows />
    </div>
  );
}

export default App;
