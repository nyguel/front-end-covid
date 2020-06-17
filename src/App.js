import React from "react";
import "./App.css";
import Card from "./components/card-paciente/card";
import Header from "./components/header/header";

function App() {
  return (
    <div className='container'>
      <Header />
      <Card />
    </div>
  );
}

export default App;
