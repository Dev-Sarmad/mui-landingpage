import React from "react";
import CardCom from "./components/CardCom";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import FooterCom from "./components/FooterCom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <CardCom />
      <FooterCom />
    </div>
  );
}

export default App;
